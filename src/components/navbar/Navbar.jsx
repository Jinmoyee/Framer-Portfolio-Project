import React from "react";
import "./navbar.scss";
import github from "../../assets/icons/github.png";
import x from "../../assets/icons/x.png";
import fb from "../../assets/icons/fb.png";
import instagram from "../../assets/icons/instagram.png";
import linkedin from "../../assets/icons/linkedin.png";
import SideBar from "../SideBar/SideBar";

// import SideBar from "../SideBar/SideBar";

export default function NavBar() {
  return (
    <div>
      <SideBar />
      <div className="navbar">
        <span className="">JINMOYEE DEV</span>
        <div className="wrapper">
          <a href="https://github.com/Jinmoyee" target="_blank">
            <img src={github} alt="github-link" className="" />
          </a>
          <a href="https://twitter.com/jinmoyee" target="_blank">
            <img src={x} alt="x-link" className="" />
          </a>
          <a
            href="https://www.linkedin.com/in/jinmoyee-thakuria-794774235/"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin-link" className="" />
          </a>
          <a
            href="https://www.instagram.com/jinmoyee_thakuria/"
            target="_blank"
          >
            <img src={instagram} alt="insta-link" className="" />
          </a>
          <a href="https://www.facebook.com/jinmoyee.kulu.1/" target="_blank">
            <img src={fb} alt="fb-link" className="" />
          </a>
        </div>
      </div>
    </div>
  );
}
