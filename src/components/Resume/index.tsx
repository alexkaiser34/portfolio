import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import resume from './resume.pdf';
import { getProfile } from '../../services/profile';
import { getResume, type Resume } from '../../services/resume';
import { profileModel } from '@shared/models';
import { SectionLabel, TechTag } from '../shared/Primitives';
import { usePdfScale, PdfModal } from '../shared/PdfViewer';

function Resume() {
  const [profile, setProfile] = useState(profileModel.empty);
  const [resumeData, setResumeData] = useState<Resume>({ work: [], education: [] });
  const [showModal, setShowModal] = useState(false);
  const scale = usePdfScale(
    [
      { maxWidth: 425, scale: 0.48 },
      { maxWidth: 475, scale: 0.58 },
      { maxWidth: 560, scale: 0.7 },
      { maxWidth: 999, scale: 0.8 },
    ],
    1.2
  );

  useEffect(() => {
    getProfile().then(setProfile);
    getResume().then(setResumeData);
  }, []);

  return (
    <section id="resume" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-12">
          <div>
            <SectionLabel>Resume</SectionLabel>
            <h2 className="text-2xl font-semibold tracking-[-0.02em]">Experience & education</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm border border-border rounded-md hover:bg-muted transition-colors text-foreground"
            >
              <FileText size={13} />
              View
            </button>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm border border-border rounded-md hover:bg-muted transition-colors text-foreground"
            >
              <Download size={13} />
              Download PDF
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-14">
          <div>
            <p className="text-[0.7rem] font-mono font-medium uppercase tracking-[0.14em] text-muted-foreground mb-8">
              Work history
            </p>
            <div className="flex flex-col gap-10">
              {resumeData.work.map((item, i) => (
                <div
                  key={item.company}
                  className={`grid md:grid-cols-[160px_1fr] gap-4 md:gap-10 ${
                    i < resumeData.work.length - 1 ? 'pb-10 border-b border-border' : ''
                  }`}
                >
                  <div className="md:pt-0.5">
                    <p className="text-xs font-mono text-foreground">{item.period}</p>
                    <p className="text-xs font-mono text-muted-foreground mt-1">
                      {item.location}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-0.5">
                      <p className="text-[0.93rem] font-semibold text-foreground tracking-[-0.01em]">
                        {item.role}
                      </p>
                      <span className="self-start mt-0.5 px-2 py-0.5 text-xs font-medium text-primary bg-primary/8 border border-primary/15 rounded-md">
                        {item.company}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-2 size-1.5 rounded-full bg-primary flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tech.map((t) => (
                        <TechTag key={t} label={t} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.7rem] font-mono font-medium uppercase tracking-[0.14em] text-muted-foreground mb-8">
              Education
            </p>
            <div className="flex flex-col gap-10">
              {resumeData.education.map((item, i) => (
                <div
                  key={item.school}
                  className={`grid md:grid-cols-[160px_1fr] gap-4 md:gap-10 ${
                    i < resumeData.education.length - 1 ? 'pb-10 border-b border-border' : ''
                  }`}
                >
                  <div className="md:pt-0.5">
                    <p className="text-xs font-mono text-foreground">{item.period}</p>
                    <p className="text-xs font-mono text-muted-foreground mt-1">
                      {item.location}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-0.5">
                      <p className="text-[0.93rem] font-semibold text-foreground tracking-[-0.01em]">
                        {item.degree}
                      </p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary hover:underline w-fit"
                      >
                        {item.school}
                      </a>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-2 size-1.5 rounded-full bg-primary flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PdfModal
        file={showModal ? resume : null}
        scale={scale}
        onClose={() => setShowModal(false)}
        title="Resume"
        downloadHref={profile.resumeUrl}
      />
    </section>
  );
}

export default Resume;
