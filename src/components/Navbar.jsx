import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import Modal from "../components/Modal.jsx";
import Attendance from "../pages/Attendance.jsx";
import TimerModal from "../components/TimerModal";
import { UserCheck, Timer, LogOut } from "lucide-react"; 
import "../Styles/Navbar.scss";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const [showTimerModal, setShowTimerModal] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Welcome to CRM Team</h1>

        {user ? (
          <div className="navbar-buttons">
            <button
              onClick={() => setShowAttendanceModal(true)}
              className="navbar-btn attendance-btn"
            >
              <UserCheck className="icon" />
              Attendance
            </button>

            <button
              onClick={() => setShowTimerModal(true)}
              className="navbar-btn timer-btn"
            >
              <Timer className="icon" />
              Timer
            </button>

            <button
              onClick={logout}
              className="navbar-btn logout-btn"
            >
              <LogOut className="icon" />
              Logout
            </button>
          </div>
        ) : (
          <span className="not-logged-in">You are not Sign-in</span>
        )}
      </div>

      {/* Attendance Modal */}
      <Modal show={showAttendanceModal} onClose={() => setShowAttendanceModal(false)}>
        <Attendance />
      </Modal>

      {/* Timer Modal */}
      <TimerModal isOpen={showTimerModal} onClose={() => setShowTimerModal(false)} />
    </nav>
  );
};

export default Navbar;

