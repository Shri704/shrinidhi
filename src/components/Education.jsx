import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { GraduationCap, Award } from 'lucide-react';
import { certifications } from '../data/certifications';
import './Education.css';

const Education = () => {
  const revealRef = useReveal();

  const educationData = [
    {
      institution: "KLS Vishwanathrao Deshpande Institute of Technology, Haliyal",
      period: "2022 — 2026",
      degree: "B.E. Computer Science Engineering",
      specialization: "Artificial Intelligence & Machine Learning",
      highlight: "CGPA: 8.0"
    },
    {
      institution: "Smt. Vidya P Hanchinmani",
      period: "2020 — 2022",
      degree: "XII — Science (PCMB)",
      specialization: null,
      highlight: null
    },
    {
      institution: "Sharada English Medium High School, Dharwad",
      period: "2019 — 2020",
      degree: "X — State Board",
      specialization: null,
      highlight: null
    }
  ];

  return (
    <section id="education" className="section-padding" ref={revealRef}>
      <div className="container">
        <div className="edu-cert-grid">
          
          {/* Education Column */}
          <div className="education-section reveal fade-up">
            <h2 className="section-title">
              <GraduationCap className="title-icon" size={32} />
              <span className="gradient-text">Education</span>
            </h2>
            
            <div className="edu-timeline">
              {educationData.map((edu, index) => (
                <div key={index} className="edu-item">
                  <div className="edu-dot"></div>
                  <div className="edu-content glass-panel magnetic">
                    <span className="edu-period">{edu.period}</span>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <h4 className="edu-institution">{edu.institution}</h4>
                    
                    {edu.specialization && (
                      <p className="edu-specialization">Specialization: {edu.specialization}</p>
                    )}
                    
                    {edu.highlight && (
                      <div className="edu-highlight">{edu.highlight}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications Column */}
          <div className="certifications-section reveal fade-up delay-200">
            <h2 className="section-title">
              <Award className="title-icon" size={32} />
              <span className="gradient-text">Certifications</span>
            </h2>
            
            <div className="cert-list">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-card glass-panel magnetic">
                  <Award className="cert-icon" size={24} />
                  <p className="cert-title">{cert}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Education;
