import { useState } from "react";

import { IoServerOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { VscTools } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import "./animatedBar.scss";

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
    <div className="animateBar-container">
      <div className="skill-boxes">
        <div className="box">
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
            <h5>FRONTEND</h5>
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
            <h5>BACKEND</h5>
          </div>
        </div>
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
            <h5>TOOLS</h5>
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
            <h5>SOFT SKILLS</h5>
          </div>
        </div>
      </div>
      <div className="skill-lists">
        <div className="skill-header">
          {select.frontend
            ? "FRONTEND"
            : select.backend
            ? "BACKEND"
            : select.tools
            ? "TOOLS"
            : "SOFT SKILLS"}
        </div>
        <div className="skill skilllist-scroll">
          {select.frontend ? (
            <div>
              {frontendSkills.map((skill, index) => (
                <div key={index} className="skill-main">
                  <h2>{skill}</h2>
                  <div className="skill-bar-container">
                    <div className="skill-bar">
                      <div className="bar"></div>
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
                      <div className="bar"></div>
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
                      <div className="bar"></div>
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
                      <div className="bar"></div>
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
        </div>
      </div>
    </div>
  );
}
