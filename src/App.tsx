import React, { useState, useEffect, useRef } from "react";
import _debounce from "lodash/debounce";
import { Linkedin , File } from "react-feather";
import Experience from "./Experience";
import Intro from "./Intro";
import Contact from "./contact";
import Skills from "./skills";

interface NavLink {
  id: number;
  label: string;
}

const navLinks: NavLink[] = [
  { id: 0, label: "SUMMARY" },
  { id: 1, label: "EXPERIENCE" },
  { id: 2, label: "SKILLS" },
  { id: 3, label: "CONTACT" },
  // Add more links as needed
];

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = contentRefs.current.indexOf(entry.target as HTMLDivElement);
        if (index !== -1) {
          setSelectedItem(index);
        }
      }
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: "-50% 0px -50% 0px", // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    contentRefs.current = contentRefs.current.slice(0, navLinks.length);
    contentRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

     

  return (
    <div className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <div className="flex flex-col md:flex-row overflow-hidden">
      <div className="md:hidden text-center mb-8">
  <div className="text-xl text-slate-400 font-Cousine">
    <p className="text-3xl mb-3 md:text-6xl text-slate-200 underline underline-offset-8 font-Cousine">
      Leon Fardell
    </p>
    <p className="text-xl  mb-3 md:text-4xl text-slate-400 underline underline-offset-8 font-Cousine">
      Insurance Agent
    </p>
    <p className="text-lg  mb-3 md:text-2xl text-slate-200 underline underline-offset-8 font-Cousine">
      Software Developer
    </p>
    <div className="mt-10 flex justify-center items-center">
                  <a href="https://www.linkedin.com/in/leon-fardell-1851a2194/" className="mr-10">
                  <Linkedin size={30}/>
                  </a>
                  <a href="#" className="text-2xl mt-3">Resume</a>
                </div>

  </div>
</div>
        <div className="md:w-2/6 p-6 hidden md:flex flex-col justify-center items-center">
          
          <div className="fixed left-30 top-60 h-screen p-6">
            <div className="text-center mb-8">
              <div className="text-xl text-slate-400 font-Cousine">
                <p className="text-3xl mb-3 md:text-6xl text-slate-200 underline underline-offset-8 font-Cousine">
                  Leon Fardell
                </p>
                <p className="text-xl  mb-3 md:text-4xl text-slate-400 underline underline-offset-8 font-Cousine">
                  Insurance Agent
                </p>
                <p className="text-lg  mb-3 md:text-2xl text-slate-200 underline underline-offset-8 font-Cousine">
                  Software Developer
                </p>

                <div className="mt-10 flex justify-center items-center">
                  <a href="https://www.linkedin.com/in/leon-fardell-1851a2194/" className="mr-10">
                  <Linkedin size={48}/>
                  </a>
                  <a href="#" className="text-2xl">Resume</a>
                </div>

              </div>
                              
              {navLinks.map((link, index) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`block my-10 text-2xl relative font-Cousine ${
                    selectedItem === index ? "text-3xl text-gray-300" : "text-gray-300"
                  } transition-all duration-300 hover:text-gray-500`}
                  onClick={() => setSelectedItem(index)}
                >
                  {link.label}
                </a>
              ))}



            </div>
          </div>
        </div>
        <div className="w-full md:w-4/6 p-6 overflow-y-auto">
          {navLinks.map((link, index) => (
            <div
              key={link.id}
              ref={(ref) => (contentRefs.current[index] = ref)}
              id={link.id.toString()}
              className={`text-center content-section mb-60 `}
            >
              {index === 0 && <Intro />}

              {index === 1 && <Experience />}
              
              {index === 2 && <Skills />}

              {index === 3 && <Contact />}

              {/* Add more content sections as needed */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
