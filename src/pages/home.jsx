/**
 * Home route/ landing page
 */
import { motion as Motion } from "framer-motion";

const home = () => {
  return (
    <div className="relative min-h-[calc(100vh-10rem)] flex justify-center p-5 text-secondary">
      {/* Center container */}
      <section className="grid md:grid-cols-[60%_1fr] w-7xl p-4">
        {/* Hero text div */}
        <Motion.div
          className="flex flex-col justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <Motion.h1
            className="text-4xl sm:text-7xl font-bold"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
            }}
          >
            Hi, I'm <span className="text-main">Bigsam</span>
            <br />I build <span className="text-main">modern web apps</span>
          </Motion.h1>

          <Motion.p
            className="mt-4 text-lg text-cool max-w-xl animate-pulse"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            Full stack developer crafting responsive, user-first digital
            products using
            <span className="text-secondary font-medium"> React</span>,
            <span className="text-secondary font-medium"> Node.js</span>, and
            <span className="text-secondary font-medium"> Tailwind CSS</span>.
          </Motion.p>
        </Motion.div>

        {/* Image section */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center items-center"
        >
          {/* Spinning Circle */}
          <div className="absolute rounded-full border-4 border-transparent animate-spin-slow custom-bg w-72 h-72 lg:w-96 lg:h-96 z-0"></div>

          <Motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-cyan-500"
          >
            {/* Image */}
            <img
              src="/images/my-pic.jpg"
              alt="Bigsam"
              className="object-cover w-full h-full rounded-full relative z-10"
            />
          </Motion.div>
        </Motion.div>
      </section>
    </div>
  );
};

export default home;
