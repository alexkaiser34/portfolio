import { existsSync } from 'node:fs';
import { createInterface } from 'node:readline/promises';
import type { ModelMessage } from 'ai';

/**
 * Local test harness for the AI assistant — talk to it from the terminal
 * without deploying the site. It uses the real content pipeline
 * (`loadSystemPrompt` reads live from Supabase) and the same model config as
 * the deployed `/api/chat` endpoint, but skips the HTTP layer and rate limiting.
 *
 * Requires only VITE_SUPABASE_URL, VITE_SUPABASE_PUBLISHABLE_KEY and
 * OPENAI_API_KEY (no Upstash). Run with: `npm run test:ai`.
 *
 * Commands: /prompt (print system prompt), /reset (clear chat), /exit (quit).
 * Pass `--prompt` to print the assembled prompt and exit.
 */

// Load env before importing anything that reads it. Prefer .env.local, then .env.
if (!process.env.VITE_SUPABASE_URL) {
  for (const file of ['.env.local', '.env']) {
    if (existsSync(file)) {
      process.loadEnvFile(file);
      break;
    }
  }
}

const missing = ['VITE_SUPABASE_URL', 'VITE_SUPABASE_PUBLISHABLE_KEY'].filter(
  (key) => !process.env[key]
);
if (missing.length > 0) {
  console.error(
    `\n❌ Missing required env var(s): ${missing.join(', ')}.\n` +
      '   Add them to .env.local (or .env) at the project root.\n'
  );
  process.exit(1);
}

// Dynamic import so the Supabase client (created at module load) sees the env.
const { loadSystemPrompt } = await import('../api/_lib/content');
const { streamAssistantReply, ASSISTANT_MODEL } = await import('../api/_lib/assistant');

async function requirePrompt(): Promise<string> {
  try {
    return await loadSystemPrompt();
  } catch (err) {
    console.error(
      '\n❌ Could not load content from Supabase.\n' +
        '   Check your env file (VITE_SUPABASE_URL, VITE_SUPABASE_PUBLISHABLE_KEY)\n' +
        '   and that schema.sql + seed.sql have been run.\n'
    );
    console.error(err);
    process.exit(1);
  }
}

async function main() {
  const systemPrompt = await requirePrompt();

  if (process.argv.includes('--prompt')) {
    console.log(systemPrompt);
    return;
  }

  console.log(`\n🤖 Alex's AI Assistant — local test (${ASSISTANT_MODEL})`);
  console.log('Ask a question, paste a job description, or use a command:');
  console.log('  /prompt   print the assembled system prompt');
  console.log('  /reset    clear the conversation');
  console.log('  /exit     quit\n');

  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const messages: ModelMessage[] = [];

  try {
    for (;;) {
      const input = (await rl.question('You  › ')).trim();
      if (!input) continue;
      if (input === '/exit' || input === '/quit') break;
      if (input === '/reset') {
        messages.length = 0;
        console.log('(conversation cleared)\n');
        continue;
      }
      if (input === '/prompt') {
        console.log('\n' + (await loadSystemPrompt()) + '\n');
        continue;
      }

      messages.push({ role: 'user', content: input });

      process.stdout.write('\nAI   › ');
      let answer = '';
      try {
        const result = await streamAssistantReply(messages);
        for await (const delta of result.textStream) {
          process.stdout.write(delta);
          answer += delta;
        }
      } catch (err) {
        messages.pop();
        console.error('\n⚠️  Error generating reply:', err, '\n');
        continue;
      }
      messages.push({ role: 'assistant', content: answer });
      process.stdout.write('\n\n');
    }
  } finally {
    rl.close();
  }
}

await main();
