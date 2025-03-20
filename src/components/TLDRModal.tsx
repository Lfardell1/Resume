import React, { useState } from 'react';
import { X, BookOpen, Briefcase, Code, Award, Move } from 'react-feather';
import { motion, AnimatePresence } from 'framer-motion';
import resume from "../assets/Resume.pdf"
interface TLDRModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TLDRModal: React.FC<TLDRModalProps> = ({ isOpen, onClose }) => {
  const [isDragging, setIsDragging] = useState(false);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Modal Container - Fixed positioning with scrollable content */}
          <div className="fixed inset-0 overflow-y-auto z-50">
            <div className="min-h-full flex items-center justify-center p-4">
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                drag
                dragMomentum={false}
                dragElastic={0}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setTimeout(() => setIsDragging(false), 100)}
                className="relative w-[95%] max-w-3xl bg-slate-800/95 backdrop-blur-md
                         rounded-xl border border-slate-700/50 shadow-xl
                         overflow-hidden cursor-move"
              >
                {/* Drag Handle */}
                <div className="sticky top-0 z-10 h-14 flex items-center justify-center
                              bg-slate-800/95 backdrop-blur-md
                              border-b border-slate-700/30">
                  <Move size={24} className="text-slate-500" />
                </div>

                {/* Close Button */}
                <button
                  onClick={(e) => {
                    if (!isDragging) {
                      e.stopPropagation();
                      onClose();
                    }
                  }}
                  className="absolute top-3 right-3 p-2.5 rounded-lg
                           text-slate-400 hover:text-white
                           hover:bg-slate-700/50 transition-colors
                           cursor-pointer z-20"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>

                {/* Scrollable Content */}
                <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
                  <div className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                      Quick Overview
                    </h2>
                    
                    <div className="space-y-6 text-slate-300">
                      <div className="p-5 bg-slate-900/50 rounded-xl border border-slate-700/30">
                        <div className="flex items-center gap-4 mb-3">
                          <Briefcase className="text-blue-400" size={24} />
                          <h3 className="font-semibold text-white text-xl">Professional Overview</h3>
                        </div>
                        <p className="text-lg leading-relaxed">
                          Certified Investigations Review Officer at Suncorp with verifiable credentials in complex investigations. Combining deep insurance expertise with technological innovation to drive operational excellence and process automation.
                        </p>
                      </div>

                      <div className="p-5 bg-slate-900/50 rounded-xl border border-slate-700/30">
                        <div className="flex items-center gap-4 mb-3">
                          <Award className="text-green-400" size={24} />
                          <h3 className="font-semibold text-white text-xl">Certifications</h3>
                        </div>
                        <div className="space-y-3">
                          <p className="text-lg leading-relaxed">
                            Holder of two professional investigation certifications, validating expertise in:
                          </p>
                          <ul className="list-none space-y-3 text-lg">
                            <li className="flex items-center gap-3">
                              <span className="text-green-400 text-xl">•</span>
                              Complex claims investigation methodologies
                            </li>
                            <li className="flex items-center gap-3">
                              <span className="text-green-400 text-xl">•</span>
                              Professional investigation standards and practices
                            </li>
                          </ul>
                          <p className="text-sm text-slate-400 mt-3">
                            * Certificates available for verification in the Certifications section
                          </p>
                        </div>
                      </div>

                      <div className="p-5 bg-slate-900/50 rounded-xl border border-slate-700/30">
                        <div className="flex items-center gap-4 mb-3">
                          <Code className="text-purple-400" size={24} />
                          <h3 className="font-semibold text-white text-xl">Key Strengths</h3>
                        </div>
                        <ul className="list-none space-y-3 text-lg">
                          <li className="flex items-center gap-3">
                            <span className="text-purple-400 text-xl">•</span>
                            Certified expert in complex claims investigation
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="text-purple-400 text-xl">•</span>
                            Tech-savvy innovator with process automation expertise
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="text-purple-400 text-xl">•</span>
                            Strong customer service and communication skills
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="text-purple-400 text-xl">•</span>
                            Proven track record in claims management and resolution
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="text-purple-400 text-xl">•</span>
                            Dedicated mentor fostering team growth and collaboration
                          </li>
                        </ul>
                      </div>

                      <div className="p-5 bg-slate-900/50 rounded-xl border border-slate-700/30">
                        <div className="flex items-center gap-4 mb-3">
                          <Award className="text-pink-400" size={24} />
                          <h3 className="font-semibold text-white text-xl">Why Choose Me</h3>
                        </div>
                        <div className="space-y-4">
                          <p className="text-lg leading-relaxed">
                            I bring a unique combination of investigative excellence and technological innovation to every role. My approach combines:
                          </p>
                          <ul className="list-none space-y-3 text-lg">
                            <li className="flex items-center gap-3">
                              <span className="text-pink-400 text-xl">•</span>
                              Meticulous attention to detail in complex investigations
                            </li>
                            <li className="flex items-center gap-3">
                              <span className="text-pink-400 text-xl">•</span>
                              Process automation skills that drive operational efficiency
                            </li>
                            <li className="flex items-center gap-3">
                              <span className="text-pink-400 text-xl">•</span>
                              Strong commitment to ethical practices and compliance
                            </li>
                            <li className="flex items-center gap-3">
                              <span className="text-pink-400 text-xl">•</span>
                              Proven ability to foster positive client relationships
                            </li>
                            <li className="flex items-center gap-3">
                              <span className="text-pink-400 text-xl">•</span>
                              Dedication to continuous learning and team development
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                      <a
                        href="https://www.linkedin.com/in/leon-fardell-1851a2194/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-6 py-3 rounded-xl text-lg
                                 bg-gradient-to-r from-blue-600 to-blue-700
                                 text-white text-center font-medium
                                 hover:from-blue-700 hover:to-blue-800 
                                 transition-all duration-300"
                      >
                        LinkedIn Profile
                      </a>
                      <button
                        onClick={() => window.open(resume, '_blank')}
                        className="flex-1 px-6 py-3 rounded-xl text-lg
                                 bg-slate-700 text-white text-center font-medium
                                 hover:bg-slate-600 transition-colors"
                      >
                        View Full Resume
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

// Updated FloatingTLDRButton with larger text and better mobile positioning
export const FloatingTLDRButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      onClick={onClick}
      className="fixed bottom-6 right-4 sm:right-6 z-50
                px-5 py-4 rounded-full
                bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
                text-white font-medium text-lg
                shadow-lg shadow-slate-900/20
                hover:shadow-xl hover:scale-105
                active:scale-95
                transition-all duration-300
                flex items-center gap-3"
    >
      <BookOpen size={22} />
      <span>No Time? Click Me</span>
    </motion.button>
  );
};

export default TLDRModal; 