import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  ArrowUpRight,
  Download,
  ChevronLeft,
  ChevronRight,
  Bot,
  MapPin,
} from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import { useChat } from '../../context/ChatContext';
import { getProfile } from '../../services/profile';
import { getExpertise } from '../../services/expertise';
import { profileModel, expertiseModel } from '@shared/models';
import { getIcon } from '../shared/icons';

const ROTATE_MS = 4500;

function ExpertiseCarousel() {
  const [expertise, setExpertise] = useState(expertiseModel.empty);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = expertise.length;

  useEffect(() => {
    getExpertise().then(setExpertise);
  }, []);

  useEffect(() => {
    if (paused || total === 0) return;
    const id = setInterval(() => setActive((a) => (a + 1) % total), ROTATE_MS);
    return () => clearInterval(id);
  }, [paused, total]);

  const go = (dir: number) => setActive((a) => (a + dir + total) % total);

  if (total === 0) return null;

  const current = expertise[active];
  const Icon = getIcon(current.icon);

  return (
    <div
      className="w-full lg:w-[420px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative rounded-2xl border border-border bg-card p-7 min-h-[300px] flex flex-col shadow-[0_2px_24px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between mb-5">
          <span className="text-[0.7rem] font-mono font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Areas of expertise
          </span>
          <span className="text-xs font-mono text-muted-foreground tabular-nums">
            {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>

        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center justify-center size-12 rounded-xl bg-accent text-primary">
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-semibold tracking-[-0.01em] text-foreground">
                {current.title}
              </h3>
              <p className="text-[0.95rem] text-muted-foreground leading-relaxed">
                {current.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between pt-6 mt-auto">
          <div className="flex items-center gap-1.5">
            {expertise.map((item, i) => (
              <button
                key={item.title}
                onClick={() => setActive(i)}
                aria-label={`Show ${item.title}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? 'w-6 bg-primary' : 'w-1.5 bg-border hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface HeroProps {
  onNavigate: (id: string) => void;
}

function Hero({ onNavigate }: HeroProps) {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const { openChat } = useChat();
  const [profile, setProfile] = useState(profileModel.empty);

  useEffect(() => {
    getProfile().then(setProfile);
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
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono bg-card border border-border rounded-full text-muted-foreground">
                <span className="size-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                Open to new opportunities
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-[clamp(2.6rem,7vw,4.8rem)] font-semibold tracking-[-0.03em] leading-[1.06] text-foreground">
                {profile.name}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-normal tracking-[-0.01em]">
                {profile.title}
              </p>
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                <MapPin size={14} className="text-primary" />
                {profile.location}
              </p>
            </div>

            <p className="text-base md:text-[1.05rem] text-muted-foreground leading-[1.75] max-w-[520px]">
              I build across the full stack and down to the hardware — from full-stack
              and embedded software to FPGA and electrical design, and increasingly AI
              tooling and integrations. I bring a unique perspective to complex
              engineering challenges.
            </p>

            <div className="flex flex-col gap-3">
              {/* AI CTA — primary action */}
              <button
                onClick={openChat}
                className="group inline-flex items-center gap-3 self-start pl-3 pr-5 py-3 rounded-2xl bg-primary text-primary-foreground hover:opacity-95 transition-all duration-200 hover:scale-[1.01]"
                style={{
                  boxShadow: dark
                    ? '0 4px 28px rgba(0,0,0,0.5), 0 0 30px rgba(139,142,245,0.22)'
                    : '0 4px 24px rgba(91,95,207,0.28), 0 2px 8px rgba(0,0,0,0.08)',
                }}
              >
                <div className="size-8 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                  <Bot size={17} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold leading-none mb-1">Chat with Alex's AI</p>
                  <p className="text-[11px] opacity-70 leading-none">
                    Ask about experience, skills, or paste a job description
                  </p>
                </div>
                <ArrowUpRight
                  size={14}
                  className="ml-1 opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </button>

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
            <ExpertiseCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
