import React from 'react';

const Experience = () => {
  return (
    <section className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-content">
          <div className="job">
            <div className="job-header">
              <h3 className="job-title">DevOps Engineer</h3>
              <p className="company">Freelance</p>
              <p className="job-subtitle">Junior DevOps & Cloud Practitioner (Project-Based)</p>
              <p className="duration">since 2024</p>
              <p className="location">Self-Directed Learning & Practice</p>
            </div>
            <ul className="job-responsibilities">
              <li>Designed and implemented CI/CD pipelines using GitHub Actions and Jenkins for automated build, test, and deployment workflows.</li>
              <li>Deployed and managed applications in Docker containers and orchestrated multi-container environments with Kubernetes.</li>
              <li>Configured and maintained AWS services such as EC2, S3, RDS, and IAM for secure and scalable application hosting.</li>
              <li>Built and deployed project-based applications integrating Spring Boot and React with cloud-hosted databases.</li>
              <li>Practiced infrastructure automation with Terraform and shell scripting for repeatable, consistent deployments.</li>
              <li>Troubleshot and resolved junior-to-mid-level DevOps issues, including environment setup, build errors, and deployment failures.</li>
              <li>Prepared for DevOps and AWS Cloud certifications through hands-on labs and real-world project simulations.</li>
              <li>Gained experience in monitoring and logging using Prometheus, Grafana, and AWS CloudWatch.</li>
            </ul>
          </div>

          <div className="job">
            <div className="job-header">
              <h3 className="job-title">Java Instructor / Software Developer</h3>
              <p className="company">Java Developer Class (JDC Myanmar)</p>
              <p className="duration">Apr 2023 - Apr 2024</p>
              <p className="location">Yangon</p>
            </div>
            <ul className="job-responsibilities">
              <li>Developed a web application using Java EE technologies (JSP, Servlets, JDBC).</li>
              <li>Utilized Spring Framework and Hibernate to build robust, high-performance applications.</li>
              <li>Created and maintained software in Java, TypeScript, and JavaScript.</li>
              <li>Applied Object-Oriented Programming (OOP) principles to design scalable and maintainable software systems.</li>
              <li>Delivered full-stack development solutions using Java, Spring Boot, React, and MySQL.</li>
              <li>Collaborated with students and team members to improve coding skills, problem-solving abilities, and project efficiency.</li>
              <li>Integrated AWS cloud services into applications for hosting and deployment.</li>
              <li>Encouraged best practices in software engineering and guided learners in practical development projects.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
