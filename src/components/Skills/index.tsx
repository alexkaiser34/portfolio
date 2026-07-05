import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../shared/Primitives';
import { getSkills, type Skills } from '../../services/skills';
import { getIcon } from '../shared/icons';

function Skills() {
  const [skills, setSkills] = useState<Skills>({ technical: [], soft: [] });

  useEffect(() => {
    getSkills().then(setSkills);
  }, []);

  return (
    <section id="skills" className="relative overflow-hidden py-24 bg-card/60">
      <div className="pointer-events-none absolute bottom-0 right-0 w-[55%] aspect-square rounded-full bg-primary/[0.06] blur-[110px] translate-x-1/3 translate-y-1/3" aria-hidden />
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <SectionLabel>Skills</SectionLabel>
          <h2 className="text-2xl font-semibold tracking-[-0.02em]">Skills &amp; expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Technical skills */}
          <div className="flex flex-col gap-8">
            <p className="text-sm font-semibold text-foreground tracking-[-0.01em]">
              Technical skills
            </p>
            {skills.technical.map((group) => (
              <div key={group.label} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <p className="text-[0.7rem] font-mono font-medium uppercase tracking-[0.14em] text-muted-foreground flex-shrink-0">
                    {group.label}
                  </p>
                  <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1.5 rounded-md text-sm bg-card text-foreground border border-border hover:border-primary/35 hover:bg-accent hover:text-accent-foreground transition-all duration-150 cursor-default select-none"
                      style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft skills */}
          <div className="flex flex-col gap-5 md:border-l md:border-border md:pl-12 lg:pl-16">
            <p className="text-sm font-semibold text-foreground tracking-[-0.01em]">
              Soft skills
            </p>
            <div className="flex flex-col gap-3">
              {skills.soft.map((skill, i) => {
                const Icon = getIcon(skill.icon);
                return (
                  <motion.div
                    key={skill.title}
                    className="flex gap-4 p-5 rounded-xl border border-border bg-card"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <div className="flex items-center justify-center size-10 rounded-lg bg-accent text-primary flex-shrink-0">
                      <Icon size={18} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-[0.93rem] font-semibold tracking-[-0.01em] text-foreground">
                        {skill.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
