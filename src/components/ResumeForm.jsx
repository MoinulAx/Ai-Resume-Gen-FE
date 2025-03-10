import React from "react";

const ResumeForm = ({ formData, setFormData }) => {
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    return (
      <div className="w-full md:w-1/2 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Enter Your Details</h2>
        <form className="space-y-3">
          {["name", "email", "phone", "experience", "education", "skills"].map((field) => (
            <div key={field}>
              <label className="block text-gray-600 capitalize">{field}</label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder={`Enter your ${field}`}
              />
            </div>
          ))}
        </form>
      </div>
    );
};
  
export default ResumeForm;