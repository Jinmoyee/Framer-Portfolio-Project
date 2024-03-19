import { motion } from "framer-motion";
import "./skills.scss";
import AnimatedBar from "./animatedBar/AnimatedBar";
export default function Skills() {
  return (
    <div className="skills">
      <div className="skills-container">
        <motion.h2
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1.5,
            },
          }}
          initial={{
            opacity: 0,
          }}
          className="uppercase text-6xl font-semibold text-white text-center mt-[2%]"
        >
          My <span className="font-thin text-6xl text-orange-500">Skills</span>
        </motion.h2>
        <AnimatedBar />
      </div>
    </div>
  );
}
