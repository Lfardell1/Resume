import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Linkedin, File, BookOpen } from 'react-feather';

interface SidebarProps {
  selectedItem: number;
  setSelectedItem: (index: number) => void;
}

interface NavLink {
  id: number;
  label: string;
}

const navLinks: NavLink[] = [
  { id: 0, label: "ABOUT" },
  { id: 1, label: "CERTIFICATIONS" },
  { id: 2, label: "EXPERIENCE"},
  { id: 3, label: "SKILLS" },
  { id: 4, label: "CONTACT" },
];

const Sidebar: React.FC<SidebarProps> = ({ selectedItem, setSelectedItem }) => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  return (
    <div className="hidden md:block md:w-72 fixed h-screen bg-slate-900/95 backdrop-blur-sm border-r border-slate-700/50">
      <div className="h-full flex flex-col p-8">
        <div className="mb-12">
          <Link to="/" className="block">
            <h1 className="text-3xl font-sans font-bold text-white mb-2">
              Leon Fardell
            </h1>
            <p className="text-lg font-body text-slate-400">
              Insurance Agent & Software Developer
            </p>
          </Link>
        </div>
        
        <nav className="flex-1">
          {isMainPage ? (
            // One-page navigation links
            navLinks.map((link, index) => (
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
            ))
          ) : null}
          
          {/* Blog Link - Temporarily disabled */}
          <span
            className={`flex items-center py-3 px-4 my-2 rounded-lg font-body text-lg
              text-slate-600 cursor-not-allowed`}
          >
            <BookOpen size={18} className="mr-2" />
            BLOG (Coming Soon)
          </span>
        </nav>

        <div className="flex flex-col space-y-3 mt-auto mb-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700/30">
          <h4 className="text-sm font-semibold text-slate-300 mb-2">Verify Credentials</h4>
          <a 
            href="./cert1.pdf" 
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300"
          >
            <File size={18}/>
            <span className="text-sm">Investigation Certificate 1</span>
          </a>
          <a 
            href="./cert2.pdf" 
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300"
          >
            <File size={18}/>
            <span className="text-sm">Investigation Certificate 2</span>
          </a>
        </div>

        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/leon-fardell-1851a2194/" 
             className="text-slate-400 hover:text-white transition-colors duration-300">
            <Linkedin size={24}/>
          </a>
          <a href="./Resume.pdf" 
             className="text-slate-400 hover:text-white transition-colors duration-300">
            <File size={24}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 
