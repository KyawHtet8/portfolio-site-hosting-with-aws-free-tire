import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Cloud, GitBranch, Container, Settings, ChevronDown, ExternalLink, Monitor, Layers, Shield, Activity, Terminal, FileCode } from 'lucide-react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
          
          // Update active section when section becomes visible
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'AWS', icon: Cloud, level: 88, color: 'from-orange-400 to-red-500', projects: 'EC2, S3, RDS, IAM, CloudWatch' },
    { name: 'Docker', icon: Container, level: 90, color: 'from-blue-400 to-cyan-500', projects: 'Multi-container orchestration' },
    { name: 'Kubernetes', icon: Settings, level: 82, color: 'from-purple-400 to-pink-500', projects: 'Container orchestration' },
    { name: 'Java/Spring', icon: Code, level: 95, color: 'from-green-400 to-emerald-500', projects: 'Spring Boot, Hibernate' },
    { name: 'CI/CD', icon: GitBranch, level: 85, color: 'from-yellow-400 to-orange-500', projects: 'GitHub Actions, Jenkins' },
    { name: 'Linux/Shell', icon: Terminal, level: 88, color: 'from-gray-400 to-gray-600', projects: 'Automation scripting' }
  ];

  const devopsTools = [
    { name: 'Terraform', icon: Layers, description: 'Infrastructure as Code' },
    { name: 'Prometheus', icon: Activity, description: 'Monitoring & Alerting' },
    { name: 'Grafana', icon: Monitor, description: 'Data Visualization' },
    { name: 'Git', icon: GitBranch, description: 'Version Control' },
    { name: 'Python', icon: FileCode, description: 'Automation Scripts' },
    { name: 'CloudWatch', icon: Shield, description: 'AWS Monitoring' }
  ];

  const projects = [
    {
      title: "AWS Cloud Infrastructure Portfolio",
      tech: ["AWS S3", "CloudFront", "Route 53", "Static Hosting"],
      description: "Deployed scalable static website with global CDN distribution",
      link: "http://ivan-bucket-portfolio.s3-website-ap-southeast-1.amazonaws.com",
      highlight: "Live on AWS"
    },
    {
      title: "CI/CD Pipeline Automation", 
      tech: ["GitHub Actions", "Jenkins", "Docker", "AWS"],
      description: "Automated build, test, and deployment workflows with zero-downtime deployments",
      highlight: "DevOps Focus"
    },
    {
      title: "Container Orchestration System",
      tech: ["Docker", "Kubernetes", "AWS EKS", "Monitoring"],
      description: "Multi-container application deployment with auto-scaling and health monitoring",
      highlight: "Enterprise Ready"
    },
    {
      title: "Full-Stack Application with Cloud Integration",
      tech: ["Spring Boot", "React", "MySQL", "AWS RDS"],
      description: "Complete web application with cloud-hosted database and monitoring",
      highlight: "Production Grade"
    }
  ];

  const certificationProgress = [
    { name: 'AWS Cloud Practitioner', progress: 100, status: 'Achieved' },
      { name: 'Multicloud Network Associate', progress: 100, status: 'Achieved' },
    { name: 'AWS Solutions Architect', progress: 60, status: 'Preparing' },
    { name: 'Docker Certified Associate', progress: 70, status: 'Preparing' }

  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AKH DevOps
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Education', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => {
                const sectionId = item.toLowerCase();
                const isActive = activeSection === sectionId || (activeSection === 'hero' && item === 'About');
                
                return (
                  <a
                    key={item}
                    href={`#${sectionId}`}
                    className={`transition-colors duration-300 relative ${
                      isActive 
                        ? 'text-blue-400 font-semibold' 
                        : 'text-gray-300 hover:text-blue-400'
                    }`}
                  >
                    {item}
                    {isActive && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                    )}
                  </a>
                );
              })}
            </div>
            <a 
              href="https://github.com/KyawHtet8"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ExternalLink size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-10 w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`transform transition-all duration-1000 ${isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700 mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">Available for DevOps opportunities</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Aung Kyaw Htet
              </span>
            </h1>
            <div className="text-xl md:text-2xl mb-4 text-gray-300">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">
                DevOps Engineer
              </span>
              <span className="mx-2">•</span>
              <span>Cloud Practitioner</span>
              <span className="mx-2">•</span>
              <span>Java Instructor</span>
            </div>
            
            <p className="text-lg mb-8 max-w-4xl mx-auto text-gray-400 leading-relaxed">
              Bridging development and operations through modern cloud platforms, automation, and scalable infrastructure. 
              Experienced in AWS, Docker, Kubernetes, CI/CD pipelines, and full-stack development with Java/Spring Boot.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a 
                href="https://github.com/KyawHtet8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Github size={20} />
                <span>View GitHub</span>
              </a>
              <a href="mailto:kyawhtet1996.dev@gmail.com" 
                 className="border border-gray-600 px-8 py-3 rounded-full hover:border-blue-500 hover:text-blue-400 transition-all duration-300 flex items-center space-x-2">
                <Mail size={20} />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">2+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">AWS</div>
                <div className="text-gray-400">Cloud Platform</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Bangkok</div>
                <div className="text-gray-400">Based In</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible.about ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Seeking opportunities to leverage my skills in a dynamic and collaborative environment. 
                Motivated and knowledgeable software developer with 2+ years of experience as a Java instructor at Java Developer 
                Class (JDC) in Myanmar. Over the past years, I have deepened my expertise in software engineering, focusing on Java, 
                Spring, and React full-stack development.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Well-versed in Object-Oriented Programming (OOP) principles, I am 
                passionate about creating efficient, scalable software solutions. Additionally, I have foundational experience in 
                DevOps practices, including CI/CD pipelines, containerization (Docker, Kubernetes), and cloud platforms (AWS), 
                enabling me to bridge development and operations effectively.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Eager to contribute to a dynamic development team 
                by applying both my software engineering and DevOps skills to deliver high-quality solutions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-400">
                  <MapPin size={20} className="text-blue-400" />
                  <span>Bangkok, Thailand</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-400">
                  <ExternalLink size={20} className="text-blue-400" />
                  <a href="https://github.com/KyawHtet8" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="hover:text-blue-400 transition-colors">
                    GitHub Portfolio
                  </a>
                </div>
              </div>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible.about ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Professional Summary</h3>
                
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Currently expanding my expertise in cloud technologies and DevOps practices, with hands-on experience in AWS, 
                    Docker, Kubernetes, and CI/CD pipeline automation.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Passionate about bridging the gap between development and operations through modern infrastructure solutions 
                    and automated deployment strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Education */}
              <div className={`transform transition-all duration-1000 ${isVisible.education ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 h-full">
                  <h3 className="text-2xl font-semibold mb-6 text-blue-400">Academic Background</h3>
                  
                  <div className="border-l-4 border-blue-400 pl-6">
                    <h4 className="text-xl font-medium mb-2 text-white">Bachelor's Degree in Computer Science</h4>
                    <p className="text-blue-300 font-medium mb-2">University of Computer Studies, Mandalay</p>
                    <p className="text-gray-400 mb-2">Expected: January 2020</p>
                    <p className="text-gray-400 mb-3">Specialization: Computer Science and Data Structures</p>
                    <div className="bg-gray-700/50 p-4 rounded-lg border-l-2 border-yellow-400">
                      <p className="text-gray-300 text-sm">
                        <span className="text-yellow-400 font-medium">Note:</span> Studies paused in the final year due to COVID-19 pandemic and ongoing civil unrest in the country.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className={`transform transition-all duration-1000 delay-200 ${isVisible.education ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 h-full">
                  <h3 className="text-2xl font-semibold mb-6 text-purple-400">Certification Progress</h3>
                  
                  <div className="space-y-6">
                    {certificationProgress.map((cert, index) => (
                      <div key={cert.name} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">{cert.name}</span>
                          <span className={`text-sm px-2 py-1 rounded-full ${
                            cert.status === 'In Progress' ? 'bg-blue-600 text-white' :
                            cert.status === 'Studying' ? 'bg-purple-600 text-white' :
                            'bg-gray-600 text-gray-300'
                          }`}>
                            {cert.status}
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-3">
                          <div
                            className="h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-1000 ease-out"
                            style={{ width: isVisible.education ? `${cert.progress}%` : '0%' }}
                          ></div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-gray-400">{cert.progress}% Complete</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          
          {/* Core Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-300">Core Technologies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 ${
                    isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <skill.icon className="mr-3 text-blue-400" size={28} />
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                      style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                  <p className="text-gray-400 text-right text-sm mb-3">{skill.level}%</p>
                  <p className="text-gray-500 text-sm">{skill.projects}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps Tools */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-300">DevOps Toolkit</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {devopsTools.map((tool, index) => (
                <div
                  key={tool.name}
                  className={`bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 ${
                    isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 6) * 100}ms` }}
                >
                  <div className="flex items-center mb-3">
                    <tool.icon className="mr-3 text-purple-400" size={24} />
                    <h4 className="text-lg font-medium">{tool.name}</h4>
                  </div>
                  <p className="text-gray-400 text-sm">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    project.highlight === 'Live on AWS' ? 'bg-green-600 text-white' :
                    project.highlight === 'DevOps Focus' ? 'bg-blue-600 text-white' :
                    project.highlight === 'Enterprise Ready' ? 'bg-purple-600 text-white' :
                    'bg-gray-600 text-white'
                  }`}>
                    {project.highlight}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>View Live Site</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-400">DevOps Engineer</h3>
                    <p className="text-lg text-gray-300">Freelance - Self-Directed Learning & Practice</p>
                  </div>
                  <span className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-400">
                    since 2024
                  </span>
                </div>
                <ul className="space-y-3">
                  <li className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2">▸</span>
                    Designed and implemented <strong>CI/CD pipelines</strong> using GitHub Actions and Jenkins for automated build, test, and deployment workflows
                  </li>
                  <li className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2">▸</span>
                    Deployed and managed applications in <strong>Docker containers</strong> and orchestrated multi-container environments with Kubernetes
                  </li>
                  <li className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2">▸</span>
                    Configured and maintained <strong>AWS services</strong> such as EC2, S3, RDS, and IAM for secure and scalable application hosting
                  </li>
                  <li className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2">▸</span>
                    Built and deployed project-based applications integrating <strong>Spring Boot and React</strong> with cloud-hosted databases
                  </li>
                  <li className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2">▸</span>
                    Practiced <strong>infrastructure automation</strong> with Terraform and shell scripting for repeatable, consistent deployments
                  </li>
                  <li className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2">▸</span>
                    Gained experience in <strong>monitoring and logging</strong> using Prometheus, Grafana, and AWS CloudWatch
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-400">Java Instructor / Software Developer</h3>
                    <p className="text-lg text-gray-300">Java Developer Class (JDC Myanmar), Yangon</p>
                  </div>
                  <span className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-400">
                    Apr 2023 - Apr 2024
                  </span>
                </div>
                <ul className="space-y-3">
                  <li className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2">▸</span>
                    Developed web applications using <strong>Java EE technologies</strong> (JSP, Servlets, JDBC)
                  </li>
                  <li className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2">▸</span>
                    Utilized <strong>Spring Framework and Hibernate</strong> to build robust, high-performance applications
                  </li>
                  <li className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2">▸</span>
                    Delivered <strong>full-stack development solutions</strong> using Java, Spring Boot, React, and MySQL
                  </li>
                  <li className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2">▸</span>
                    Integrated <strong>AWS cloud services</strong> into applications for hosting and deployment
                  </li>
                  <li className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2">▸</span>
                    Collaborated with students and team members to improve coding skills and project efficiency
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-12">
              I'm actively seeking DevOps engineer opportunities and always open to discussing cloud architecture, 
              automation strategies, and innovative DevOps solutions. Let's build something amazing together!
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <a
                href="mailto:kyawhtet1996.dev@gmail.com"
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Mail className="text-blue-400" size={24} />
                <span>kyawhtet1996.dev@gmail.com</span>
              </a>
              <a
                href="tel:0818038236"
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Phone className="text-blue-400" size={24} />
                <span>081-803-8236</span>
              </a>
            </div>

            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://linkedin.com/in/kyaw-htet-44b8432bb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:kyawhtet1996.dev@gmail.com"
                className="bg-gray-700 p-4 rounded-full hover:bg-gray-600 transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://github.com/KyawHtet8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 p-4 rounded-full hover:bg-purple-700 transition-colors duration-300"
              >
                <Github size={24} />
              </a>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Current Focus</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">AWS Certifications</span>
                <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">Kubernetes Deep Dive</span>
                <span className="bg-green-600 px-3 py-1 rounded-full text-sm">DevOps Opportunities</span>
                <span className="bg-orange-600 px-3 py-1 rounded-full text-sm">Cloud Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 mb-2">
            © 2025 Aung Kyaw Htet. Built with React, deployed on AWS S3.
          </p>
          <p className="text-sm text-gray-500">
            🚀 Passionate about DevOps, Cloud Computing, and Continuous Learning
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
