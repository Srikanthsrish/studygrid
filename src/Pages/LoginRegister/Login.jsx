import React from 'react';
import { FaGraduationCap, FaChalkboardTeacher, FaUserShield } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = (role) => {
    navigate(`/${role}Login`);  // Navigate based on the role
  };

  const styles = {
    loginContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#EAF2F8', /* Light blue background */
      color: '#2C3E50', /* Dark blue text */
      padding: '20px',
      textAlign: 'center',
      flexWrap: 'wrap',
    },
    buttonWithContent: {
      backgroundColor: 'white',
      border: '1px solid #BDC3C7', /* Light gray border */
      padding: '30px',
      width: '250px',
      margin: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    buttonWithContentHover: {
      backgroundColor: '#A9D6E5', /* Pastel blue on hover */
      transform: 'translateY(-5px)',
    },
    buttonHeading: {
      fontSize: '24px',
      color: '#2C3E50', /* Dark blue */
      fontWeight: 'bold',
      marginTop: '10px',
    },
    buttonDescription: {
      fontSize: '16px',
      color: '#2C3E50', /* Dark blue */
      margin: '5px 0',
    },
    iconStyle: {
      color: '#28a745', /* Green for icons */
      marginBottom: '15px',
      transition: 'color 0.3s ease',
    },
    iconHover: {
      color: '#2C3E50', /* Dark blue icon color on hover */
    },
  };

  return (
    <div style={styles.loginContainer}>
      {/* Admin Login Button */}
      <button
        style={styles.buttonWithContent}
        onClick={() => handleLoginClick('admin')}
        onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonWithContentHover.backgroundColor}
        onMouseLeave={(e) => e.target.style.backgroundColor = ''}
      >
        <FaUserShield size={50} style={styles.iconStyle} />
        <h2 style={styles.buttonHeading}>Admin</h2>
        <p style={styles.buttonDescription}>Login as an administrator to access the</p>
        <p style={styles.buttonDescription}>dashboard to manage app data.</p>
      </button>

      {/* Student Login Button */}
      <button
        style={styles.buttonWithContent}
        onClick={() => handleLoginClick('student')}
        onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonWithContentHover.backgroundColor}
        onMouseLeave={(e) => e.target.style.backgroundColor = ''}
      >
        <FaGraduationCap size={50} style={styles.iconStyle} />
        <h2 style={styles.buttonHeading}>Student</h2>
        <p style={styles.buttonDescription}>Login as a student to explore course materials and assignments.</p>
      </button>

      {/* Teacher Login Button */}
      <button
        style={styles.buttonWithContent}
        onClick={() => handleLoginClick('teacher')}
        onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonWithContentHover.backgroundColor}
        onMouseLeave={(e) => e.target.style.backgroundColor = ''}
      >
        <FaChalkboardTeacher size={50} style={{ ...styles.iconStyle, color: 'lightblue' }} />
        <h2 style={styles.buttonHeading}>Teacher</h2>
        <p style={styles.buttonDescription}>Login as a teacher to create courses,</p>
        <p style={styles.buttonDescription}>assignments, and track student progress.</p>
      </button>
    </div>
  );
};

export default Login;