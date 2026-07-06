import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  ArrowUpRight,
  Download,
  Bot,
  MapPin,
} from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import { useChat } from '../../context/ChatContext';
import { getProfile } from '../../services/profile';
import { getExpertise } from '../../services/expertise';
import { SUGGESTED_PROMPTS } from '../../services/aiAssistant';
import { profileModel, expertiseModel } from '@shared/models';
import { getIcon } from '../shared/icons';
import { SectionLabel } from '../shared/Primitives';

// ─── Typewriter hook ────────────────────────────────────────────────────────

function useTypewriter(strings: string[], typeSpeed = 75, deleteSpeed = 40, pauseMs = 1800) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (strings.length === 0) return;
    const current = strings[index];

    if (!isDeleting && displayText === current) {
      const t = setTimeout(() => setIsDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }
    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setIndex((i) => (i + 1) % strings.length);
      return;
    }

    const delay = isDeleting ? deleteSpeed : typeSpeed;
    const next = isDeleting ? displayText.slice(0, -1) : current.slice(0, displayText.length + 1);
    const t = setTimeout(() => setDisplayText(next), delay);
    return () => clearTimeout(t);
  }, [strings, displayText, isDeleting, index, typeSpeed, deleteSpeed, pauseMs]);

  return displayText;
}

function TypedTitle({ strings }: { strings: string[] }) {
  const text = useTypewriter(strings);
  return (
    <p className="text-xl md:text-2xl text-muted-foreground font-normal tracking-[-0.01em] min-h-7">
      {text}
      <span className="inline-block ml-0.5 text-primary animate-pulse select-none">|</span>
    </p>
  );
}

// ─── AI Feature Card ─────────────────────────────────────────────────────────

function AIFeatureCard() {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const { openChat, openChatWithPrompt } = useChat();

  return (
    <div className="w-full lg:w-[420px]">
      <div
        className="rounded-2xl border border-border bg-card p-7 flex flex-col gap-6 shadow-[0_2px_24px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_24px_rgba(0,0,0,0.35)]"
      >
        {/* Header */}
        <div className="flex items-center gap-2">
          <span className="text-[0.7rem] font-mono font-medium uppercase tracking-[0.14em] text-muted-foreground">
            AI-powered
          </span>
          <span className="size-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
        </div>

        {/* Icon + headline + description */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-12 rounded-xl bg-primary/10 border border-primary/15 text-primary shrink-0">
              <Bot size={22} />
            </div>
            <p className="text-lg font-semibold text-foreground tracking-[-0.01em]">Alex's AI assistant</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-[-0.01em] text-foreground mb-2">
              Skip the search. Just ask.
            </h3>
            <p className="text-[0.9rem] text-muted-foreground leading-relaxed">
              Ask about my background, skills, past work and projects, current
              availability, or paste a job description to check role fit - and get
              a direct, reliable answer in seconds. Same information you'd find
              going through the site yourself, just faster.
            </p>
          </div>
        </div>

        {/* Suggested prompts */}
        <div className="flex flex-col gap-2">
          <p className="text-[0.65rem] font-mono font-medium uppercase tracking-[0.14em] text-muted-foreground mb-0.5">
            Try asking
          </p>
          {SUGGESTED_PROMPTS.slice(0, 3).map(({ text }) => (
            <button
              key={text}
              onClick={() => openChatWithPrompt(text)}
              className="group text-left text-xs px-3.5 py-2.5 rounded-xl border border-border bg-muted hover:border-primary/30 hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-all duration-150 flex items-center gap-2"
            >
              <ArrowUpRight
                size={11}
                className="shrink-0 opacity-40 group-hover:opacity-70 transition-opacity"
              />
              {text}
            </button>
          ))}
        </div>

        {/* Primary CTA */}
        <button
          onClick={openChat}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-95 transition-all duration-200 hover:scale-[1.01]"
          style={{
            boxShadow: dark
              ? '0 4px 20px rgba(0,0,0,0.4), 0 0 20px rgba(139,142,245,0.15)'
              : '0 4px 16px rgba(91,95,207,0.25)',
          }}
        >
          Start a conversation
          <ArrowUpRight size={14} />
        </button>
      </div>
    </div>
  );
}

interface HeroProps {
  onNavigate: (id: string) => void;
}

function HeroSection({ onNavigate }: HeroProps) {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const [profile, setProfile] = useState(profileModel.empty);
  const [expertise, setExpertise] = useState(expertiseModel.empty);

  useEffect(() => {
    getProfile().then(setProfile);
    getExpertise().then(setExpertise);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-14 overflow-hidden">
      {/* ambient diagonal colour wash — very faint, not a bubble */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: dark
            ? 'linear-gradient(135deg, rgba(91,95,207,0.07) 0%, transparent 55%)'
            : 'linear-gradient(135deg, rgba(91,95,207,0.05) 0%, transparent 55%)',
        }}
      />
      {/* dot grid — masked so it dissolves toward the bottom */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${
            dark ? 'rgba(255,255,255,0.055)' : 'rgba(0,0,0,0.065)'
          } 1px, transparent 0)`,
          backgroundSize: '28px 28px',
          maskImage: 'linear-gradient(to bottom, black 30%, transparent 85%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 85%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-[1fr_480px] gap-12 lg:gap-16 items-center">
          <motion.div
            className="flex flex-col gap-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="hidden">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono bg-card border border-border rounded-full text-muted-foreground">
                <span className="size-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                Open to new opportunities
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-[clamp(2.6rem,7vw,4.8rem)] font-semibold tracking-[-0.03em] leading-[1.06] text-foreground">
                {profile.name}
              </h1>
              <TypedTitle strings={profile.title} />
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                <MapPin size={14} className="text-primary" />
                {profile.location}
              </p>
            </div>

            <p className="text-base md:text-[1.05rem] text-muted-foreground leading-[1.75] max-w-[520px]">
              I build practical AI tooling, full-stack applications, and embedded
              software - from LLM integrations to firmware and hardware-adjacent
              systems. My focus is on software that's correct, clear, and holds up
              in real use.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 flex-wrap">
                <button
                  onClick={() => onNavigate('experience')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium border border-border rounded-md text-foreground hover:bg-muted transition-colors"
                >
                  View my work
                  <ArrowUpRight size={14} />
                </button>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium border border-border rounded-md text-foreground hover:bg-muted transition-colors"
                >
                  <Download size={13} />
                  Resume
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 pt-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={17} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={17} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AIFeatureCard />
          </motion.div>
        </div>

        {/* ─── Areas of Expertise ─────────────────────────────────────────── */}
        {expertise.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-14"
          >
            <div className="h-px w-full bg-linear-to-r from-transparent via-border to-transparent mb-8" />
            <SectionLabel>Areas of Expertise</SectionLabel>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-flow-col lg:auto-cols-fr gap-3 mt-4">
              {expertise.map((item, i) => {
                const Icon = getIcon(item.icon);
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                    className="relative group flex items-center gap-3 p-4 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/20 hover:shadow-sm transition-all duration-200 cursor-default"
                  >
                    <div className="flex items-center justify-center size-8 rounded-lg bg-accent text-primary shrink-0">
                      <Icon size={15} />
                    </div>
                    <p className="text-sm font-semibold text-foreground leading-tight">{item.title}</p>
                    {/* Styled tooltip */}
                    <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-52 px-3 py-2 rounded-lg border border-border bg-popover text-popover-foreground text-xs leading-relaxed shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                      {item.description}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function Hero({ onNavigate }: HeroProps) {
  return <HeroSection onNavigate={onNavigate} />;
}

export default Hero;
