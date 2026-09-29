import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { experiences } from '../data/experience';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const revealRef = useReveal();

  return (
    <section id="experience" className="section-padding" ref={revealRef}>
      <div className="container">
        <h2 className="section-title text-center reveal fade-up">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item reveal fade-up" style={{ transitionDelay: `${index * 200}ms` }}>
              <div className="timeline-dot">
                <Briefcase size={16} />
              </div>
              <div className="timeline-content glass-panel">
                <div className="timeline-header">
                  <div>
                    <h3 className="role">{exp.role}</h3>
                    <h4 className="company">{exp.company}</h4>
                  </div>
                  <span className="duration">{exp.duration}</span>
                </div>
                
                <p className="description">{exp.description}</p>
                
                <ul className="responsibilities">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
