import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";  // Import Toastify
import "react-toastify/dist/ReactToastify.css";  // Import CSS for Toastify
import Image from "../assets/SignupImage/Signup.jpeg"; 

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required!");
      toast.error("All fields are required!");  // Show error notification
    } else {
      setError("");
      console.log("Signed up with:", name, email, password);
      toast.success("Successfully signed up!");  // Show success notification
      setIsSubmitted(true);
      setTimeout(() => {
        navigate("/login"); // Redirect to login after successful signup
      }, 1000);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-300 to-blue-500 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg flex flex-col md:flex-row max-w-4xl w-full bg-blue-50"> {/* Same background color */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Create an Account</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <div className="text-center mt-4">
            <Link to="/login" className="text-sm text-blue-600 hover:underline">
              Already have an account? Log In
            </Link>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 relative">
          <img src={Image} alt="Signup Illustration" className="object-cover w-full h-full rounded-r-lg" />
        </div>
      </div>

      {/* ToastContainer for notifications */}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar newestOnTop />
    </div>
  );
}

export default Signup;
