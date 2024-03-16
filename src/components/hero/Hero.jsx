import React from "react";
import "./hero.scss";
import scroll from "../../assets/icons/scroll.png";
import hero from "../../assets/icons/hero.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="main-container">
        <div>
          <h2>
            <span className="">Hello, I'm</span>
            <span className="me">Jinmoyee Thakuria</span>
          </h2>
          <h1>
            Full-Stack Web
            <span> Developer</span>
          </h1>
          <div className="details">
            <div>
              <button className="project-btn">See my Latest Projects</button>
              <button className="contact-btn">Contact me</button>
            </div>
            <img src={scroll} alt="scroll-png" />
          </div>
        </div>

        <div>
          <div className="my-photo">
            <div>
              <img src={hero} alt="Portfolio-Image" />
            </div>
          </div>
          <div className="bg-text">Influencer and Full-Stack Developer</div>
        </div>
      </div>
    </div>
  );
}
