import { motion } from "framer-motion";
import "./links.scss";

const varients = {
  open: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
  close: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  close: {
    y: 50,
    opacity: 0,
  },
};

export default function links() {
  const items = ["Homepage", "Skills", "Projects", "Contact"];

  return (
    <motion.div className="link-container" variants={varients}>
      {items.map((item, index) => (
        <motion.a
          href={"#" + item}
          key={index}
          className="links"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}
