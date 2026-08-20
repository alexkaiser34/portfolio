import type { LucideIcon } from 'lucide-react';
import { Briefcase, Sparkles, Cpu, Code2 } from 'lucide-react';

/**
 * Static presentation data for the AI assistant UI. The chat itself is powered
 * by the `/api/chat` backend via the Vercel AI SDK `useChat` hook — see
 * `components/AIAssistant`.
 */

export interface SuggestedPrompt {
  icon: LucideIcon;
  text: string;
}

export const SUGGESTED_PROMPTS: SuggestedPrompt[] = [
  { icon: Sparkles, text: 'What experience does Alex have building AI tools and agents?' },
  { icon: Cpu, text: "Tell me about Alex's embedded and hardware experience" },
  { icon: Briefcase, text: 'Paste a job description to see how Alex aligns' },
  { icon: Code2, text: "What are Alex's strongest technical skills?" },
];
