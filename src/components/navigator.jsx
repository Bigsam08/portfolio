import { NavLink } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import Home from "lucide-react/dist/esm/icons/home";
import User from "lucide-react/dist/esm/icons/user";
import Briefcase from "lucide-react/dist/esm/icons/briefcase";
import Code from "lucide-react/dist/esm/icons/code";
import Contact from "lucide-react/dist/esm/icons/contact";

const navItems = [
  { to: "/", icon: <Home size={20} />, label: "Home", title: "Home" },
  { to: "/about", icon: <User size={20} />, label: "About", title: "About" },
  { to: "/services", icon: <Briefcase size={20} />, label: "Services", title: "Services" },
  { to: "/work", icon: <Code size={20} />, label: "Work", title: "Work" },
  { to: "/contact", icon: <Contact size={20} />, label: "Contact", title: "Contact" },
];

// Animation variants
const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // delay between icons
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const Navigator = () => {
  return (
    <nav className="flex items-center h-12 bg-white/10 rounded-4xl backdrop-blur-lg shadow-md shadow-gray-700">
      <Motion.ul
        className="flex space-x-2 sm:space-x-5 text-secondary px-2"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {navItems.map((lin, index) => (
          <NavLink key={lin.to} to={lin.to}>
            {({ isActive }) => (
              <Motion.li
                variants={itemVariants}
                title={lin.title}
                aria-label={lin.label}
                className={`px-4 py-2 md:py-3 cursor-pointer transition-colors duration-500 ease-in-out hover:text-cyan-500 ${
                  isActive
                    ? `logo-bg text-base ${
                        index === 0
                          ? "rounded-l-full"
                          : index === navItems.length - 1
                          ? "rounded-r-full"
                          : "rounded-lg"
                      }`
                    : ""
                }`}
              >
                {lin.icon}
              </Motion.li>
            )}
          </NavLink>
        ))}
      </Motion.ul>
    </nav>
  );
};

export default Navigator;
