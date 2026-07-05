import { useEffect, useState } from 'react';
import Headshot from '../../images/Headshot.png';
import { SectionLabel } from '../shared/Primitives';
import { getAbout, type About } from '../../services/about';

function About() {
  const [about, setAbout] = useState<About>({ paragraphs: [], stats: [] });

  useEffect(() => {
    getAbout().then(setAbout);
  }, []);

  return (
    <section id="about" className="py-24 bg-card/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[220px_1fr] gap-16 items-start">
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

          <div className="flex flex-col gap-4 text-[0.95rem] text-muted-foreground leading-[1.8]">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="grid grid-cols-3 mt-6 rounded-xl border border-border overflow-hidden bg-card">
              {about.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col gap-1 px-6 py-5 ${
                    i < about.stats.length - 1 ? 'border-r border-border' : ''
                  }`}
                >
                  <p className="text-4xl font-bold text-foreground tracking-tight">
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
