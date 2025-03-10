import { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    education: "",
    skills: "",
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Resume Builder</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <ResumeForm formData={formData} setFormData={setFormData} />
        <ResumePreview formData={formData} />
      </div>
    </div>
  );
}

export default App;


