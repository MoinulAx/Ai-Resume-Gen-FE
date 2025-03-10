import React from "react";
import "../styles/ResumePreview.css";

// Component to display the resume preview
const ResumePreview = ({ formData }) => {
  return (
    <div className="resume-preview-container">
      <h2 className="resume-preview-title">Resume Preview</h2>
      <div className="resume-content">
        <h1 className="resume-name">{formData.Name || "Your Name"}</h1>
        <p className="resume-contact">{formData.Email || "your.email@example.com"}</p>
        <p className="resume-contact">{formData.Phone || "(123) 456-7890"}</p>
        <hr className="resume-divider" />
        <p><strong>Experience:</strong> {formData.Experience || "Your work experience"}</p>
        <p><strong>Education:</strong> {formData.Education || "Your education details"}</p>
        <p><strong>Skills:</strong> {formData.Skills || "Your skills list"}</p>
      </div>
    </div>
  );
};

export default ResumePreview;
