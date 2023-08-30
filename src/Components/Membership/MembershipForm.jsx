import React, { useState } from 'react';
import './Form.css'; // Import your CSS file for styling

const RegistrationForm = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [personalInfo, setPersonalInfo] = useState({ name: '', email: '' });
  const [workInfo, setWorkInfo] = useState({ company: '', position: '' });
  const [socialInfo, setSocialInfo] = useState({ twitter: '', linkedin: '' });

  const sections = [
    { title: 'Personal Info', data: personalInfo },
    { title: 'Work Info', data: workInfo },
    { title: 'Social Info', data: socialInfo },
  ];

  const handleInputChange = (sectionIndex, field, value) => {
    const sectionData = sections[sectionIndex].data;
    sectionData[field] = value;

    switch (sectionIndex) {
      case 0:
        setPersonalInfo({ ...sectionData });
        break;
      case 1:
        setWorkInfo({ ...sectionData });
        break;
      case 2:
        setSocialInfo({ ...sectionData });
        break;
      default:
        break;
    }
  };

  const handleNext = () => {
    setCurrentSection(currentSection + 1);
  };

  const handleBack = () => {
    setCurrentSection(currentSection - 1);
  };

  const handleReset = () => {
    setPersonalInfo({ name: '', email: '' });
    setWorkInfo({ company: '', position: '' });
    setSocialInfo({ twitter: '', linkedin: '' });
    setCurrentSection(0);
  };

  const handleSubmit = () => {
    // Perform validation here before submitting
    if (currentSection === sections.length - 1) {
      const postData = {
        personalInfo,
        workInfo,
        socialInfo,
      };

      // Send post request to the server using fetch or a similar method
      // Example: fetch('/api/registration', { method: 'POST', body: JSON.stringify(postData) })
      alert('Registration completed successfully!');
    } else {
      handleNext();
    }
  };

  return (
    <div className="registration-form">
      <div className="completion-bar">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`completion-step ${index <= currentSection ? 'completed' : ''}`}
          ></div>
        ))}
      </div>
      <div className="section">
        <h2>{sections[currentSection].title}</h2>
        {Object.keys(sections[currentSection].data).map((field, index) => (
          <input
            key={index}
            type="text"
            placeholder={field}
            value={sections[currentSection].data[field]}
            onChange={(e) => handleInputChange(currentSection, field, e.target.value)}
          />
        ))}
        <div className="buttons">
          {currentSection > 0 && <button onClick={handleBack}>Back</button>}
          {currentSection < sections.length - 1 && <button onClick={handleSubmit}>Next</button>}
          {currentSection === sections.length - 1 && <button onClick={handleSubmit}>Submit</button>}
        </div>
      </div>
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default RegistrationForm;
