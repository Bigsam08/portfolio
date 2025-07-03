import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Navigator from "./components/navigator";
import Notify from "./components/Notify";
import MovingEffect from "./components/MovingEffect";

import useThemeStore from "./store/theme.store";
import { useEffect } from "react";

const Home = React.lazy(() => import("./pages/home"));
const About = React.lazy(() => import("./pages/about"));
const Services = React.lazy(() => import("./pages/services"));
const Work = React.lazy(() => import("./pages/work"));
const Contact = React.lazy(() => import("./pages/contact"));

const App = () => {
  const { setTheme, theme } = useThemeStore();

  useEffect(() => {
    setTheme(theme);
  }, [theme, setTheme]);

  return (
    <div className="relative min-h-screen custom-bg overflow-hidden">
      <MovingEffect />
      <div className="relative z-10">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
          <Navigator />
        </div>
        <Notify />
      </div>
    </div>
  );
};

export default App;
