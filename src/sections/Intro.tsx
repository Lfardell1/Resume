import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Mail, ChevronDown } from 'react-feather';

import { useState, useRef } from 'react';
import Resume from '../assets/Resume.pdf';




const Intro = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect for the hero section
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sections = [
    {
      emoji: "🚀",
      title: "Automation Expert",
      summary: "Transforming complex workflows into efficient, automated solutions. I combine programming expertise with deep industry knowledge to revolutionize traditional processes.",
      content: "My passion lies in identifying inefficiencies and crafting elegant automated solutions. From streamlining claims processing to developing custom tools, I consistently deliver innovations that save time and reduce errors.",
      metrics: "Significantly reduced processing times through custom automation tools",
    },
    {
      emoji: "💻",
      title: "Tech Innovation",
      summary: "Full-stack developer with a focus on practical business applications. I build tools that solve real-world problems and enhance operational efficiency.",
      content: "Leveraging modern technologies like React, TypeScript, and Python, I develop custom solutions that bridge the gap between complex business needs and efficient digital workflows. My technical expertise enables me to turn challenges into opportunities for innovation.",
      metrics: "Created multiple automation tools that streamlined daily operations",
    },
    {
      emoji: "🔍",
      title: "Investigative Excellence",
      summary: "Combining technical acumen with investigative expertise to enhance fraud detection and claims processing.",
      content: "My unique blend of programming skills and investigative experience allows me to develop sophisticated tools for fraud detection and process automation, while maintaining the highest standards of accuracy and compliance.",
      metrics: "Successfully automated key aspects of the investigation process",
    },
    {
      emoji: "⚡",
      title: "Process Optimization",
      summary: "Dedicated to transforming complex workflows into streamlined, efficient processes through innovative technical solutions.",
      content: "I specialize in identifying bottlenecks and developing automated solutions that enhance productivity and accuracy. My approach combines technical expertise with practical business understanding.",
      metrics: "Implemented automation solutions that reduced manual workload by significant margins",
    },
    {
      emoji: "🤝",
      title: "Collaborative Leadership",
      summary: "Leading by example in implementing technical solutions while mentoring teams in adopting new tools and processes.",
      content: "I excel at bridging the gap between technical capabilities and business needs, helping teams embrace automation and digital transformation while maintaining operational excellence.",
      metrics: "Successfully led multiple automation initiatives and trained team members",
    },
    {
      emoji: "🛡️",
      title: "Security & Compliance",
      summary: "Ensuring all automated solutions maintain the highest standards of security and regulatory compliance.",
      content: "My development approach prioritizes security and compliance, creating robust automated solutions that protect sensitive data while streamlining operations.",
      metrics: "100% compliance rate in automated processes and security standards",
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)] opacity-90">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 py-24">
        <motion.div 
          style={{ y, opacity }}
          className="text-center mb-20"
        >
          {/* Animated name with hover effect */}
          <motion.h1 
            className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--text-primary)] via-[var(--accent-secondary)] to-[var(--accent-primary)] cursor-default"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            Leon Fardell
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl text-[var(--text-secondary)] mb-8 font-light tracking-wide"
          >
            Software Developer & Licensed Investigator
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Innovative developer with a proven track record in transforming complex business processes 
            into efficient, automated solutions. Combining technical expertise with deep industry knowledge 
            to create powerful tools that drive operational excellence and enhance productivity.
          </motion.p>
          

          {/* Interactive CTA buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-6 mb-16"
          >
            <motion.a 
              href={Resume}
              target='_blank'
              className="group flex items-center gap-2 px-8 py-4 bg-[var(--accent-primary)] text-[var(--text-primary)] rounded-full font-medium hover:bg-[var(--hover-color)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>Download Resume</span>
            </motion.a>
            <motion.button
              onClick={scrollToContact}
              className="group flex items-center gap-2 px-8 py-4 border-2 border-[var(--border-color)] text-[var(--text-primary)] rounded-full font-medium hover:bg-[var(--bg-secondary)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              <span>Get in Touch</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Certification Statement Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-primary)]/20 via-[var(--accent-secondary)]/20 to-[var(--accent-primary)]/20 blur-lg" />
            <span className="relative text-sm text-[var(--accent-secondary)] font-medium tracking-wider uppercase">
              Full-Stack Developer & Investigation Specialist            </span>
          </div>
          
          <h2 className="mt-4 text-2xl md:text-3xl text-[var(--text-primary)] font-light leading-relaxed">
            Crafting <span className="font-medium text-[var(--accent-secondary)]">Intelligent Solutions</span> for 
            <span className="font-medium text-[var(--accent-primary)]"> Complex Challenges</span>
          </h2>
          
          <div className="mt-6 space-y-4 text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto">
            <p>
              I transform investigative workflows into powerful digital solutions, from leveraging automation to solve complex business challenges to understanding the power of open source intelligence, my deep technical knowledge allows me to build and understand the increasingly important systems pertitent to modern investigative methods.           </p>
            
            <p>
 I leverage my deep knowledge of software development and investigative methodologies to conceptualize secure, intelligent systems that have the potential to address complex business challenges.
              
        This technical insight empowers me to explore cutting-edge solutions that balance innovation with stringent standards of security and reliability. I am continually broadening my skills through ongoing Computer Science studies, positioning myself to remain at the forefront of emerging technologies.
               
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 rounded-lg bg-[var(--bg-secondary)]/30 border border-[var(--border-color)]/20 
                            hover:border-[var(--accent-secondary)]/30 transition-colors duration-300">
              <span className="text-sm text-[var(--text-secondary)]">
                🎓 Computer Science
              </span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-[var(--bg-secondary)]/30 border border-[var(--border-color)]/20
                            hover:border-[var(--accent-secondary)]/30 transition-colors duration-300">
              <span className="text-sm text-[var(--text-secondary)]">
                🔒 Digital Forensics
              </span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-[var(--bg-secondary)]/30 border border-[var(--border-color)]/20
                            hover:border-[var(--accent-secondary)]/30 transition-colors duration-300">
              <span className="text-sm text-[var(--text-secondary)]">
                🤖 AI & Automation
              </span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-[var(--bg-secondary)]/30 border border-[var(--border-color)]/20
                            hover:border-[var(--accent-secondary)]/30 transition-colors duration-300">
              <span className="text-sm text-[var(--text-secondary)]">
                ⛓️ Blockchain Security
              </span>
            </div>
          </div>
        </motion.div>

        {/* Interactive Skills Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              onClick={() => setExpandedSection(expandedSection === index ? null : index)}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative overflow-hidden rounded-lg bg-[var(--bg-secondary)]/30 
                         border border-[var(--border-color)]/20 backdrop-blur-sm
                         hover:border-[var(--accent-primary)]/30 
                         transition-all duration-300 p-6 group cursor-pointer"
            >
              {/* Subtle gradient hover effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 to-transparent 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{
                  scale: hoveredIndex === index ? 1 : 0.95,
                }}
              />

              {/* Card content with simplified layout */}
              <div className="relative z-10 space-y-4">
                {/* Icon and title in one row */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{section.emoji}</span>
                  <h3 className="text-lg font-medium text-[var(--text-primary)]">
                    {section.title}
                  </h3>
                </div>

                {/* Summary/Content with smooth transition */}
                <motion.div
                  animate={{ height: expandedSection === index ? 'auto' : '80px' }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {expandedSection === index ? section.content : section.summary}
                  </p>
                </motion.div>

                {/* Metrics section with fade transition */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: expandedSection === index ? 1 : 0,
                    height: expandedSection === index ? 'auto' : 0
                  }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 py-2 px-3 rounded bg-[var(--accent-primary)]/5 
                                border-l-2 border-[var(--accent-secondary)]">
                    <p className="text-xs text-[var(--text-secondary)]">
                      {section.metrics}
                    </p>
                  </div>
                </motion.div>

                {/* Subtle expand/collapse indicator */}
                <div className="flex items-center gap-1 text-xs text-[var(--text-secondary)] 
                              group-hover:text-[var(--accent-secondary)] transition-colors">
                  <ChevronDown 
                    size={14} 
                    className={`transform transition-transform duration-300 ${
                      expandedSection === index ? 'rotate-180' : ''
                    }`}
                  />
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {expandedSection === index ? 'Show less' : 'Read more'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
