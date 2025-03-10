import React from "react";
import "../styles/ResumeForm.css";

const ResumeForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="resume-form-container">
      <h2 className="resume-form-title">Enter Your Details</h2>
      <form className="resume-form">
        {["Name", "Email", "Phone", "Experience", "Education", "Skills"].map((field) => (
          <div key={field} className="form-field">
            <label className="form-label">{field}</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="form-input"
              placeholder={`Enter your ${field}`}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default ResumeForm;
