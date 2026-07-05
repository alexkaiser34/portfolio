import { Menu, X, Sun, Moon, Mail } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export interface NavLink {
  label: string;
  id: string;
}

interface NavBarProps {
  links: NavLink[];
  active: string;
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  onNavigate: (id: string) => void;
  contactEmail: string;
}

function NavBar({
  links,
  active,
  scrolled,
  menuOpen,
  setMenuOpen,
  onNavigate,
  contactEmail,
}: NavBarProps) {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === 'dark';

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-2xl border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-sm font-semibold tracking-tight hover:text-primary transition-colors flex-shrink-0"
        >
          Alex Kaiser
        </button>

        <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                active === link.id
                  ? 'text-foreground font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
          >
            <Mail size={13} />
            Contact
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-2xl">
          <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col gap-0.5">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="text-left px-3 py-2.5 text-sm rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="border-t border-border mt-2 pt-3">
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-2 px-3 py-2.5 text-sm text-primary font-medium"
              >
                <Mail size={14} />
                {contactEmail}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
