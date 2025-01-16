import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Mock login logic (Replace with API call)
    if (email === "admin@example.com" && password === "admin123") {
      setError("");
      alert("Login Successful!");
      navigate("/admin/dashboard"); // Navigate to Admin Dashboard
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="admin-login-container">
      <h1>Admin Login</h1>
      <p>Welcome back! Please enter your details.</p>
      <form onSubmit={handleLogin} className="login-form">
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="email">Enter your email *</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <div className="login-footer">
        <button
          className="forgot-password"
          onClick={() => navigate("/forgotPassword")}
        >
          Forgot password?
        </button>
        <p>
          Don't have an account?{" "}
          <button
            className="sign-up-button"
            onClick={() => navigate("/adminregister")}
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;