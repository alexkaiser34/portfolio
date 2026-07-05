import type { LucideIcon } from 'lucide-react';
import { Briefcase, Sparkles, Bot, ArrowUpRight } from 'lucide-react';

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
  { icon: Briefcase, text: 'Paste a job description to see how Alex aligns' },
  { icon: Sparkles, text: "What are Alex's strongest technical skills?" },
  { icon: Bot, text: "Tell me about Alex's hardware and embedded experience" },
  { icon: ArrowUpRight, text: 'Is Alex open to new opportunities?' },
];
