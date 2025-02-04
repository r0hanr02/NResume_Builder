import { FaUserEdit, FaFileAlt, FaDownload, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaUserEdit className="text-blue-500 text-4xl" />,
    title: "Sign Up / Log In",
    description: "Create an account or log in to access your saved resumes.",
  },
  {
    id: 2,
    icon: <FaFileAlt className="text-green-500 text-4xl" />,
    title: "Enter Your Details",
    description: "Fill out your personal info, work experience, and skills.",
  },
  {
    id: 3,
    icon: <FaCheckCircle className="text-purple-500 text-4xl" />,
    title: "Choose a Template",
    description: "Select a resume template that suits your style.",
  },
  {
    id: 4,
    icon: <FaDownload className="text-red-500 text-4xl" />,
    title: "Download as PDF",
    description: "Save your resume and download it in a professional format.",
  },
];

const HowItWorks = () => {
  return (
    <div className="py-14 ">
      <div className=" mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">How It Works</h2>
        <p className="text-gray-400 text-lg mb-10">
          Follow these simple steps to create your professional resume in minutes.
        </p>

        <div className="flex items-center justify-center flex-wrap gap-5">
          {steps.map((step) => (
            <div
              key={step.id}
              className="w-80 flex items-center p-6 bg-white rounded-lg  hover:scale-105 transition duration-300 "
            >
              <div className="mr-6">{step.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
