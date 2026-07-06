import { ArrowUpRight } from 'lucide-react';
import { ProjectType } from '../../services/projects';
import { TechTag } from '../shared/Primitives';

interface ProjectCardProps {
  project: ProjectType;
  onLearnMore: () => void;
}

function ProjectCard({ project, onLearnMore }: ProjectCardProps) {
  return (
    <button
      onClick={onLearnMore}
      className="group relative text-left flex flex-col gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-200"
      style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}
    >
      {/* accent line on hover */}
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
      {project.image && (
        <div className="rounded-lg overflow-hidden border border-border h-40 bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center p-3">
          <img
            src={project.image}
            alt={project.title}
            className="max-w-full max-h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <h3 className="text-[0.95rem] font-semibold tracking-[-0.01em] text-foreground leading-snug">
          {project.title}
        </h3>
        <span className="inline-flex items-center gap-1 flex-shrink-0 mt-0.5 px-2 py-0.5 rounded-full text-[0.7rem] font-medium text-primary bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          View details
          <ArrowUpRight size={11} />
        </span>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap items-center gap-1.5 pt-1">
        <TechTag label={project.category} />
        {project.company && <TechTag label={project.company} />}
        {project.timeline && (
          <span className="ml-auto text-xs font-mono text-muted-foreground">
            {project.timeline}
          </span>
        )}
      </div>
    </button>
  );
}

export default ProjectCard;