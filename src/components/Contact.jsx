import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import './Contact.css';

const Contact = () => {
  const revealRef = useReveal();

  return (
    <section id="contact" className="section-padding" ref={revealRef}>
      <div className="container">
        <div className="contact-centered reveal fade-up">
          <h2 className="section-title text-center">
            Let's Build Something <span className="gradient-text">Meaningful.</span>
          </h2>
          <p className="contact-text text-center">
            Whether you're looking for a developer, have a project idea, or simply want to connect, I'd love to hear from you.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon-wrap">
                <Mail size={20} />
              </div>
              <div>
                <h4>Email</h4>
                <p>shrinidhish909@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrap">
                <Phone size={20} />
              </div>
              <div>
                <h4>Phone</h4>
                <p>+91-7760224910</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrap">
                <MapPin size={20} />
              </div>
              <div>
                <h4>Location</h4>
                <p>Dharwad, Karnataka, India</p>
              </div>
            </div>
          </div>

          <div className="contact-actions">
            <a href="mailto:shrinidhish909@gmail.com" className="btn-primary magnetic">
              <Mail size={18} /> Email Me
            </a>
            <a href="http://linkedin.com/in/shrinidhi-haribhattanavar-171b41263/" target="_blank" rel="noreferrer" className="btn-secondary magnetic">
              <Linkedin size={18} /> Connect on LinkedIn
            </a>
            <a href="https://github.com/Shri704" target="_blank" rel="noreferrer" className="btn-secondary magnetic">
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
