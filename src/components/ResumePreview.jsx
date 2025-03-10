
import React from "react";

// Component to display the resume preview
// This component receives formData as props and displays it in a structured format
// It uses Tailwind CSS for styling
// The component is responsive and adjusts its layout based on the screen size
  

const ResumePreview = ({ formData }) => {
    return (
      <div className="w-full md:w-1/2 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Resume Preview</h2>
        <div className="border p-4">
          <h1 className="text-2xl font-bold">{formData.name || "Your Name"}</h1>
          <p className="text-gray-600">{formData.email || "your.email@example.com"}</p>
          <p className="text-gray-600">{formData.phone || "(123) 456-7890"}</p>
          <hr className="my-2" />
          <p><strong>Experience:</strong> {formData.experience || "Your work experience"}</p>
          <p><strong>Education:</strong> {formData.education || "Your education details"}</p>
          <p><strong>Skills:</strong> {formData.skills || "Your skills list"}</p>
        </div>
      </div>
    );
};
  
export default ResumePreview;
  