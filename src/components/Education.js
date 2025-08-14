import React from 'react';

const Education = () => {
  return (
    <section className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-content">
          <div className="education-item">
            <h3 className="degree">Bachelor's Degree in Computer Science</h3>
            <p className="school">University of Computer Studies, Mandalay</p>
            <p className="graduation-date">Expected: 01/2020</p>
            <p className="specialization">Specialization: Computer Science and Data Structures</p>
            <p className="note">
              Studies paused in the final year due to COVID-19 pandemic and ongoing civil unrest in the country.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
