import { useState } from 'react';
import { educationData } from '../data/educationData';
import EducationCard from '../components/EducationCard';

const Certifications: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-radial from-[var(--accent-primary)]/5 via-transparent to-transparent opacity-50" />
      
      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="relative">
            <span className="absolute -inset-1 rounded-lg bg-[var(--accent-primary)]/20 blur-xl animate-glow" />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] via-[var(--accent-secondary)] to-[var(--accent-primary)]">
              EDUCATION & CERTIFICATIONS
            </span>
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((education) => (
            <EducationCard
              key={education.id}
              education={education}
              isExpanded={expandedSection === education.id}
              onToggle={() => setExpandedSection(
                expandedSection === education.id ? null : education.id
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
