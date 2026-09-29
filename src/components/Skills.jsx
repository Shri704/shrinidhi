import React from 'react';
import { useReveal } from '../hooks/useReveal';
import './Skills.css';

const skillCategories = [
  {
    category: "Programming Languages",
    emoji: "💻",
    color: "#3b82f6",
    items: [
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "JavaScript", icon: "🟨" },
      { name: "C", icon: "🔵" },
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
    ]
  },
  {
    category: "Web Technologies",
    emoji: "🌍",
    color: "#06b6d4",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚀" },
      { name: "REST APIs", icon: "🔗" },
      { name: "Tailwind CSS", icon: "🎨" },
    ]
  },
  {
    category: "Database",
    emoji: "🗄️",
    color: "#10b981",
    items: [
      { name: "MongoDB", icon: "🍃" },
      { name: "SQL", icon: "📊" },
    ]
  },
  {
    category: "AI / ML / NLP",
    emoji: "🤖",
    color: "#8b5cf6",
    items: [
      { name: "OpenCV", icon: "👁️" },
      { name: "Face Recognition", icon: "🧠" },
      { name: "Prompt Engineering", icon: "✍️" },
      { name: "LLMs", icon: "🦾" },
    ]
  },
  {
    category: "Tools & DevOps",
    emoji: "🛠️",
    color: "#f59e0b",
    items: [
      { name: "GitHub", icon: "🐙" },
      { name: "VS Code", icon: "🔷" },
      { name: "Docker", icon: "🐳" },
      { name: "Postman", icon: "📮" },
    ]
  },
  {
    category: "CS Fundamentals",
    emoji: "📚",
    color: "#ef4444",
    items: [
      { name: "Data Structures", icon: "🌲" },
      { name: "Networking", icon: "🔌" },
      { name: "Operating Systems", icon: "💾" },
      { name: "DBMS", icon: "🗂️" },
    ]
  }
];

const Skills = () => {
  const revealRef = useReveal();

  return (
    <section id="skills" className="section-padding skills-section" ref={revealRef}>
      <div className="container">
        <div className="skills-header reveal fade-up">
          <h2 className="section-title text-center">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="skills-subtitle text-center">
            Technologies and tools I work with to build scalable, intelligent systems
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((group, index) => (
            <div
              key={group.category}
              className="skill-card reveal fade-up"
              style={{ transitionDelay: `${index * 80}ms`, '--card-color': group.color }}
            >
              <div className="skill-card-header">
                <span className="skill-category-emoji">{group.emoji}</span>
                <h3 className="skill-category-name">{group.category}</h3>
                <div className="skill-card-line" style={{ background: group.color }} />
              </div>
              <div className="skill-tags">
                {group.items.map((item, i) => (
                  <span key={i} className="skill-tag">
                    <span className="skill-tag-icon">{item.icon}</span>
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
