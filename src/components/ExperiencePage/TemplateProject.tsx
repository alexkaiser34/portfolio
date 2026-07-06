import { motion } from 'framer-motion';
import { Calendar, Briefcase, Code2 } from 'lucide-react';
import { ProjectType } from '../../services/projects';
import { TechTag } from '../shared/Primitives';

export interface TemplateProjectProps {
  project: ProjectType;
}

function TemplateProject({ project }: TemplateProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col gap-8"
    >
      {project.image && (
        <div className="rounded-xl overflow-hidden border border-border bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center p-4">
          <img
            src={project.image}
            alt={project.title}
            className="max-w-full max-h-56 object-contain mx-auto"
          />
        </div>
      )}

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <TechTag label={project.category} />
          {project.company && <TechTag label={project.company} />}
        </div>
        <h1 className="text-3xl font-semibold tracking-[-0.02em] text-foreground">
          {project.title}
        </h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
          <Calendar size={15} />
          <span>{project.timeline}</span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold tracking-[-0.01em] text-foreground">
          About the project
        </h2>
        <p className="text-[0.95rem] text-muted-foreground leading-[1.8]">
          {project.longDescription}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Briefcase size={16} className="text-primary" />
          <h2 className="text-lg font-semibold tracking-[-0.01em] text-foreground">
            Role: {project.role}
          </h2>
        </div>
        <ul className="flex flex-col gap-2.5">
          {project.responsibilities.map((item, index) => (
            <motion.li
              key={`resp-${index}`}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
            >
              <span className="mt-2 size-1.5 rounded-full bg-primary flex-shrink-0" />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Code2 size={16} className="text-primary" />
          <h2 className="text-lg font-semibold tracking-[-0.01em] text-foreground">
            Technical accomplishments
          </h2>
        </div>
        <ul className="flex flex-col gap-2.5">
          {project.contributions.map((item, index) => (
            <motion.li
              key={`cont-${index}`}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
            >
              <span className="mt-2 size-1.5 rounded-full bg-primary flex-shrink-0" />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default TemplateProject;