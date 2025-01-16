import React from "react";
import { Link } from "react-router-dom";

const TeacherDetails = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Teacher Dashboard</div>
      <ul className="navbar-menu">
        <li><Link to="/teacher/home">Home</Link></li>
        <li><Link to="/teacher/classes">Classes</Link></li>
        <li><Link to="/teacher/attendance">Attendance</Link></li>
        <li><Link to="/teacher/assignments">Assignments</Link></li>
        <li><Link to="/teacher/reports">Reports</Link></li>
        <li><Link to="/teacher/messages">Messages</Link></li>
        <li className="dropdown">
          <Link to="#" className="dropdown-toggle">Profile</Link>
          <ul className="dropdown-menu">
            <li><Link to="/teacher/profile">View Profile</Link></li>
            <li><Link to="/teacher/logout">Logout</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default TeacherDetails;

