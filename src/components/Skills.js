import React from 'react';

const Skills = () => {
  const skills = [
    'Linux',
    'Shell Scripting',
    'Java',
    'Kubernetes',
    'AWS',
    'Python',
    'Git',
    'OOP',
    'Docker',
    'Cloud Computing',
    'Communication skills',
    'Spring Framework',
    'React',
    'JavaScript',
    'TypeScript',
    'MySQL',
    'CI/CD',
    'Jenkins',
    'GitHub Actions',
    'Terraform',
    'Prometheus',
    'Grafana',
    'CloudWatch'
  ];

  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-content">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
