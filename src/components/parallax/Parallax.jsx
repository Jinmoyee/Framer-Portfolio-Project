import React from "react";
import "./parallax.scss";
export default function Parallax({ type }) {
  return (
    <div
      style={{
        background:
          type === "skills"
            ? "linear-gradient(180deg,#265f4a , #023020 )"
            : "linear-gradient(180deg,#023020, #265f4a )",
      }}
      className="parallax-container"
    >
      <h1>{type === "skills" ? "My Skills" : "My Projects"}</h1>
      <div className="mountains-image"></div>
      <div className={type === "skills" ? "sun" : "planets"}></div>
      <div className="stars-img"></div>
    </div>
  );
}
