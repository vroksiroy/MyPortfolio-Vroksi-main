import styled, { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Approach from "./components/Approach";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import { projects } from "./data/constants";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.ink};
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`

const getCaseSlug = () => {
  const match = window.location.hash.match(/^#case\/(.+)$/);
  return match && projects.some((p) => p.slug === match[1]) ? match[1] : null;
}

const getInitialMode = () => {
  try {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
  } catch (e) {}
  return false;
}

function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode);
  const [caseSlug, setCaseSlug] = useState(getCaseSlug);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      try { localStorage.setItem('theme', prev ? 'light' : 'dark'); } catch (e) {}
      return !prev;
    });
  }

  useEffect(() => {
    const onPop = () => setCaseSlug(getCaseSlug());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const openCase = (project) => {
    const hash = `#case/${project.slug}`;
    if (caseSlug) {
      window.history.replaceState(window.history.state, '', hash);
    } else {
      window.history.pushState({ case: true }, '', hash);
    }
    setCaseSlug(project.slug);
  }

  const closeCase = () => {
    if (window.history.state?.case) {
      window.history.back();
    } else {
      window.history.replaceState(null, '', window.location.pathname + '#work');
      setCaseSlug(null);
    }
  }

  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Body>
          <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
          <main>
            <HeroSection />
            <Projects onOpen={openCase} />
            <Approach />
            <Experience />
            <Skills />
            <Contact />
          </main>
          <Footer />
          {caseSlug &&
            <ProjectDetails slug={caseSlug} onOpen={openCase} onClose={closeCase} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
