/**
 * main entry point of the application
 */
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Work from "./pages/work";
import Contact from "./pages/contact";

import Navbar from "./components/navbar";
import Navigator from "./components/navigator";

import Notify from "./components/Notify"; // custom notification
import MovingEffect from "./components/MovingEffect";

import useThemeStore from "./store/theme.store";
import { useEffect } from "react";

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
          <Navigator />
        </div>
        <Notify />
      </div>
    </div>
  );
};

export default App;
