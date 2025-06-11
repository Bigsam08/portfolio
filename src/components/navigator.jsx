import { NavLink } from "react-router-dom";
import Home from "lucide-react/dist/esm/icons/home";
import User from "lucide-react/dist/esm/icons/user";
import Briefcase from "lucide-react/dist/esm/icons/briefcase";
import Code from "lucide-react/dist/esm/icons/code";
import Contact from "lucide-react/dist/esm/icons/contact";

const Navigator = () => {
  const navItems = [
    { to: "/", icon: <Home size={20} />, label: "Home", title: "Home" },
    { to: "/about", icon: <User size={20} />, label: "About", title: "About" },
    { to: "/services", icon: <Briefcase size={20} />, label: "Services", title: "Services" },
    { to: "/work", icon: <Code size={20} />, label: "Work", title:"Work" },
    { to: "/contact", icon: <Contact size={20} />, label: "Contact", title: "Contact" },
  ];
  return (
    <nav className="flex items-center h-12 bg-white/10 rounded-4xl backdrop-blur-lg shadow-md shadow-gray-700">
      <ul className="flex space-x-2 sm:space-x-5 text-secondary">
        {navItems.map((lin, index) => (
          <NavLink key={lin.to} to={lin.to}>
            {({ isActive }) => (
              <li
                title={lin.title}
                aria-label={lin.label}
                className={`px-4 py-2 md:py-3 cursor-pointer transition ${
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
              </li>
            )}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};
export default Navigator;
