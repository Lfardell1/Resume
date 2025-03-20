import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Award, File, ChevronDown, FileText, Book } from 'react-feather';
import { Education, Topic } from '../types/education';

interface EducationCardProps {
  education: Education;
  isExpanded: boolean;
  onToggle: () => void;
}

const TopicList: FC<{ topics: Topic[], title: string }> = ({ topics, title }) => (
  <div className="space-y-2">
    <h4 className="text-[var(--accent-secondary)] font-medium text-sm mb-3">{title}</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {topics.map((topic, index) => (
        <div 
          key={index}
          className="p-2 rounded-lg bg-[var(--bg-secondary)]/5 hover:bg-[var(--bg-secondary)]/10 
            transition-all duration-300 text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[var(--accent-primary)] whitespace-nowrap">
              {topic.code}
            </span>
            <span className="text-[var(--text-secondary)]">·</span>
            <span className="text-[var(--text-primary)] truncate">{topic.name}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const EducationCard: FC<EducationCardProps> = ({ education, isExpanded, onToggle }) => {
  const Icon = education.type === 'education' ? BookOpen : Award;
  const [showDocuments, setShowDocuments] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[var(--bg-secondary)]/5 backdrop-blur-sm rounded-xl p-6 border border-[var(--border-color)] 
        hover:border-[var(--accent-primary)]/50 transition-all duration-300 font-['Source_Sans_Pro']"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-full bg-[var(--accent-primary)]/10">
          <Icon className="w-5 h-5 text-[var(--accent-secondary)]" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[var(--text-primary)]">{education.title}</h3>
          <p className="text-sm text-[var(--accent-secondary)]">{education.institution}</p>
          <p className="text-xs text-[var(--text-secondary)] mt-1">{education.status}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        {education.certificates && (
          <button
            onClick={() => setShowDocuments(!showDocuments)}
            className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg
              bg-[var(--accent-primary)]/5 hover:bg-[var(--accent-primary)]/10
              text-[var(--text-primary)] transition-all duration-300 text-sm"
          >
            <FileText className="w-4 h-4" />
            <span>Documents</span>
            <ChevronDown className={`w-3 h-3 transform transition-transform duration-300 ${showDocuments ? 'rotate-180' : ''}`} />
          </button>
        )}
        <button
          onClick={onToggle}
          className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg
            bg-[var(--accent-primary)]/5 hover:bg-[var(--accent-primary)]/10
            text-[var(--text-primary)] transition-all duration-300 text-sm"
        >
          <Book className="w-4 h-4" />
          <span>Details</span>
          <ChevronDown className={`w-3 h-3 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Documents Section */}
      <AnimatePresence>
        {showDocuments && education.certificates && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mb-6"
          >
            <div className="grid gap-2">
              {education.certificates.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-[var(--bg-secondary)]/5 
                    hover:bg-[var(--bg-secondary)]/10 transition-all duration-300 group"
                >
                  <File className="w-4 h-4 text-[var(--accent-secondary)]" />
                  <div className="flex-1">
                    <h4 className="text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-secondary)]">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)]">{cert.description}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-secondary)]">
                    {cert.type}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Topics Section */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            {Array.isArray(education.topics) ? (
              <TopicList topics={education.topics} title="Current Areas of Study" />
            ) : (
              <>
                <TopicList topics={education.topics.investigativeUnits} title="Investigation Units" />
                <TopicList topics={education.topics.complianceUnits} title="Compliance Units" />
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default EducationCard; 