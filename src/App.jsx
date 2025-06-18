import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import { ThemeProvider } from './contexts/ThemeContext'; 
import './i18n'; 
import VerticalDots from './components/VerticalDots';

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const currentIndex = sectionRefs.current.findIndex((section) => {
        if (!section) return false;
        const offsetTop = section.offsetTop;
        const offsetBottom = offsetTop + section.offsetHeight;
        return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
      });

      if (currentIndex !== -1 && currentIndex !== currentPage) {
        setCurrentPage(currentIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleDotClick = (index) => {
    setCurrentPage(index);
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <>
        <Navbar />
        {sections.map(({ id, component }, index) => (
          <div
            key={id}
            ref={(el) => (sectionRefs.current[index] = el)}
            style={{ minHeight: '100vh' }}
            id={id}
          >
            {component}
          </div>
        ))}

        <VerticalDots current={currentPage} onDotClick={handleDotClick} />
      </>
    </ThemeProvider>
  );
};

export default App;
