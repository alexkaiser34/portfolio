import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import { Download, X } from 'lucide-react';

// Initialize the PDF.js worker once when this module is first imported.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

// ─── usePdfScale ──────────────────────────────────────────────────────────────

export interface ScaleBreakpoint {
  /** Upper-inclusive viewport width threshold in pixels. */
  maxWidth: number;
  scale: number;
}

/**
 * Returns a responsive PDF render scale based on the current viewport width.
 *
 * Breakpoints are sorted ascending by `maxWidth`; the first entry where
 * `window.innerWidth <= maxWidth` wins. Falls back to `defaultScale` when the
 * viewport is wider than all defined breakpoints.
 *
 * @example
 *   const scale = usePdfScale(
 *     [{ maxWidth: 700, scale: 0.55 }, { maxWidth: 1300, scale: 0.8 }],
 *     1.0,
 *   );
 */
export function usePdfScale(breakpoints: ScaleBreakpoint[], defaultScale: number): number {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const sorted = [...breakpoints].sort((a, b) => a.maxWidth - b.maxWidth);
  return sorted.find((bp) => width <= bp.maxWidth)?.scale ?? defaultScale;
}

// ─── PdfModal ─────────────────────────────────────────────────────────────────

export interface PdfModalProps {
  /** URL of the PDF to display. Pass `null` to hide the modal. */
  file: string | null;
  /** Render scale forwarded to react-pdf `<Page scale={...} />`. */
  scale: number;
  onClose: () => void;
  /** Optional heading shown in the modal header. */
  title?: string;
  /** If provided, renders a download link alongside the close button. */
  downloadHref?: string;
}

/**
 * Animated full-screen overlay that renders a single-page PDF document.
 * Locks body scroll while open; restores it on unmount or when `file` is null.
 */
export function PdfModal({ file, scale, onClose, title, downloadHref }: PdfModalProps) {
  useEffect(() => {
    document.body.style.overflow = file ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [file]);

  return (
    <AnimatePresence>
      {file && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-background/80 backdrop-blur-sm p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative my-8 rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`flex items-center gap-4 mb-4 ${title ? 'justify-between' : 'justify-end'}`}>
              {title && (
                <p className="text-sm font-semibold text-foreground">{title}</p>
              )}
              <div className="flex items-center gap-1.5">
                {downloadHref && (
                  <a
                    href={downloadHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm border border-border rounded-md hover:bg-muted transition-colors text-foreground"
                  >
                    <Download size={13} />
                    Download
                  </a>
                )}
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="flex justify-center overflow-auto">
              <Document file={file}>
                <Page
                  scale={scale}
                  pageNumber={1}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Document>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
