import { motion } from "framer-motion";
import "./toggleBtn.scss";

export default function ToggleButton({ setIsOpen }) {
  return (
    <button
      className="toggle-btn-container"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="motion-bar-div">
        <motion.div
          className="motion-bar"
          variants={{
            open: {
              rotate: 45,
              translateY: 8,
            },
            close: {
              rotate: 0,
            },
          }}
        >
          a
        </motion.div>
        <motion.div
          className="motion-bar"
          variants={{
            open: {
              opacity: 0,
            },
            close: {
              opacity: 1,
            },
          }}
        >
          a
        </motion.div>
        <motion.div
          className="motion-bar"
          variants={{
            open: {
              rotate: -45,
              translateY: -8,
            },
            close: {
              rotate: 0,
            },
          }}
        >
          a
        </motion.div>
      </div>
    </button>
  );
}
