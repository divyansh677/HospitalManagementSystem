import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleChangePassword = () => {
    navigate("/change-password");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 text-white">
      {/* Container */}
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg text-gray-800">
        {/* Header Section */}
        <div className="grid grid-cols-3 items-center gap-4 pb-6 border-b-2">
          {/* Welcome Section */}
          <div>
            <h1 className="text-3xl font-bold text-blue-600">
              Welcome to Athrav Hospital
            </h1>
            <h2 className="text-2xl text-gray-700 mt-2">[User Name]</h2>
          </div>

          {/* Empty Placeholder to center-align profile */}
          <div></div>

          {/* Profile Section */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
            />
            <button
              onClick={handleChangePassword}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Change Password
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Appointment Booking */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Appointment Booking
            </h2>
            <p>Schedule and manage appointments.</p>
            <button
              onClick={() => navigate("/appointment-form")}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Book Now
            </button>
          </div>

          {/* User History */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              User History
            </h2>
            <p>View detailed user history and activities.</p>
            <button
              onClick={() => navigate("/user-history")}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              View History
            </button>
          </div>

          {/* Reports */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Reports
            </h2>
            <p>Access and download reports.</p>
            <button
              onClick={() => navigate("/reports")}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              View Reports
            </button>
          </div>

          {/* Medication Details */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              Medication Details
            </h2>
            <p>View prescribed medications and updates.</p>
            <button
              onClick={() => navigate("/medication-details")}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              View Medications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
