import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const revealRef = useReveal();

  return (
    <section id="projects" className="section-padding" ref={revealRef}>
      <div className="container">
        <div className="projects-header reveal fade-up">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="projects-subtitle">
            A selection of my recent work in full-stack development and AI.
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="reveal scale-in"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
