import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Login from './Pages/LoginRegister/Login';
import StudentLogin from './Pages/LoginRegister/StudentLogin';
import AdminLogin from './Pages/LoginRegister/AdminLogin';
import AdminRegister from './Pages/LoginRegister/AdminRegister';
import TeacherLogin from './Pages/LoginRegister/TeacherLogin';
import AdminDashboard from './Components/Admin/AdminDashboard';
import DashboardStudent from './Components/Student/DashboardStudent';
import StudentProfile from './Components/Student/StudentDetails/StudentProfile';
import StudentAttendance from './Components/Student/StudentDetails/StudentAttendance';
import StudentComplains from './Components/Student/StudentDetails/StudentComplains';
import StudentTimetable from './Components/Student/StudentDetails/StudentTimetable';
import TeacherDetails from './Components/Teacher/TeacherDashboard';
import Classes from './Components/Teacher/TeacherDetils/Classes';
import TeacherProfile from './Components/Teacher/TeacherDetils/TeacherProfile';
import Assignments from './Components/Teacher/TeacherDetils/Assignments';
import AdminProfile from './Components/Admin/AdminDetails/AdminProfile';
import Notices from './Components/Admin/AdminDetails/Notices';
import Complains from './Components/Admin/AdminDetails/Complains';
import Teachers from './Components/Admin/AdminDetails/Teachers';
import Students from './Components/Admin/AdminDetails/Students';
import Subjects from './Components/Admin/AdminDetails/Subjects';
import ClassesAdmin from './Components/Admin/AdminDetails/ClassesAdmin'; 
import TeachersHome from './Components/Teacher/TeacherDetils/TeachersHome';
import StudentHome from './Components/Student/StudentDetails/StudentHome';
import Home from './Components/Admin/AdminDetails/Home';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        {/* General Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        {/* Student Routes */}
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/dashboard" element={<DashboardStudent />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/attendance" element={<StudentAttendance />} />
        <Route path="/student/complains" element={<StudentComplains />} />
        <Route path="/student/timetable" element={<StudentTimetable />} />
        <Route path="/student/home" element={<StudentHome />} />
        <Route path="/student/logout" element={<Landing/>} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister/>} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        <Route path="/admin/home" element={< Home/>} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/notices" element={<Notices />} />
        <Route path="/admin/complains" element={<Complains />} />
        <Route path="/admin/teachers" element={<Teachers />} />
        <Route path="/admin/students" element={<Students />} />
        <Route path="/admin/subjects" element={<Subjects />} />
        <Route path="/admin/classes" element={<ClassesAdmin />} />
        
        <Route path="/admin/logout" element={<Landing/>} />
        

        {/* Teacher Routes */}
        <Route path="/teacher/login" element={<TeacherLogin />} />
        <Route path="/teacher/dashboard" element={<TeacherDetails />} />
        <Route path="/teacher/home" element={<TeachersHome />} />
        <Route path="/teacher/classes" element={<Classes />} />
        <Route path="/teacher/profile" element={<TeacherProfile />} />
        <Route path="/teacher/assignments" element={<Assignments />} />
        <Route path="/teacher/logout" element={<Landing/>} />
      </Routes>
    </>
  );
}

export default App;

