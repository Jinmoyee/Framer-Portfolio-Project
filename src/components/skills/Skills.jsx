import React from "react";
import "./skills.scss";
import AnimatedBar from "./animatedBar/AnimatedBar";
export default function Skills() {
  return (
    <div className="skills">
      <div className="skills-container">
        <h2 className="uppercase text-6xl font-semibold text-white text-center mt-[2%]">
          My <span className="font-thin text-6xl text-orange-500">Skills</span>
        </h2>
        <AnimatedBar />
      </div>
    </div>
  );
}
