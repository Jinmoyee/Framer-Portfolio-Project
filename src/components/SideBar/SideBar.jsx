import ToggleButton from "./buttons/ToggleButton";
import Links from "./links/Links";
import { useState } from "react";
import { motion } from "framer-motion";
import "./sideBar.scss";

const varients = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "linear",
      stiffness: 20,
    },
  },
  close: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "linear",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="side-bar-container"
      animate={isOpen ? "open" : "close"}
    >
      <motion.div className="side-bar-links" variants={varients}>
        <Links />
      </motion.div>
      <ToggleButton setIsOpen={setIsOpen} />
    </motion.div>
  );
}
