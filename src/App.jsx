import { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import VerticalDots from './components/VerticalDots';
import StarBackground from './components/StarBackground';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import './assets/css/scroll.css';
import './i18n';

const sections = [
  { id: 'home', component: <Home /> },
  { id: 'about', component: <About /> },
  { id: 'skills', component: <Skills /> },
  { id: 'experience', component: <Experience /> },
  { id: 'projects', component: <Projects /> },
  { id: 'contact', component: <Contact /> },
];

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const sectionRefs = useRef([]);

  const handleDotClick = (index) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.findIndex((el) => el === entry.target);
          if (entry.isIntersecting && index !== -1) {
            setCurrentPage(index);
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="app-wrapper">
        <StarBackground />
        <Navbar />
        <main className="scroll-container">
          {sections.map(({ id, component }, index) => (
            <section
              key={id}
              id={id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="snap-section fade-slide"
            >
              {component}
            </section>
          ))}
        </main>
        <VerticalDots current={currentPage} onDotClick={handleDotClick} totalPages={sections.length} />
      </div>
    </ThemeProvider>
  );
};

export default App;
