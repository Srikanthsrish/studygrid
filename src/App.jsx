import Landing from './Components/Landing/Landing'
 import './App.css'
import {  Route, Routes } from 'react-router-dom';
import Login from './Pages/LoginRegister/Login';
import StudentLogin from './Pages/LoginRegister/StudentLogin';
import AdminLogin from './Pages/LoginRegister/AdminLogin';
import AdminRegister from './Pages/LoginRegister/AdminRegister';
import TeacherLogin from './Pages/LoginRegister/TeacherLogin';
import AdminDashboard from './Components/Admin/AdminDashboard';
import StudentTimetable from './Components/Student/StudentDetails/StudentTimetable';
import StudentProfile from './Components/Student/StudentDetails/StudentProfile';
import StudentAttendance from './Components/Student/StudentDetails/StudentAttendance';
import StudentComplains from './Components/Student/StudentDetails/StudentComplains';
import DashboardStudent from './Components/Student/DashboardStudent';
import TeacherDetails from './Components/Teacher/TeacherDashboard';
import Classes from './Components/Teacher/TeacherDetils/Classes';
import TeacherProfile from './Components/Teacher/TeacherDetils/profile';
import Assignments from './Components/Teacher/TeacherDetils/Assignments';
import AdminProfile from './Components/Admin/AdminDetails/AdminProfile';
import Notices from './Components/Admin/AdminDetails/Notices';
import Complains from './Components/Admin/AdminDetails/Complains';
import Teachers from './Components/Admin/AdminDetails/Teachers';
import Students from './Components/Admin/AdminDetails/Students';
import Subjects from './Components/Admin/AdminDetails/Subjects';
import AdminClasses from './Components/Admin/AdminDetails/Adminclasses';
import AdminHome from './Components/Admin/AdminDetails/AdminHome';
import TeachersHome from './Components/Teacher/TeacherDetils/teachershome';
import StudentHome from './Components/Student/StudentDetails/StudentHome';

function App() {
  

  return (
    <>

     
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/studentLogin" element={<StudentLogin/>} />
        <Route path="/adminLogin" element={< AdminLogin/>} />
        <Route path="//adminregister" element={<AdminRegister />} />
        <Route path="/teacherLogin" element={<TeacherLogin/>} />
        <Route path="/adminDashboard" element={<AdminDashboard/>} />
        <Route path="/studentDashboard" element={<DashboardStudent/>} />
        <Route path="/student/profile" element={<StudentProfile/>} />
        <Route path="/student/attendance" element={<StudentAttendance/>} />
        <Route path="/student/complains" element={<StudentComplains/>} />
        <Route path="/student/timetable" element={<StudentTimetable/>} />
        <Route path="/teacher-dashboard" element={<TeacherDetails/>} />
        <Route path="teacher/classes" element={< Classes/>} />
        <Route path="teacher/profile" element={< TeacherProfile/>} />
        <Route path="teacher/assignments" element={<Assignments />} />
        <Route path="/admin/profile" element={< AdminProfile/>} />
        <Route path="/logout" element={< Landing/>} />
        <Route path="/admin/notices" element={<Notices />} />
        <Route path="/admin/complains" element={<Complains />} />
        <Route path="/admin/teachers" element={<Teachers />} />
        <Route path="/admin/students" element={< Students/>} />
        <Route path="/admin/subjects" element={< Subjects/>} />
        <Route path="/admin/classes" element={<AdminClasses />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="teacher/dashboard" element={<TeachersHome/>} />
        <Route path="/student/home" element={<StudentHome/>} />
        
        
        </Routes>
    
    </>
  )
}

export default App;
