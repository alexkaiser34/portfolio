import { useEffect, useState } from 'react';
import Headshot from '../../images/Headshot.png';
import { SectionLabel } from '../shared/Primitives';
import { getAbout, type About } from '../../services/about';

const aboutSectionTitles = [
  'Engineering Background',
  'AI & Engineering Tools',
  'What I Bring',
];

function About() {
  const [about, setAbout] = useState<About>({ paragraphs: [], stats: [] });

  useEffect(() => {
    getAbout().then(setAbout);
  }, []);

  return (
    <section id="about" className="py-24 bg-card/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16 items-start">
          <div className="md:pt-0.5 flex flex-col gap-6">
            <div>
              <SectionLabel>About</SectionLabel>
              <h2 className="text-2xl font-semibold tracking-[-0.02em]">A bit about me</h2>
            </div>
            <div className="w-full max-w-[220px] aspect-[4/5] rounded-2xl overflow-hidden border border-border">
              <img
                src={Headshot}
                alt="Alex Kaiser"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 text-[0.95rem] text-muted-foreground leading-[1.8]">
            {about.paragraphs.map((paragraph, i) => (
              <div
                key={paragraph}
                className={`flex flex-col gap-2 ${i > 0 ? 'pt-6 border-t border-border' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary shrink-0" />
                  <h3 className="text-sm font-semibold text-foreground leading-tight">
                    {aboutSectionTitles[i] ?? `About ${i + 1}`}
                  </h3>
                </div>
                <p>{paragraph}</p>
              </div>
            ))}

            <div className="grid grid-cols-3 mt-2 rounded-xl border border-border overflow-hidden bg-card">
              {about.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col gap-1 px-3 sm:px-6 py-4 sm:py-5 ${
                    i < about.stats.length - 1 ? 'border-r border-border' : ''
                  }`}
                >
                  <p className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
