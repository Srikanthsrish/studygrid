import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const [formData, setFormData] = useState({
    rollNumber: "",
    name: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.rollNumber.trim()) {
      newErrors.rollNumber = "Roll Number is required.";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Example: Simulate a successful login
      console.log("Student Login Data: ", formData);

      // Redirect to Student Dashboard
      navigate("/student/dashboard");

      // Reset form fields
      setFormData({
        rollNumber: "",
        name: "",
        password: "",
      });
    }
  };

  const handleForgotPassword = () => {
    alert("Forgot Password? Please contact your administrator or check your email for instructions.");
  };

  return (
    <div className="student-login-container">
      <h1>Student Login</h1>
      <p>Welcome back! Please enter your details.</p>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="rollNumber">Enter your Roll Number *</label>
          <input
            type="text"
            id="rollNumber"
            name="rollNumber"
            placeholder="Enter your Roll Number"
            value={formData.rollNumber}
            onChange={handleChange}
          />
          {errors.rollNumber && <p className="error-message">{errors.rollNumber}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="name">Enter your Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        <div className="form-options">
          <label>
            <input type="checkbox" name="rememberMe" /> Remember me
          </label>
          <button
            type="button"
            className="forgot-password"
            onClick={handleForgotPassword}
          >
            Forgot password?
          </button>
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default StudentLogin;