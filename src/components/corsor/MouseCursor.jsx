import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./mouseCursor.scss";

export default function MouseCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  console.log(mousePosition);
  return (
    <motion.div
      className="cursor"
      animate={{ x: mousePosition.x + 10, y: mousePosition.y + 10 }}
    ></motion.div>
  );
}
