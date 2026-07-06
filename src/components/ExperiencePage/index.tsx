import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, Loader2 } from 'lucide-react';
import ProjectCard from './ProjectCard';
import TemplateProject from './TemplateProject';
import { ProjectType, getAllProjects } from '../../services/projects';
import { SectionLabel } from '../shared/Primitives';

type CategorySelect = 'Personal' | 'Professional' | 'Academic';

const CATEGORIES: CategorySelect[] = ['Professional', 'Personal', 'Academic'];

const monthDict: { [key: string]: number } = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

function sortProjects(data: ProjectType[]): ProjectType[] {
  return [...data].sort((a, b) => {
    const aTimeline = a.timeline.split(' ');
    const bTimeLine = b.timeline.split(' ');

    let dateOrder = 0;
    if (aTimeline.length >= 4 && bTimeLine.length >= 4) {
      const aYear = aTimeline[aTimeline.length - 1];
      const aMonth = aTimeline[aTimeline.length - 2];
      const bYear = bTimeLine[bTimeLine.length - 1];
      const bMonth = bTimeLine[bTimeLine.length - 2];

      if (bYear === 'Present') dateOrder = 1;
      else if (aYear === 'Present') dateOrder = -1;
      else if (Number(aYear) > Number(bYear)) dateOrder = -1;
      else if (Number(bYear) > Number(aYear)) dateOrder = 1;
      else if (aMonth in monthDict && bMonth in monthDict) {
        dateOrder = monthDict[aMonth] > monthDict[bMonth] ? -1 : 1;
      }
    }

    if (dateOrder !== 0) return dateOrder;
    return (a.sortOrder ?? 0) - (b.sortOrder ?? 0);
  });
}

function CompanyDropdown({
  companies,
  company,
  setCompany,
}: {
  companies: string[];
  company: string;
  setCompany: (c: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border border-border bg-card text-foreground hover:bg-muted transition-colors"
      >
        {company}
        <ChevronDown size={14} className="text-muted-foreground" />
      </button>
      {open && (
        <div className="absolute left-0 sm:left-auto sm:right-0 mt-1.5 z-20 min-w-[180px] max-h-64 overflow-auto rounded-md border border-border bg-popover shadow-lg p-1">
          {companies.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCompany(c);
                setOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                company === c
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ExperiencePage() {
  const [category, setCategory] = useState<CategorySelect>('Professional');
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [company, setCompany] = useState<string>('All');
  const [availableCompanies, setCompanies] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProjects()
      .then((data) => {
        const sortedData = sortProjects(data);
        setProjects(sortedData);
        const temp: string[] = ['All'];
        sortedData.forEach((project) => {
          if (project.company && !temp.includes(project.company)) {
            temp.push(project.company);
          }
        });
        setCompanies(temp);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showModal]);

  const handleLearnMore = (project: ProjectType) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const projectsToShow = projects.filter((project) => {
    if (category === 'Professional') {
      return company === 'All'
        ? project.category === category
        : project.company === company && project.category === category;
    }
    return project.category === category;
  });

  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="text-2xl font-semibold tracking-[-0.02em]">Projects &amp; roles</h2>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center gap-3 py-20 text-muted-foreground">
            <Loader2 size={22} className="animate-spin text-primary" />
            <p className="text-sm">Loading projects...</p>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="inline-flex items-center gap-1 p-1 rounded-lg border border-border bg-card">
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setCategory(c);
                      setCompany('All');
                    }}
                    className={`relative px-3.5 py-1.5 text-sm rounded-md transition-colors ${
                      category === c
                        ? 'text-primary-foreground font-medium'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {category === c && (
                      <motion.span
                        layoutId="active-tab"
                        className="absolute inset-0 bg-primary rounded-md"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{c}</span>
                  </button>
                ))}
              </div>

              <AnimatePresence>
                {category === 'Professional' && (
                  <motion.div
                    key="company-filter"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="flex items-center gap-3 w-full sm:flex-1 sm:w-auto"
                  >
                    <span className="hidden sm:block flex-1 h-px bg-border" />
                    <CompanyDropdown
                      companies={availableCompanies}
                      company={company}
                      setCompany={setCompany}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              {projectsToShow.length === 0 ? (
                <motion.p
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="text-sm text-muted-foreground py-12 text-center"
                >
                  No projects to show here yet.
                </motion.p>
              ) : (
                <motion.div
                  key={`${category}-${company}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="grid md:grid-cols-2 gap-3"
                >
                  {projectsToShow.map((project) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      onLearnMore={() => handleLearnMore(project)}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>

      <AnimatePresence>
        {showModal && selectedProject && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-background/80 backdrop-blur-sm p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="relative w-full max-w-3xl my-8 rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-2xl"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                aria-label="Close"
                className="absolute top-4 right-4 p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <X size={20} />
              </button>
              <TemplateProject project={selectedProject} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ExperiencePage;
