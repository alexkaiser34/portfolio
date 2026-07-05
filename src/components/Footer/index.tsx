import { useEffect, useState } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { getProfile } from '../../services/profile';
import { profileModel } from '@shared/models';

function Footer() {
  const [profile, setProfile] = useState(profileModel.empty);

  useEffect(() => {
    getProfile().then(setProfile);
  }, []);

  return (
    <footer className="py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div className="flex flex-col gap-1.5">
          <p className="text-sm font-semibold tracking-tight">{profile.name}</p>
          <p className="text-sm text-muted-foreground">
            {profile.title} · {profile.location}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs font-mono uppercase tracking-[0.1em] text-muted-foreground">
            Get in touch
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            {profile.email}
            <ArrowUpRight size={13} />
          </a>
          <div className="flex items-center gap-4 mt-1">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={15} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={15} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 flex items-center justify-between">
        <p className="text-xs text-muted-foreground/40 font-mono">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xs text-muted-foreground/40 font-mono hover:text-muted-foreground transition-colors"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}

export default Footer;
