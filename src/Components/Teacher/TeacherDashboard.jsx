import React from "react";


const TeacherDetails = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Teacher Dashboard</div>
      <ul className="navbar-menu">
        <li><a href="teacher/dashboard">Dashboard</a></li>
        <li><a href="teacher/classes">Classes</a></li>
        <li><a href="teacher/attendance">Attendance</a></li>
        <li><a href="teacher/assignments">Assignments</a></li>
        <li><a href="teacher/reports">Reports</a></li>
        <li><a href="teacher/messages">Messages</a></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle">Profile</a>
          <ul className="dropdown-menu">
            <li><a href="teacher/profile">View Profile</a></li>
            <li><a href="teacher/logout">Logout</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
export default TeacherDetails;
