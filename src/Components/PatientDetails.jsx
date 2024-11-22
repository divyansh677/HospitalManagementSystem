import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PatientDetails() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    occupation: "",
    emergencyNumber: "",
    emergencyContact: "",
  });

  const [medicalInfo, setMedicalInfo] = useState({
    primaryPhysician: "",
    insurancePolicyNumber: "",
    allergies: "",
    currentMedication: "",
    familyMedicalHistory: "",
    pastMedicalHistory: "",
  });

  const [identificationInfo, setIdentificationInfo] = useState({
    identificationType: "",
    identificationNumber: "",
    image: null,
  });

  const [consent, setConsent] = useState(false);
  const [extraConsent1, setExtraConsent1] = useState(false);
  const [extraConsent2, setExtraConsent2] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e, stateUpdater) => {
    const { name, value } = e.target;
    stateUpdater((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setIdentificationInfo((prev) => ({
      ...prev,
      image: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !personalInfo.name ||
      !personalInfo.email ||
      !personalInfo.phone ||
      !personalInfo.dob ||
      !consent ||
      !extraConsent1 ||
      !extraConsent2
    ) {
      toast.error("Please fill in all required fields and agree to all consents!");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(personalInfo.email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    console.log("Patient Info Submitted", {
      personalInfo,
      medicalInfo,
      identificationInfo,
    });

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 flex justify-center items-center px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-50 backdrop-blur-lg border-2 border-white rounded-lg p-8 w-full max-w-4xl relative mt-10 md:mt-32"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600 border-b-2 border-blue-500 pb-2 mb-6">
          Patient Details
        </h2>

        {/* Personal Info Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Personal Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["name", "email", "phone", "dob", "occupation"].map((field) => (
              <input
                key={field}
                type={field === "dob" ? "date" : "text"}
                name={field}
                value={personalInfo[field]}
                onChange={(e) => handleInputChange(e, setPersonalInfo)}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
            <select
              name="gender"
              value={personalInfo.gender}
              onChange={(e) => handleInputChange(e, setPersonalInfo)}
              className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              name="address"
              value={personalInfo.address}
              onChange={(e) => handleInputChange(e, setPersonalInfo)}
              placeholder="Address"
              className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Medical Info Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Medical Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["primaryPhysician", "insurancePolicyNumber", "allergies", "currentMedication", "familyMedicalHistory", "pastMedicalHistory"].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                value={medicalInfo[field]}
                onChange={(e) => handleInputChange(e, setMedicalInfo)}
                placeholder={field.replace(/([A-Z])/g, " $1")}
                className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>
        </div>

        {/* Identification Info Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Identification Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              name="identificationType"
              value={identificationInfo.identificationType}
              onChange={(e) => handleInputChange(e, setIdentificationInfo)}
              className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Identification Type</option>
              <option value="Aadhar">Aadhar</option>
              <option value="Passport">Passport</option>
              <option value="Driving License">Driving License</option>
            </select>
            <input
              type="text"
              name="identificationNumber"
              value={identificationInfo.identificationNumber}
              onChange={(e) => handleInputChange(e, setIdentificationInfo)}
              placeholder="Identification Number"
              className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="file"
              onChange={handleImageUpload}
              className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Consent Section */}
        <div className="mb-8 m-5">
          {[
            { label: "I consent to share my details", state: consent, setState: setConsent },
            { label: "I agree to hospital policies", state: extraConsent1, setState: setExtraConsent1 },
            { label: "I accept data privacy terms", state: extraConsent2, setState: setExtraConsent2 },
          ].map(({ label, state, setState }, idx) => (
            <label key={idx} className="inline-flex items-center mb-4 block">
              <input
                type="checkbox"
                checked={state}
                onChange={(e) => setState(e.target.checked)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">{label}</span>
            </label>
          ))}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default PatientDetails;
