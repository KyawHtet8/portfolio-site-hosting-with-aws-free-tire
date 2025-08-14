import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:kyawhtet1996.dev@gmail.com">kyawhtet1996.dev@gmail.com</a>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <span>0818038236</span>
            </div>
            <div className="contact-item">
              <h3>LinkedIn</h3>
              <a href="https://linkedin.com/in/kyaw-htet-44b8432bb" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/kyaw-htet-44b8432bb
              </a>
            </div>
            <div className="contact-item">
              <h3>Location</h3>
              <span>Bangkok, Thailand</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
