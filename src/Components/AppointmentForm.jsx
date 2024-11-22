import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    doctor: "",
  });

  const doctors = [
    { name: "Dr. John Smith", specialization: "Cardiologist" },
    { name: "Dr. Emily Brown", specialization: "Neurologist" },
    { name: "Dr. Michael Lee", specialization: "Orthopedic" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.date || !formData.time || !formData.doctor) {
      toast.error("Please fill out all fields!");
      return;
    }

    toast.success("Appointment booked successfully!");
    setFormData({
      date: "",
      time: "",
      doctor: "",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-blue-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Doctor</label>
          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select a Doctor</option>
            {doctors.map((doc, index) => (
              <option key={index} value={doc.name}>
                {doc.name} - {doc.specialization}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
