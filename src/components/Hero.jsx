import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import { useReveal } from '../hooks/useReveal';
import './Hero.css';

const TYPING_TEXTS = [
  "Full Stack Developer",
  "AI & ML Enthusiast",
  "Software Engineer",
  "Problem Solver",
];

const Hero = () => {
  const revealRef = useReveal();
  const [displayed, setDisplayed] = useState('');
  const stateRef = useRef({ index: 0, charIndex: 0, deleting: false });

  useEffect(() => {
    let timer;

    const tick = () => {
      const { index, charIndex, deleting } = stateRef.current;
      const full = TYPING_TEXTS[index];

      if (!deleting) {
        // type one more character
        const nextCharIndex = charIndex + 1;
        stateRef.current.charIndex = nextCharIndex;
        setDisplayed(full.slice(0, nextCharIndex));

        if (nextCharIndex === full.length) {
          // finished typing → pause then delete
          stateRef.current.deleting = true;
          timer = setTimeout(tick, 1800);
        } else {
          timer = setTimeout(tick, 80);
        }
      } else {
        // delete one character
        const nextCharIndex = charIndex - 1;
        stateRef.current.charIndex = nextCharIndex;
        setDisplayed(full.slice(0, nextCharIndex));

        if (nextCharIndex === 0) {
          // finished deleting → next word
          stateRef.current.index = (index + 1) % TYPING_TEXTS.length;
          stateRef.current.deleting = false;
          timer = setTimeout(tick, 400);
        } else {
          timer = setTimeout(tick, 45);
        }
      }
    };

    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero-section" ref={revealRef}>
      <div className="container hero-container">

        {/* ── Left Content ── */}
        <div className="hero-content">

          {/* Typewriter at the TOP */}
          <div className="typing-container reveal fade-up delay-100">
            <span className="typing-text">{displayed}</span>
            <span className="cursor">|</span>
          </div>

          <div className="eyebrow reveal fade-up delay-200">
            COMPUTER SCIENCE ENGINEERING • AI &amp; ML
          </div>

          <h1 className="hero-heading reveal fade-up delay-300">
            Building <span className="gradient-text">Intelligent</span><br />
            &amp; Scalable Digital Experiences.
          </h1>

          <p className="hero-description reveal fade-up delay-400">
            I'm Shrinidhi Haribhattanavar, a Computer Science Engineering student specializing in AI &amp; ML, with hands-on experience building full-stack applications, intelligent systems, and real-world digital solutions.
          </p>

          <div className="hero-actions reveal fade-up delay-500">
            <a href="#projects" className="btn-primary magnetic">
              Explore My Work <ArrowRight size={18} />
            </a>
          </div>

          <div className="hero-socials reveal fade-up delay-500">
            <a href="https://github.com/Shri704" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href="http://linkedin.com/in/shrinidhi-haribhattanavar-171b41263/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href="mailto:shrinidhish909@gmail.com" className="social-link" aria-label="Email">
              <Mail size={22} />
            </a>
          </div>

          <div className="status-badge reveal fade-in delay-500">
            <span className="status-dot"></span>
            Open to Software Engineering Opportunities
          </div>
        </div>

        {/* ── Right: Photo ── */}
        <div className="hero-visual reveal fade-in delay-200">
          <div className="abstract-shape shape-1"></div>
          <div className="abstract-shape shape-2"></div>
          <div className="image-container floating-element">
            <img
              src="/profile.jpg"
              alt="Shrinidhi Haribhattanavar"
              className="profile-image"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
