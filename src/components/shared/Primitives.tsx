import React from 'react';
import { cn } from '../../lib/utils';

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn('max-w-7xl mx-auto px-6', className)}>{children}</div>;
}

export function Divider() {
  return (
    <Container>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
    </Container>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-[0.14em] text-primary mb-3">
      <span className="size-1.5 rounded-full bg-primary flex-shrink-0" />
      {children}
    </span>
  );
}

export function TechTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-muted text-muted-foreground border border-border">
      {label}
    </span>
  );
}
