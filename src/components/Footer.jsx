import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h2 className="footer-logo">SHRINIDHI.</h2>
            <p className="footer-credit">Designed & Built by Shrinidhi Haribhattanavar</p>
          </div>
          
          <div className="footer-right">
            <div className="footer-socials">
              <a href="https://github.com/Shri704" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="http://linkedin.com/in/shrinidhi-haribhattanavar-171b41263/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:shrinidhish909@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            
            <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
              <span className="btt-text">Back to top</span>
              <div className="btt-icon-wrap">
                <ArrowUp size={16} className="btt-icon" />
              </div>
            </button>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Shrinidhi Haribhattanavar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
