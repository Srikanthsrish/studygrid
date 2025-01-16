import React from "react";
import { Link } from "react-router-dom";


const  AdminDashboard = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/admin/home">Home</Link></li>
        <li><Link to="/admin/classes">Classes</Link></li>
        <li><Link to="/admin/subjects">Subjects</Link></li>
        <li><Link to="/admin/teachers">Teachers</Link></li>
        <li><Link to="/admin/students">Students</Link></li>
        <li><Link to="/admin/notices">Notices</Link></li>
        <li><Link to="/admin/complains">Complains</Link></li>
        <li><Link to="/admin/profile">Profile</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default  AdminDashboard;