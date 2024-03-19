import { useState } from "react";
import { motion } from "framer-motion";
import { IoServerOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { VscTools } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import "./animatedBar.scss";

const varients = {
  initial: {
    // x: -500,
    x: 0,
    // y: 100,
    y: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export default function AnimatedBar() {
  const frontendSkills = [
    "HTML",
    "CSS",
    "SASS",
    "JS",
    "REACT",
    "TAILWIND CSS",
    "BOOTSTRAP",
    "FRAMER MOTION",
  ];
  const backendSkills = ["NODE JS", "EXPRESS JS", "MONGODB", "FIREBASE"];
  const tools = ["VS CODE", "POSTMAN", "GITHUB", "GIT"];
  const softSkills = [
    "Teamwork",
    "Communication",
    "Problem Solving",
    "Critical Thinking",
    "Leadership",
  ];

  let frontendProgress = [95, 90, 85, 75, 80, 90, 60, 40];
  let backendProgress = [80, 85, 80, 90];
  let toolsProgress = [95, 95, 90, 75];
  let softSkillsProgress = [99, 90, 80, 85, 75];

  const [select, setSelect] = useState({
    frontend: true,
    backend: false,
    tools: false,
    softSkills: false,
  });

  return (
    <motion.div
      className="animateBar-container"
      variants={varients}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="skill-boxes" variants={varients}>
        <motion.div className="box" variants={varients}>
          <div
            className="box-content"
            onClick={() => {
              setSelect({
                frontend: true,
                backend: false,
                tools: false,
                softSkills: false,
              });
            }}
          >
            <div className="icon-item">
              <CgWebsite size={40} color="white" />
            </div>
            <motion.h5
              initial={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.3,
              }}
              whileTap={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
            >
              FRONTEND
            </motion.h5>
          </div>
          <div
            className="box-content"
            onClick={() => {
              setSelect({
                frontend: false,
                backend: true,
                tools: false,
                softSkills: false,
              });
            }}
          >
            <div className="icon-item">
              <IoServerOutline size={40} color="white" className="" />
            </div>
            <motion.h5
              initial={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.3,
              }}
              whileTap={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
            >
              BACKEND
            </motion.h5>
          </div>
        </motion.div>
        <div className="box">
          <div
            className="box-content"
            onClick={() => {
              setSelect({
                frontend: false,
                backend: false,
                tools: true,
                softSkills: false,
              });
            }}
          >
            <div className="icon-item">
              <VscTools size={40} color="white" />
            </div>
            <motion.h5
              initial={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.3,
              }}
              whileTap={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
            >
              TOOLS
            </motion.h5>
          </div>
          <div
            className="box-content"
            onClick={() => {
              setSelect({
                frontend: false,
                backend: false,
                tools: false,
                softSkills: true,
              });
            }}
          >
            <div className="icon-item">
              <CgProfile size={40} color="white" />
            </div>
            <motion.h5
              initial={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.3,
              }}
              whileTap={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
            >
              SOFT SKILLS
            </motion.h5>
          </div>
        </div>
      </motion.div>
      <motion.div className="skill-lists" variants={varients}>
        <div className="skill-header">
          {select.frontend
            ? "FRONTEND"
            : select.backend
            ? "BACKEND"
            : select.tools
            ? "TOOLS"
            : "SOFT SKILLS"}
        </div>
        <motion.div className="skill skilllist-scroll" variants={varients}>
          {select.frontend ? (
            <div>
              {frontendSkills.map((skill, index) => (
                <div key={index} className="skill-main">
                  <h2>{skill}</h2>
                  <div className="skill-bar-container">
                    <div className="skill-bar">
                      <motion.div
                        whileInView={{
                          width: `${frontendProgress[index]}%`,
                        }}
                        transition={{
                          duration: 2,
                        }}
                        className="bar"
                      ></motion.div>
                    </div>
                    <div className="progress-bar">
                      <p>{frontendProgress[index]}</p>
                      <p>%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : select.backend ? (
            <div>
              {backendSkills.map((skill, index) => (
                <div key={index} className="skill-main">
                  <h2>{skill}</h2>
                  <div className="skill-bar-container">
                    <div className="skill-bar">
                      <motion.div
                        animate={{
                          width: `${backendProgress[index]}%`,
                        }}
                        transition={{
                          duration: 2,
                        }}
                        className="bar"
                      ></motion.div>
                    </div>
                    <div className="progress-bar">
                      <p>{backendProgress[index]}</p>
                      <p>%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : select.tools ? (
            <div>
              {tools.map((skill, index) => (
                <div key={index} className="skill-main">
                  <h2>{skill}</h2>
                  <div className="skill-bar-container">
                    <div className="skill-bar">
                      <motion.div
                        animate={{
                          width: `${toolsProgress[index]}%`,
                        }}
                        transition={{
                          duration: 2,
                        }}
                        className="bar"
                      ></motion.div>
                    </div>
                    <div className="progress-bar">
                      <p>{toolsProgress[index]}</p>
                      <p>%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {softSkills.map((skill, index) => (
                <div key={index} className="skill-main">
                  <h2>{skill}</h2>
                  <div className="skill-bar-container">
                    <div className="skill-bar">
                      <motion.div
                        className="bar"
                        animate={{
                          width: `${softSkillsProgress[index]}%`,
                        }}
                        transition={{
                          duration: 2,
                        }}
                      ></motion.div>
                    </div>
                    <div className="progress-bar">
                      <p>{softSkillsProgress[index]}</p>
                      <p>%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
