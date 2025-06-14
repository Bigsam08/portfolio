import { motion as Motion } from "framer-motion"
import useThemeStore from "../store/theme.store";


const balls = [
  {
    cx: 0,
    cy: 20,
    r: 4,
    fill: "#0ff",
    duration: 25,
    delay: 0,
  },
  {
    cx: 100,
    cy: 40,
    r: 6,
    fill: "#0ff",
    duration: 30,
    delay: 5,
    reverse: true,
  },
  {
    cx: 0,
    cy: 70,
    r: 3,
    fill: "#08f",
    duration: 35,
    delay: 2,
  },
  {
    cx: 100,
    cy: 10,
    r: 5,
    fill: "#0ff",
    duration: 20,
    delay: 8,
    reverse: true,
  },
];

// Helper function to switch color based on theme
const getFillColor = (theme, baseColor) => {
  if (theme === "cream") {
    // Convert neon blues to warm yellows
    return baseColor === "#0ff" ? "#FB923C" : "#451A03";
  }
  return baseColor; // Default blue/neon for dark theme
};

const MovingEffect = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <Motion.svg
      className="absolute inset-0 w-full h-full z-0 pointer-events-none blur-sm"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {balls.map((ball, index) => (
        <Motion.circle
          key={index}
          cx={ball.reverse ? 100 : 0}
          cy={ball.cy}
          r={ball.r}
          fill={getFillColor(theme, ball.fill)}
          animate={{
            cx: ball.reverse ? [100, 0, 100] : [0, 100, 0],
          }}
          transition={{
            duration: ball.duration,
            delay: ball.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </Motion.svg>
  );
};

export default MovingEffect;
