import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

const Portfolio = () => {
  return (
    <>
      <div className="animated-bg"></div>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

const NotFound = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div className="animated-bg"></div>
      <CustomCursor />
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }} className="gradient-text">404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Page Not Found</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <a href="/" className="btn-primary">Return Home</a>
    </div>
  );
};

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
