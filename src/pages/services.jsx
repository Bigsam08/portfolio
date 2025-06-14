import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Code, Brush, Smartphone, Server, ArrowLeft, ArrowRight } from "lucide-react";
import { motion as Motion } from "framer-motion";

const servicesList = [
  {
    title: "Frontend Development",
    description: "Modern, fast, and responsive interfaces using React, Tailwind, and more.",
    icon: <Code className="w-8 h-8 text-icon-color" />,
  },
  {
    title: "Backend Development",
    description: "Scalable backend systems using Node.js, Express, MongoDB, etc.",
    icon: <Server className="w-8 h-8 text-icon-color" />,
  },
  {
    title: "UI/UX & Graphics Design",
    description: "High-quality visuals, branding, and smooth user experiences.",
    icon: <Brush className="w-8 h-8 text-icon-color" />,
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform apps built with React Native and clean UI design.",
    icon: <Smartphone className="w-8 h-8 text-icon-color" />,
  },
];

const Services = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="page">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-[30%_70%] gap-5 items-start">
        {/* Left: Text */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 text-main mb-6 md:mb-0"
        >
          <h1 className="text-2xl md:text-4xl font-bold">My Services</h1>
          <p className="text-sm sm:text-lg text-cool">
            Here are some of the services I offer — patronize me for top-quality work.
          </p>
        </Motion.div>

        {/* Right: Carousel */}
        <Motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full"
        >
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
            className="!pb-16"
          >
            {servicesList.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="group bg-card border border-cyan-700/30 rounded-xl p-6 h-full transition hover:shadow-xl hover:scale-[1.02] duration-300">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary group-hover:text-cyan-400">
                    {service.title}
                  </h3>
                  <p className="text-sm text-cool">{service.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-4 z-30">
            <button
              ref={prevRef}
              className="bg-white/10 border border-color p-2 rounded-full hover:bg-white/20 transition"
            >
              <ArrowLeft className="text-secondary size-4" />
            </button>
            <button
              ref={nextRef}
              className="bg-white/10 border border-color p-2 rounded-full hover:bg-white/20 transition"
            >
              <ArrowRight className="text-secondary size-4" />
            </button>
          </div>
        </Motion.div>
      </div>
    </div>
  );
};

export default Services;
