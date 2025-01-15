// This is a PDF viewer that I created to view PDFs within the website.
// Can be extended and styled to fit the website and used for other purposes.
// Leaving alone for now.

import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'react-feather';

interface PDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  fileUrl: string;
  title: string;
}

const PDFViewer: FC<PDFViewerProps> = ({ isOpen, onClose, fileUrl, title }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-4xl h-[80vh] bg-[var(--bg-secondary)] rounded-xl shadow-xl"
          >
            <div className="flex items-center justify-between p-4 border-b border-[var(--border-color)]">
              <h3 className="text-lg font-medium text-[var(--text-primary)]">{title}</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-[var(--bg-secondary)]/50 transition-colors"
              >
                <X className="w-5 h-5 text-[var(--text-secondary)]" />
              </button>
            </div>
            <div className="h-[calc(100%-4rem)]">
              <iframe
                src={fileUrl}
                className="w-full h-full rounded-b-xl"
                title={title}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PDFViewer; 