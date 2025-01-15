import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import _debounce from "lodash/debounce";
import { Linkedin, File, BookOpen } from "react-feather";
import Experience from "./sections/Experience";
import Intro from "./sections/Intro";
import Contact from "./sections/contact";
import Skills from "./sections/skills";
import Certifications from "./sections/Certifications";
import Blog from "./sections/Blog";
import TLDRModal, { FloatingTLDRButton } from './components/TLDRModal';
import Sidebar from "./components/Sidebar";
import './styles/globals.css';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);
  const [isTLDROpen, setIsTLDROpen] = useState(false);

  const navLinks = [
    { id: "about", label: "ABOUT" },
    { id: "certifications", label: "CERTIFICATIONS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "skills", label: "SKILLS" },
    { id: "contact", label: "CONTACT" },
  ];
 
  useEffect(() => {
    const handleScroll = _debounce(() => {
      if (!mainRef.current) return;

      const sections = navLinks.map(link => 
        document.getElementById(link.id)
      ).filter(Boolean);

      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setSelectedItem(index);
        }
      });
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ScrollProgress = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;
        setScroll((currentScroll / totalScroll) * 100);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <div 
          className="h-full bg-purple-500"
          style={{ width: `${scroll}%` }}
        />
      </div>
    );
  };

 return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="flex flex-col md:flex-row bg-[var(--bg-primary)] min-h-screen">
            <Sidebar selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
            
            {/* Add TLDR Button */}
            <FloatingTLDRButton onClick={() => setIsTLDROpen(true)} />

            {/* Add TLDR Modal */}
            <TLDRModal 
              isOpen={isTLDROpen}
              onClose={() => setIsTLDROpen(false)}
            />

            {/* Mobile Menu Button */}
            <div className="md:hidden fixed top-4 right-4 z-50">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-slate-800/50 text-slate-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            <div
              className={`md:hidden fixed inset-0 z-40 bg-[var(--bg-primary)]/95 backdrop-blur-sm transform ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 ease-in-out`}
            >
              <nav className="flex flex-col p-8">
                {navLinks.map((link, index) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`py-3 px-4 my-2 rounded-lg text-lg ${
                      selectedItem === index
                        ? "bg-slate-800/80 text-white"
                        : "text-slate-400"
                    }`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setSelectedItem(index);
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden md:block md:w-72 fixed h-screen bg-slate-900/95 backdrop-blur-sm border-r border-slate-700/50">
              <div className="h-full flex flex-col p-8">
                <div className="mb-12">
                  <h1 className="text-3xl font-sans font-bold text-white mb-2">
                    Leon Fardell
                  </h1>
                  <p className="text-lg font-body text-slate-400">
                    Insurance Agent & Software Developer
                  </p>
                </div>
                
                <nav className="flex-1">
                  {navLinks.map((link, index) => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className={`block py-3 px-4 my-2 rounded-lg font-body text-lg
                        ${selectedItem === index 
                          ? "bg-slate-800/80 text-white border-l-2 border-slate-400" 
                          : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                        } transition-all duration-300`}
                      onClick={() => setSelectedItem(index)}
                    >
                      {link.label}
                    </a>
                  ))}
                  <span
                    className="flex items-center py-3 px-4 my-2 rounded-lg font-body text-lg text-slate-600 cursor-not-allowed"
                  >
                    <BookOpen size={18} className="mr-2" />
                    BLOG (Coming Soon)
                  </span>
                </nav>

                <div className="flex space-x-4 mt-auto">
                  <a href="https://www.linkedin.com/in/leon-fardell-1851a2194/" 
                  target="_blank"
                     className="text-slate-400 hover:text-white transition-colors duration-300">
                    <Linkedin size={24}/>
                  </a>
                  <a href="#" 
                     className="text-slate-400 hover:text-white transition-colors duration-300">
                    <File size={24}/>
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <main ref={mainRef} className="flex-1 md:ml-72">
              <div id="about">
                <Intro />
              </div>
              <div id="certifications">
                <Certifications />
              </div>
              <div id="experience">
                <Experience />
              </div>
              <div id="skills">
                <Skills />
              </div>
              <div id="contact">
                <Contact />
              </div>
            </main>
          </div>
        } />
        {/* Route temporarily disabled wh ile blog is in development */}
     <Route path="/blog" element={<Blog />} />
      </Routes>
      <ScrollProgress />
    </Router>
  );
};

export default App;
