import React, { useState } from 'react';
import { Code, Search, Users, Shield, Tool, Eye, ChevronDown } from "react-feather";
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const isMobile = window.innerWidth <= 768;
  
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Computer Science",
      description: "Technical skills in programming and web development",
      skills: [
        'Python',
        'Django',
        'Golang',
        'Flask',
        'React',
        'TypeScript',
        'Full Stack',
        'HTML',
        'CSS - Tailwind',
      ]
    },
    {
      icon: <Search size={24} />,
      title: "Investigation Skills",
      description: "Professional investigation capabilities",
      skills: [
        'Document Interrogation',
        'Complaint Resolution',
        'Claims Investigation',
        'KPIs/KPAs Management',
        'Investigation Process',
        'Investigative Interviewing',
        'IT Systems Proficiency',
        'Regulatory Compliance',
        'Intelligence Utilization',
        'Collaboration with Analysts',
      ]
    },
    {
      icon: <Users size={24} />,
      title: "Customer Service",
      description: "Client interaction and support expertise",
      skills: [
        'Inbound Call Handling',
        'Claims Processing',
        'Claims Handling Systems',
        'Policy Coverage Analysis',
        'Independent Decision-Making',
        'Process Improvement',
        'Training Support',
        'Knowledge Sharing',
      ]
    },
    {
      icon: <Shield size={24} />,
      title: "Compliance & Regulation",
      description: "Regulatory and compliance knowledge",
      skills: [
        'Financial Regulation',
        'AML / CTL Training',
        'Insurance Code of Practice',
        'Privacy Laws',
        'Risk Assessment',
        'Compliance Monitoring',
        'Policy Implementation',
        'Regulatory Reporting',
      ]
    },
    {
      icon: <Eye size={24} />,
      title: "Analytical Skills",
      description: "Problem-solving and analysis capabilities",
      skills: [
        'Critical Thinking',
        'Data Analysis',
        'Risk Assessment',
        'Pattern Recognition',
        'Strategic Planning',
        'Decision Making',
        'Problem Solving',
        'Analytical Reporting',
      ]
    },
    {
      icon: <Tool size={24} />,
      title: "Professional Tools",
      description: "Industry-specific tools and systems",
      skills: [
        'Case Management Systems',
        'Documentation Tools',
        'Reporting Software',
        'Communication Platforms',
        'Database Management',
        'Analytics Tools',
        'Process Automation',
        'Collaboration Software',
      ]
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="relative max-w-6xl mx-auto px-4">
          <h2 className="text-heading-1 text-gradient mb-16 text-center">
            PROFESSIONAL SKILLS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="card flex flex-col h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[var(--border-color)]/10">
                  <span className="p-2 rounded-lg bg-[var(--accent-primary)]/5 text-[var(--accent-secondary)]">
                    {category.icon}
                  </span>
                  <h3 className="text-heading-3 text-[var(--text-primary)]">
                    {category.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[var(--text-secondary)] text-sm mb-6">
                  {category.description}
                </p>

                {/* Skills List */}
                <div className="">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inline-flex items-center px-3 py-1.5 
                          bg-[var(--bg-secondary)] rounded-md
                          text-sm text-[var(--text-primary)]
                          border border-[var(--border-color)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Section 
          <div className="mt-12 card">
            <h3 className="text-heading-3 text-[var(--text-primary)] mb-6">
              Additional Technical Proficiencies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
              <div>
                <h4 className="text-sm font-medium text-[var(--accent-secondary)] mb-3">
                  Programming Languages
                </h4>
                <ul className="space-y-2">
                  <li className="text-sm text-[var(--text-secondary)]">JavaScript/TypeScript</li>
                  <li className="text-sm text-[var(--text-secondary)]">Python</li>
                  <li className="text-sm text-[var(--text-secondary)]">Java</li>
                  <li className="text-sm text-[var(--text-secondary)]">SQL</li>
                </ul>
              </div>

           
              <div>
                <h4 className="text-sm font-medium text-[var(--accent-secondary)] mb-3">
                  Frameworks & Libraries
                </h4>
                <ul className="space-y-2">
                  <li className="text-sm text-[var(--text-secondary)]">React/Next.js</li>
                  <li className="text-sm text-[var(--text-secondary)]">Node.js</li>
                  <li className="text-sm text-[var(--text-secondary)]">Express</li>
                  <li className="text-sm text-[var(--text-secondary)]">TailwindCSS</li>
                </ul>
              </div>

        
              <div>
                <h4 className="text-sm font-medium text-[var(--accent-secondary)] mb-3">
                  Development Tools
                </h4>
                <ul className="space-y-2">
                  <li className="text-sm text-[var(--text-secondary)]">Git/GitHub</li>
                  <li className="text-sm text-[var(--text-secondary)]">VS Code</li>
                  <li className="text-sm text-[var(--text-secondary)]">Docker</li>
                  <li className="text-sm text-[var(--text-secondary)]">AWS</li>
                </ul>
              </div>

      
              <div>
                <h4 className="text-sm font-medium text-[var(--accent-secondary)] mb-3">
                  Additional Skills
                </h4>
                <ul className="space-y-2">
                  <li className="text-sm text-[var(--text-secondary)]">CI/CD</li>
                  <li className="text-sm text-[var(--text-secondary)]">Agile/Scrum</li>
                  <li className="text-sm text-[var(--text-secondary)]">REST APIs</li>
                  <li className="text-sm text-[var(--text-secondary)]">Testing</li>
                </ul>
              </div>
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
