/**
 *
 * Nav bar entry point
 */
import { Link } from "react-router-dom";
import Facebook from "lucide-react/dist/esm/icons/facebook";
import Github from "lucide-react/dist/esm/icons/github";
import Twitter from "lucide-react/dist/esm/icons/twitter";
import Linkedin from "lucide-react/dist/esm/icons/linkedin";

const Navbar = () => {
  /** Nav links items map */
  const items = [
    { icon: <Facebook strokeWidth={1.5} size={20} />, title: "Facebook" },
    { icon: <Github strokeWidth={1.5} size={20}/>, title: "Github" },
    { icon: <Twitter strokeWidth={1.5} size={20} />, title: "Twitter" },
    { icon: <Linkedin strokeWidth={1.5} size={20} />, title: "Linkedin" },
  ];

  return (
    <nav className="relative h-20 flex justify-center p-4">
      {/**--------------- Middle container ---------------- */}
      <div className="md:w-7xl flex justify-between items-center px-5 nav-text">
        {/** logo */}
        <div className="flex gap-2 items-center">
          <span className="logo-bg text-secondary px-3 rounded-full">OSA</span>
          <h1 className="lowercase md:text-2xl font-bold">
            oluwashola <span className="text-secondary font-thin">Agbebi.</span>
          </h1>
        </div>

        {/** links */}
        <section className="flex gap-4 items-center md:static absolute  left-1/2 -translate-x-1/2 top-full">
          {items.map((item, idx) => (
            <Link
              to={item.link}
              title={item.title}
              key={idx}
              className="hover-nav-link transition"
            >
              {item.icon}
            </Link>
          ))}
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
