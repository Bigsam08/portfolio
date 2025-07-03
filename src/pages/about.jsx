/**
 * About page
 * serving my certificate, skills and work experience
 */
import { useState } from "react";
import { motion as Motion } from "framer-motion";

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
    "10+ years in graphics design.",
  ];

  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="page">
      {/** ----- middle div ----------------------- */}
      <Motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center mt-13 mb-7 md:mt-0 md:mb-0"
      >
        {/* -----------------Left: Profile Image-------------------- */}
        <Motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: false }}
          className="relative flex justify-center items-center p-6 mt-9 md:mt-0"
        >
          <div className="relative w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Spinner Frame */}
            <div className="absolute inset-0 flex justify-center items-center z-0">
              <div className="animate-spin-slow w-full h-full border-4 custom-bg border-transparent rounded-full"></div>
            </div>

            {/* Profile Image */}
            <div className="absolute hd:inset-10 inset-4 z-10 rounded-full overflow-hidden shadow-xl border-4 border-color">
              <img
                src="images/my-pic.webp"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Motion.div>

        {/* -------------- Right: Bio ------------------- */}
        <Motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: false }}
          className="py-5"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 mt-2 md:mt-0 text-main">
            About Me
          </h2>
          <p className="text-xs sm:text-lg leading-relaxed text-cool">
            I'm a passionate{" "}
            <span className="text-secondary font-semibold">
              Full Stack Web Developer
            </span>{" "}
            and{" "}
            <span className="text-secondary font-semibold">
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
                    ? "border-b-4 border-color text-main"
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
                    ? "border-b-4 border-color text-main"
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
                    ? "border-b-4 border-color text-main"
                    : "text-cool"
                }`}
              >
                Experience
              </button>
            </nav>

            {/* Content */}
            <Motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {activeTab === "skills" && (
                <ul className="flex flex-wrap gap-3 text-sm text-cool">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="bg-skills px-3 py-1 rounded-full border border-color"
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
            </Motion.div>
          </div>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default About;
