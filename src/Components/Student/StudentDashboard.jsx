import React from "react";
import { Link, useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/"); // Redirect to login or home page
  };

  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/student/home" style={styles.link}>Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/student/timetable" style={styles.link}>Timetable</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/student/attendance" style={styles.link}>Attendance</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/student/complains" style={styles.link}>Complains</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/student/profile" style={styles.link}>Profile</Link>
          </li>
          <li style={styles.navItem}>
            <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

// Styles for the navigation bar
const styles = {
  container: {
    padding: "20px",
  },
  navbar: {
    backgroundColor: "#007bff",
    padding: "10px 20px",
    borderRadius: "5px",
  },
  navList: {
    listStyleType: "none",
    padding: 0,
    display: "flex",
    justifyContent: "space-around",
    margin: 0,
  },
  navItem: {
    margin: "0 10px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default StudentDashboard;