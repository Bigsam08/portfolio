/**
 *
 * Nav bar entry point
 */
import { Link } from "react-router-dom";
import { easeIn, motion as Motion } from "framer-motion";
import Youtube from "lucide-react/dist/esm/icons/youtube";
import Github from "lucide-react/dist/esm/icons/github";
import Twitter from "lucide-react/dist/esm/icons/twitter";
import Linkedin from "lucide-react/dist/esm/icons/linkedin";

import Moon from "lucide-react/dist/esm/icons/moon";
import Sun from "lucide-react/dist/esm/icons/sun";

import useThemeStore from "../store/theme.store";

const Navbar = () => {
  // theme switcher
  const { switchTheme, theme } = useThemeStore();

  const toggle = () => {
    switchTheme();
  };

  /** Nav links items map */
  const items = [
    {
      icon: <Github strokeWidth={1.5} size={20} />,
      title: "Github",
      link: "https://www.github.com/bigsam08",
    },
    {
      icon: <Twitter strokeWidth={1.5} size={20} />,
      title: "Twitter",
      link: "https://www.x.com/olusamt",
    },
    {
      icon: <Linkedin strokeWidth={1.5} size={20} />,
      title: "Linkedin",
      link: "https://www.linkedin.com/in/oluwasholaagbebi",
    },
    {
      icon: <Youtube strokeWidth={1.5} size={20} />,
      title: "Youtube",
      link: "https://www.youtube.com/@mastersamuel6147",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-20 flex justify-center p-4 z-50  backdrop-blur-sm">
      {/* Middle container */}
      <div className=" md:w-7xl flex justify-between items-center px-5 nav-text w-full max-w-7xl">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <span className="logo-bg text-secondary px-3 rounded-full">OSA</span>
          <h1 className="lowercase md:text-2xl font-bold">
            oluwashola <span className="text-secondary font-thin">Agbebi.</span>
          </h1>
        </div>

        {/** theme switch */}
        <Motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { duration: 1, ease: easeIn },
          }}
          onClick={toggle}
          className="cursor-pointer transition -transform duration-500 hover:rotate-[360deg]"
          title="change theme"
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </Motion.button>

        {/* Social Links with Animation */}
        <Motion.section
          className="flex gap-4 mt-2 items-center md:static absolute left-1/2 -translate-x-1/2 top-full"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {items.map((item, idx) => (
            <Motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.6 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.4, ease: "easeOut" },
                },
              }}
            >
              <Link
                to={item.link}
                title={item.title}
                className="hover-nav-link transition "
              >
                {item.icon}
              </Link>
            </Motion.div>
          ))}
        </Motion.section>
      </div>
    </nav>
  );
};

export default Navbar;
