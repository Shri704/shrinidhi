import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './About.css';

const About = () => {
  const revealRef = useReveal();

  const highlights = [
    { id: '01', title: 'Full Stack Development' },
    { id: '02', title: 'AI & Machine Learning' },
    { id: '03', title: 'Problem Solving' },
    { id: '04', title: 'Scalable Systems' },
  ];

  const stats = [
    { value: '8.0', label: 'CGPA' },
    { value: '2026', label: 'Graduation' },
    { value: '3+', label: 'Major Projects' },
    { value: '1', label: 'Full Stack Internship' },
  ];

  return (
    <section id="about" className="section-padding" ref={revealRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title reveal fade-up">
              Turning Ideas Into <span className="gradient-text">Working Systems.</span>
            </h2>
            
            <p className="about-text reveal fade-up delay-100">
              I'm a Computer Science Engineering student specializing in Artificial Intelligence & Machine Learning, passionate about software engineering, full-stack development, and solving real-world problems through technology.
            </p>
            
            <p className="about-text reveal fade-up delay-200">
              My experience spans React, Node.js, Express.js, MongoDB, Python, REST APIs, AI-powered applications, and cloud-oriented development. I enjoy building systems that are not only functional, but maintainable, responsive, and user-focused.
            </p>
            
            <div className="stats-row reveal fade-up delay-300">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-value gradient-text">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-highlights reveal fade-up delay-400">
            {highlights.map((item) => (
              <div key={item.id} className="highlight-card glass-panel magnetic">
                <div className="highlight-id">{item.id}</div>
                <h3 className="highlight-title">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
