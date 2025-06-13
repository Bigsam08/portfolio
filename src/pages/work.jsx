import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion as Motion } from "framer-motion";

// Images
const images = [
  { src: "/images/Screenshot (10).png", title: "Banking app" },
  { src: "/images/Screenshot (11).png", title: "school dashBoard" },
  { src: "/images/Screenshot (5).png", title: "Demo" },
  { src: "/images/Screenshot (9).png", title: "chat app" },
  { src: "/works/work5.jpg", title: "movie app" },
  { src: "/works/work6.jpg", title: "vibey" },
  { src: "/works/work6.jpg", title: "vibey" },
  { src: "/works/work6.jpg", title: "vibey" },
];

const Work = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null); // hold swiper instance

  // Split images into chunks of 4 for 2x2 grid
  const chunkedImages = [];
  for (let i = 0; i < images.length; i += 4) {
    chunkedImages.push(images.slice(i, i + 4));
  }

  // Assign refs AFTER first render
  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      // Re-init navigation
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="page">
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full max-w-6xl mx-auto px-2 flex flex-col md:grid md:grid-cols-[30%_70%] gap-5 items-start"
      >
        {/* Left: Text */}
        <Motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 text-main mb-6 md:mb-0"
        >
          <h1 className="text-2xl md:text-4xl font-bold">My Work</h1>
          <p className="text-sm sm:text-lg text-cool leading-relaxed">
            Here is a list of works I’ve done so far, displayed in a rotating
            grid.
          </p>
        </Motion.div>

        {/* Right: Carousel */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative w-full"
        >
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ type: "fraction", clickable: true }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={20}
            className="!pb-16"
          >
            {chunkedImages.map((group, i) => (
              <SwiperSlide key={i}>
                <div className="grid grid-cols-2 gap-6">
                  {group.map((project, idx) => (
                    <Motion.div
                      key={idx}
                      className="relative group bg-cyan-500/40 backdrop-blur-3xl rounded-xl cursor-pointer border border-cyan-700/70 overflow-hidden"
                      whileHover="hover"
                      initial="initial"
                      variants={{
                        initial: {},
                        hover: {},
                      }}
                    >
                      {/* Project Image */}
                      <img
                        src={project.src}
                        alt={project.title}
                        className="w-full h-40 sm:h-48 object-contain p-3 z-10"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/40 to-pink-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                      {/* Title sliding in with framer-motion */}
                      <Motion.div
                        variants={{
                          initial: { opacity: 0, y: 30 },
                          hover: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
                      >
                        <span className="text-secondary text-sm sm:text-lg font-semibold text-center px-2">
                          {project.title}
                        </span>
                      </Motion.div>
                    </Motion.div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrows */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center gap-x-6 z-30">
            <button
              ref={prevRef}
              className="hover:bg-white/20 bg-white/10 p-2  rounded-full shadow-md hover:scale-105 transition cursor-pointer"
            >
              <ArrowLeft className="text-secondary size-4" />
            </button>
            <button
              ref={nextRef}
              className="hover:bg-white/20 bg-white/10 p-2 rounded-full shadow-md hover:scale-105 transition cursor-pointer"
            >
              <ArrowRight className="text-secondary size-4" />
            </button>
          </div>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default Work;
