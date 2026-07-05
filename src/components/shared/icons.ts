import type { LucideIcon } from 'lucide-react';
import {
  Sparkles,
  Boxes,
  Cpu,
  Zap,
  Code2,
  ClipboardList,
  Lightbulb,
  Layers,
  MessageSquare,
} from 'lucide-react';

/**
 * Registry mapping icon-name strings (as stored in the data/DB layer) to their
 * Lucide components. Icons can't be serialized in a database, so services store
 * the icon name and the UI resolves it here.
 */
export const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Boxes,
  Cpu,
  Zap,
  Code2,
  ClipboardList,
  Lightbulb,
  Layers,
  MessageSquare,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Code2;
}
