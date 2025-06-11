/**
 * About page 
 * serving my certificate, skills and work experience
 */
import { useState } from "react";

const About = () => {
  /**
   * Skill set array list
   */
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Tailwind CSS",
    "MongoDB",
    "Express",
    "Git",
    "REST APIs",
    "Python",
  ];

  /**
   * my credentials array list
   */
  const credentials = [
    "ALX - Certified Degree in Software Engineering.",
    "Willytech School - Certified in Graphics Design.",
  ];

  /**
   *  my experience array list
   */
  const experience = [
    "2+ years in web development.",
    "10+ years in graphics design."
  ]

  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="page">
      {/** ----- middle div ----------------------- */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* -----------------Left: Profile Image-------------------- */}
        <div className="relative flex justify-center items-center">
          {/* Spinning Circle */}
          <div className="absolute rounded-full border-4 border-transparent animate-spin-slow custom-bg w-58 h-52 md:w-96 md:h-96 z-0"></div>

          {/* Profile Image */}
          <img
            src="/src/assets/my-pic.jpg"
            alt="Profile"
            className="h-52 md:w-64 md:h-64 object-cover rounded-full shadow-lg shadow-cyan-500/20 border-2 border-cyan-500 z-10"
          />
        </div>

        {/* -------------- Right: Bio ------------------- */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 mt-2 md:mt-0 text-main">
            About Me
          </h2>
          <p className="text-xs sm:text-lg leading-relaxed text-cool">
            I'm a passionate{" "}
            <span className="text-secondary font-semibold">
              Full Stack Web Developer
            </span>{" "} and <span className="text-secondary font-semibold">
              Graphics Designer
            </span> 
            dedicated to building modern, responsive, and user-friendly web
            applications. I specialize in React, Node.js, and Tailwind CSS, and
            I love turning ideas into real-world solutions.
          </p>

          {/* ----- Tabs for Skills and Credentials ----- */}
          <div className="mt-6 max-w-md">
            <nav className="flex space-x-4 border-b border-gray-600 mb-6">
              {/** ----- skills ------------ */}
              <button
                onClick={() => setActiveTab("skills")}
                className={`pb-2 font-semibold cursor-pointer hover-text-main ${
                  activeTab === "skills"
                    ? "border-b-4 border-cyan-400 text-main"
                    : "text-cool"
                }`}
              >
                Skills
              </button>
              {/** ------- credentials ---------------- */}
              <button
                onClick={() => setActiveTab("credentials")}
                className={`pb-2 font-semibold cursor-pointer hover-text-main ${
                  activeTab === "credentials"
                    ? "border-b-4 border-cyan-400 text-main"
                    : "text-cool"
                }`}
              >
                Credentials
              </button>
              {/** ------- experience ----------- */}
               <button
                onClick={() => setActiveTab("experience")}
                className={`pb-2 font-semibold cursor-pointer hover-text-main ${
                  activeTab === "experience"
                    ? "border-b-4 border-cyan-400 text-main"
                    : "text-cool"
                }`}
              >
                Experience
              </button>
            </nav>

            {/* Content */}
            {activeTab === "skills" && (
              <ul className="flex flex-wrap gap-3 text-sm text-cool">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="bg-gray-800 px-3 py-1 rounded-full border border-cyan-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            )}

            {activeTab === "credentials" && (
              <ul className="list-disc list-inside text-cool">
                {credentials.map((cred) => (
                  <li key={cred} className="mb-1">
                    {cred}
                  </li>
                ))}
              </ul>
            )}
             {activeTab === "experience" && (
              <ul className="list-disc list-inside text-cool">
                {experience.map((exp) => (
                  <li key={exp} className="mb-1">
                    {exp}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
