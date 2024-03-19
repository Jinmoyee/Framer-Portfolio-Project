import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./parallax.scss";
export default function Parallax({ type }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      style={{
        background:
          type === "skills"
            ? "linear-gradient(180deg,#265f4a , #023020 )"
            : "linear-gradient(180deg,#023020, #265f4a )",
      }}
      className="parallax-container"
      ref={ref}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "skills" ? "My Skills" : "My Projects"}
      </motion.h1>
      <motion.div className="mountains-image"></motion.div>
      <motion.div
        style={{ y: yBg }}
        className={type === "skills" ? "sun" : "planets"}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars-img"></motion.div>
    </div>
  );
}
