import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Mail, ChevronDown, ArrowRight } from 'react-feather';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import Resume from '../assets/Resume.pdf';


// Could be used -- Not currently used
const ImmediateValue = () => (
  <motion.div 
    className="absolute top-0 right-0 m-4 p-4 bg-[var(--bg-secondary)]/90 backdrop-blur-sm rounded-lg border border-[var(--accent-primary)]/30"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1 }}
  >
    <h4 className="text-[var(--accent-secondary)] font-semibold mb-2">Ready to Contribute</h4>
    <ul className="text-[var(--text-secondary)] text-sm">
      <li>• Investigation expertise</li>
      <li>• Technical innovation</li>
      <li>• Process automation</li>
    </ul>
  </motion.div>
);


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
      title: "Innovation & Leadership",
      summary: "I'm not just another insurance industry professional. I bring a dynamic blend of investigative prowess, technological finesse, and unwavering commitment to ethical practices.",
      content: "My journey is one that transcends the ordinary. I stand poised to bring a blend of astute investigation, technological prowess, and a commitment to excellence to any role. My passion for compliance and innovation is the driving force behind my unwavering pursuit of success.",
      metrics: "Reduced claim processing time through process automation",
    },
    {
      emoji: "🕵️‍♂️",
      title: "Investigative Excellence",
      summary: "Delving into the role of Investigations Review Officer at Suncorp, I've thrived in dissecting intricate home insurance claims.",
      content: "My meticulous eye for detail, coupled with an unyielding pursuit of excellence, has ensured a consistent track record of delivering exceptional results. Through the art of investigative interviewing and the mastery of document interrogation, I've excelled in navigating complex scenarios.",
      metrics: "Successfully resolved a great number of complex claims monthly within targets",
    },
    {
      emoji: "🌐",
      title: "Technical Innovation",
      summary: "My proficiency extends beyond traditional investigative techniques. I am a tech-savvy problem solver who champions innovation.",
      content: "Armed with coding skills, I've automated processes, driving operational efficiency and freeing valuable time. My technology-driven mindset has been a catalyst in bringing a new dimension to my work.",
      metrics: "Created tools to assist in report producing and effienct workflow",
    },
    {
      emoji: "🤝",
      title: "Customer Service Excellence",
      summary: "Beyond investigations, I've showcased strong customer service acumen as a Claims Specialist.",
      content: "Whether it's handling inbound calls or ensuring equitable claim settlements, my approachable demeanor and excellent communication have fostered positive client relationships.",
      metrics: "Maintained high customer satisfaction rate while handling complex investigations",
    },
    {
      emoji: "🌟",
      title: "Learning & Development",
      summary: "A strong advocate for continuous learning, I'm not just about personal growth.",
      content: "I share my expertise during high-support sessions, nurturing the talents of new team members. Fostering an inclusive environment is paramount to me, promoting collaboration and innovation.",
      metrics: "Mentored team members in investigation techniques and compliance",
    },
    {
      emoji: "⚖️",
      title: "Compliance & Ethics",
      summary: "Maintaining the highest standards of regulatory compliance and ethical conduct in all investigative procedures.",
      content: "Expert knowledge of ASIC guidelines, privacy laws, and insurance regulatory frameworks. Ensuring all investigations are conducted with unwavering integrity while protecting sensitive information and maintaining professional standards.",
      metrics: "100% compliance rate with regulatory requirements and ethical guidelines",
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
            Insurance Investigation Specialist & Technology Innovator
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Dynamic insurance investigation professional with a proven track record in leveraging technology 
            and coding skills to drive innovation and efficiency in claims processing.
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

        {/* Interactive Skills Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
          
     
              <motion.div
                onClick={() => setExpandedSection(expandedSection === index ? null : index)}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="card group"
              >
                {/* Animated gradient background on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                  animate={{
                    scale: hoveredIndex === index ? 1 : 0.95,
                  }}
                />

                {/* Card content with hover animations */}
                <motion.div className="relative z-10">
                  <motion.div 
                    className="text-4xl mb-6"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {section.emoji}
                  </motion.div>
                  <h3 className="text-heading-3 text-[var(--text-primary)] mb-4 uppercase">
                    {section.title}
                  </h3>
                  <p className="text-body text-[var(--text-secondary)] mb-6">
                    {expandedSection === index ? section.content : section.summary}
                  </p>
                  
                  {/* Results Section - Only visible when expanded */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: expandedSection === index ? 1 : 0,
                      height: expandedSection === index ? 'auto' : 0
                    }}
                    className="overflow-hidden"
                  >
                    <div className="bg-[var(--accent-primary)]/10 rounded-lg p-4 mb-6">
                      <h4 className="text-body-large text-[var(--accent-secondary)] font-semibold mb-2 uppercase">
                        KEY ACHIEVEMENT
                      </h4>
                      <p className="text-body text-[var(--text-primary)]">
                        {section.metrics}
                      </p>
                    </div>
                  </motion.div>

                  {/* Expand/Collapse indicator */}
                  <div className="flex items-center gap-2 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                    <ChevronDown 
                      size={16} 
                      className={`transform transition-transform duration-300 ${
                        expandedSection === index ? 'rotate-180' : ''
                      }`}
                    />
                    <span className="text-body opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                      {expandedSection === index ? 'SHOW LESS' : 'EXPAND'}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
      
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
