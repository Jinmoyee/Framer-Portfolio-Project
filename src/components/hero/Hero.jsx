import "./hero.scss";
import scroll from "../../assets/icons/scroll.png";
import hero from "../../assets/icons/Hero.jpeg";
import { motion } from "framer-motion";

const textVariant = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollBtn: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
    },
  },
};
export default function Hero() {
  return (
    <div className="hero">
      <motion.div className="main-container">
        <motion.div variants={textVariant} initial="initial" animate="animate">
          <motion.h2 variants={textVariant}>
            <span className="">Hello, I'm</span>
            <span className="me">Jinmoyee Thakuria</span>
          </motion.h2>
          <motion.h1 variants={textVariant}>
            Full-Stack Web
            <span> Developer</span>
          </motion.h1>
          <motion.div className="details" variants={textVariant}>
            <motion.div variants={textVariant}>
              <a href="#Projects">
                <motion.button className="project-btn" variants={textVariant}>
                  See my Latest Projects
                </motion.button>
              </a>
              <a href="#Contact">
                <motion.button className="contact-btn" variants={textVariant}>
                  Contact me
                </motion.button>
              </a>
            </motion.div>
            <motion.img
              src={scroll}
              alt="scroll-png"
              animate="scrollBtn"
              variants={textVariant}
            />
          </motion.div>
        </motion.div>

        <div>
          <div className="my-photo">
            <div>
              <img src={hero} alt="Portfolio-Image" />
            </div>
          </div>
          <motion.div
            className="bg-text"
            initial="initial"
            animate="animate"
            variants={sliderVariant}
          >
            Coder and Full-Stack Developer
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
