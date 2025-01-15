import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Award, ChevronDown, TrendingUp, CheckCircle } from 'react-feather';
import { experienceData } from "../data/experienceData";

const Experience = () => {
  // Track expanded state for each experience item
  const [expandedStates, setExpandedStates] = useState<{ [key: number]: boolean }>({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleAchievements = (index: number) => {
    setExpandedStates(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="section">
      <div className="container">
        <div className="relative max-w-6xl mx-auto px-4">
          <h2 className="text-heading-1 text-gradient mb-16">
            EXPERIENCE
          </h2>

          <div className="relative pl-8 md:pl-32 space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div 
                key={`${exp.title}-${index}`}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline elements */}
                <div className="absolute -left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--accent-primary)] to-transparent" />
                <div className="hidden md:block absolute -left-32 top-0 text-sm text-[var(--text-secondary)] whitespace-nowrap">
                  {exp.period}
                </div>

                <div className="card hover:shadow-lg transition-shadow duration-300">
                  {/* Header Section - Minimalist */}
                  <div className="flex justify-between items-start gap-4 mb-6">
                    <div className="flex-1">
                      <h3 className="text-heading-3 text-gradient mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm flex-wrap">
                        <span className="font-medium">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                        <span className="md:hidden">•</span>
                        <span className="md:hidden text-[var(--accent-secondary)]">{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Skills - Minimal Inline Design */}
                  <div className="mb-6 overflow-x-auto scrollbar-hide">
                    <div className="flex gap-1.5 flex-nowrap md:flex-wrap">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-xs rounded-full border border-[var(--accent-primary)]/20
                            text-[var(--accent-secondary)] whitespace-nowrap bg-transparent
                            hover:bg-[var(--accent-primary)]/5 transition-colors"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Responsibilities - Clean Layout */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    {exp.responsibilities.map((resp, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-2 group"
                      >
                        <CheckCircle 
                          size={14} 
                          className="mt-1 text-[var(--accent-secondary)] opacity-50 group-hover:opacity-100 transition-opacity" 
                        />
                        <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                          {resp}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Achievements Section */}
                  {exp.achievements && (
                    <div className="mt-6 pt-6 border-t border-[var(--border-color)]/10">
                      <button
                        onClick={() => toggleAchievements(index)}
                        className="w-full flex items-center justify-between group cursor-pointer hover:text-[var(--accent-primary)]"
                      >
                        <div className="flex items-center gap-2 text-[var(--accent-secondary)]">
                          <TrendingUp size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                          <span className="text-sm font-medium">Achievements ({exp.achievements.length})</span>
                        </div>
                        <ChevronDown 
                          className={`transform transition-transform duration-300 opacity-50 group-hover:opacity-100
                            ${expandedStates[index] ? 'rotate-180' : ''}`}
                          size={14}
                        />
                      </button>

                      <AnimatePresence>
                        {expandedStates[index] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 space-y-2">
                              {exp.achievements.map((achievement, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start gap-2 group p-2 rounded-lg
                                    hover:bg-[var(--accent-primary)]/5 transition-colors"
                                >
                                  <Award 
                                    className="text-[var(--accent-secondary)] mt-1 opacity-50 group-hover:opacity-100 transition-opacity" 
                                    size={14} 
                                  />
                                  <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                                    {achievement}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;