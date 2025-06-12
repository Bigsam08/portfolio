/**
 *
 * Nav bar entry point
 */
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import Facebook from "lucide-react/dist/esm/icons/facebook";
import Github from "lucide-react/dist/esm/icons/github";
import Twitter from "lucide-react/dist/esm/icons/twitter";
import Linkedin from "lucide-react/dist/esm/icons/linkedin";

const Navbar = () => {
  /** Nav links items map */
  const items = [
    { icon: <Facebook strokeWidth={1.5} size={20} />, title: "Facebook", link: "#" },
    { icon: <Github strokeWidth={1.5} size={20} />, title: "Github", link: "#" },
    { icon: <Twitter strokeWidth={1.5} size={20} />, title: "Twitter", link: "#" },
    { icon: <Linkedin strokeWidth={1.5} size={20} />, title: "Linkedin", link: "#" },
  ];

  return (
    <nav className="relative h-20 flex justify-center p-4">
      {/* Middle container */}
      <div className="md:w-7xl flex justify-between items-center px-5 nav-text w-full max-w-7xl">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <span className="logo-bg text-secondary px-3 rounded-full">OSA</span>
          <h1 className="lowercase md:text-2xl font-bold">
            oluwashola <span className="text-secondary font-thin">Agbebi.</span>
          </h1>
        </div>

        {/* Social Links with Animation */}
        <Motion.section
          className="flex gap-4 items-center md:static absolute left-1/2 -translate-x-1/2 top-full"
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
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
              }}
            >
              <Link
                to={item.link}
                title={item.title}
                className="hover-nav-link transition"
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
