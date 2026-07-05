import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import fpgaLetter from './fpga-letter-of-rec.pdf';
import schoolLetter from './school-letter-of-rec.pdf';
import secTechLetter from './secure-tech-letter-of-rec.pdf';
import { SectionLabel } from '../shared/Primitives';
import { usePdfScale, PdfModal } from '../shared/PdfViewer';
import { getRecommendations } from '../../services/recommendations';
import { recommendationsModel } from '@shared/models';

// Bundled PDF assets keyed to match the `fileKey` stored in the data layer.
const fileMap: Record<string, string> = {
  school: schoolLetter,
  fpga: fpgaLetter,
  secureTech: secTechLetter,
};

function RecommendationPage() {
  const [recommendations, setRecommendations] = useState(recommendationsModel.empty);
  const [activeFile, setActiveFile] = useState<string | null>(null);
  const scale = usePdfScale(
    [{ maxWidth: 700, scale: 0.55 }, { maxWidth: 1300, scale: 0.8 }],
    1.0
  );

  useEffect(() => {
    getRecommendations().then(setRecommendations);
  }, []);

  return (
    <section id="recommendations" className="py-24 bg-card/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <SectionLabel>Recommendations</SectionLabel>
          <h2 className="text-2xl font-semibold tracking-[-0.02em]">What colleagues say</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Professional endorsements from academic and industry leaders who have
            witnessed my work firsthand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          {recommendations.map((rec, i) => (
            <motion.div
              key={rec.name}
              className="relative flex flex-col gap-5 p-6 rounded-xl border border-border bg-card overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
            >
              {/* decorative quote mark */}
              <span className="pointer-events-none select-none absolute -top-1 right-4 text-[7rem] font-serif leading-none text-primary/6">
                &ldquo;
              </span>
              <p className="text-sm text-muted-foreground leading-[1.75] flex-1 relative z-10">
                {rec.description}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div
                  className="size-8 rounded-full flex items-center justify-center flex-shrink-0 border border-primary/20"
                  style={{ background: 'linear-gradient(135deg, var(--accent), var(--muted))' }}
                >
                  <span className="text-[0.6rem] font-semibold font-mono text-primary tracking-wide">
                    {rec.initials}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground leading-tight">{rec.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{rec.title}</p>
                </div>
              </div>
              <button
                onClick={() => setActiveFile(fileMap[rec.fileKey] ?? null)}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium border border-border rounded-md text-foreground hover:bg-muted transition-colors"
              >
                <FileText size={13} />
                Read letter
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <PdfModal
        file={activeFile}
        scale={scale}
        onClose={() => setActiveFile(null)}
      />
    </section>
  );
}

export default RecommendationPage;
