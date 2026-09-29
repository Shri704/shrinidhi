import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, ExternalLink, X } from 'lucide-react';
import { GithubIcon as Github } from './Icons';
import './ProjectCard.css';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>

        <h2 className="modal-title">{project.title}</h2>

        <div className="modal-body">
          <div className="modal-section">
            <h4>Overview</h4>
            <p>{project.description}</p>
          </div>

          <div className="modal-section">
            <h4>Technologies</h4>
            <div className="tech-flex">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <h4>Key Features</h4>
            <ul className="feature-list">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="modal-actions">
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary">
              <Github size={18} /> View Code
            </a>
            <a href={project.liveDemoUrl} target="_blank" rel="noreferrer" className="btn-primary">
              <ExternalLink size={18} /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <>
      <div
        className="project-card glass-panel"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsModalOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setIsModalOpen(true)}
      >
        <div className="project-card-inner">
          <div className="project-id">{project.id}</div>
          <h3 className="project-title">{project.title}</h3>

          <p className="project-description-short">
            {project.description.substring(0, 100)}...
          </p>

          <div className="project-tech-preview">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span key={i} className="tech-chip">{tech}</span>
            ))}
            {project.technologies.length > 3 && (
              <span className="tech-chip">+{project.technologies.length - 3}</span>
            )}
          </div>

          <div className="view-project">
            <span>View Project</span>
            <ArrowUpRight className="arrow-icon" size={18} />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ProjectModal project={project} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default ProjectCard;
