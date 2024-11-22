import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import PatientDetails from "./Components/PatientDetails";
import Dashboard from "./Components/Dashboard";
import AppointmentForm from "./Components/AppointmentForm";
import UserHistory from "./Components/UserHistory"; // New component
import Reports from "./Components/Reports"; // New component
import MedicationDetails from "./Components/MedicationDetails"; // New component
import ChangePassword from "./Components/ChangePassword"; // New component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("user") !== null);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("user", JSON.stringify({ email: "user@example.com" }));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Redirect root to dashboard if logged in, otherwise login */}
          <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />

          {/* Login Route */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          {/* Signup Route */}
          <Route path="/signup" element={<Signup />} />

          {/* Patient Details Route */}
          <Route
            path="/patient-details"
            element={isLoggedIn ? <PatientDetails /> : <Navigate to="/login" />}
          />

          {/* Dashboard Route */}
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
          />

          {/* Appointment Form Route */}
          <Route
            path="/appointment-form"
            element={isLoggedIn ? <AppointmentForm /> : <Navigate to="/login" />}
          />

          {/* User History Route */}
          <Route
            path="/user-history"
            element={isLoggedIn ? <UserHistory /> : <Navigate to="/login" />}
          />

          {/* Reports Route */}
          <Route
            path="/reports"
            element={isLoggedIn ? <Reports /> : <Navigate to="/login" />}
          />

          {/* Medication Details Route */}
          <Route
            path="/medication-details"
            element={isLoggedIn ? <MedicationDetails /> : <Navigate to="/login" />}
          />

          {/* Change Password Route */}
          <Route
            path="/change-password"
            element={isLoggedIn ? <ChangePassword /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
