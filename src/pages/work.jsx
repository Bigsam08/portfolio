import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Images
const images = [
  { src: "/src/assets/Screenshot (10).png", title: "Banking app" },
  { src: "/src/assets/Screenshot (11).png", title: "school dashBoard" },
  { src: "/src/assets/Screenshot (5).png", title: "Demo" },
  { src: "/src/assets/Screenshot (9).png", title: "chat app" },
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
      <div className="w-full max-w-6xl mx-auto px-2 flex flex-col md:grid md:grid-cols-[30%_70%] gap-5 items-start">
        {/* Left: Text */}
        <div className="space-y-4 text-main mb-6 md:mb-0">
          <h1 className="text-4xl font-bold">My Work</h1>
          <p className="text-sm sm:text-lg text-cool">
            Here is a list of works I’ve done so far, displayed in a rotating
            grid.
          </p>
        </div>

        {/* Right: Carousel */}
        <div className="relative w-full">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={20}
            className="!pb-16 custom-swiper"
          >
            {chunkedImages.map((group, i) => (
              <SwiperSlide key={i}>
                <div className="grid grid-cols-2 gap-4">
                  {group.map((project, idx) => (
                    <div
                      key={idx}
                      className="relative bg-cyan-500/40 backdrop-blur-3xl rounded-xl cursor-pointer overflow-hidden group"
                    >
                      <img
                        src={project.src}
                        alt={`Work ${i * 4 + idx + 1}`}
                        className="w-full h-40 sm:h-48 object-contain p-3 z-10"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-red-500/30 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                        <span className="text-secondary text-sm sm:text-lg font-semibold text-center px-2">
                          {project.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrows */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-x-6 z-50">
            <button
              ref={prevRef}
              className="hover:bg-white/10 p-2 border border-b-white rounded-full shadow-md hover:scale-9.5 transition cursor-pointer"
            >
              <ArrowLeft className="text-secondary size-4" />
            </button>
            <button
              ref={nextRef}
              className="hover:bg-white/10 p-2 rounded-full border border-t-white shadow-md hover:scale-9.5 transition cursor-pointer"
            >
              <ArrowRight className="text-secondary size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
