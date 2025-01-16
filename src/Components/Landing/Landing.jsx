import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Landing.css"


const Landing = () => {
  const navigate = useNavigate();  // Hook to programmatically navigate

  const handleLoginClick = () => {
    navigate('/login');  // Navigate to Login page
  };

  return (
    <div className="landing-container">
      {/* Image Section */}
      <div>
        <img
          src="https://miro.medium.com/v2/resize:fit:540/0*9jWHiWUCJD63ZMl7"
          alt="landing page illustration"
          className="landing-image"
        />
      </div>

      {/* Intro Section */}
      <div className="intro-section">
        <h1>Welcome to StudyGrid!</h1>
        <p><strong>Empowering Education Through Technology</strong></p>
        <p>
          Our platform simplifies educational management for students, teachers, and administrators.
          Whether you're tracking progress, managing schedules, or accessing resources, we've got you covered.
        </p>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="login-button" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;