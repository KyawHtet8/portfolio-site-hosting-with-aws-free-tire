import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="name">Aung Kyaw Htet</h1>
          <p className="title">DevOps Engineer & Full-Stack Developer</p>
          <p className="location">Bangkok, Thailand</p>
          <div className="contact-info">
            <a href="mailto:kyawhtet1996.dev@gmail.com" className="contact-link">
              kyawhtet1996.dev@gmail.com
            </a>
            <a href="https://linkedin.com/in/kyaw-htet-44b8432bb" target="_blank" rel="noopener noreferrer" className="contact-link">
              LinkedIn
            </a>
            <a href="https://github.com/KyawHtet8" target="_blank" rel="noopener noreferrer" className="contact-link">
              GitHub
            </a>
            <span className="contact-link">0818038236</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
