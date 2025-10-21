import "../css/about.css";
import React, { useEffect } from "react";
import Mayon from "../images/mayon.png";
import { Tabtitle } from "../components/GeneralFunctions";
import AOS from "aos";
import "aos/dist/aos.css";
import Photoshop from "../images/icons8-adobe-photoshop.gif";
import Filmora from "../images/icons8-filmora.svg";
import Tailwind from "../images/tailwind-css.svg";
import Figma from "../images/icons8-figma.gif";
import Ionic from "../images/ionic-icon-svgrepo-com.svg";
import PPT from "../images/ppt.png";
import MSWORD from "../images/word.png";
import EXCEL from "../images/excel.png";
import VSCODE from "../images/vscode-svgrepo-com.svg";

AOS.init();

const skills = [
  { title: "HTML", icon: <i className="fa-brands fa-html5"></i>, bg: "#0d6cf9" },
  { title: "CSS", icon: <i className="fa-brands fa-css3-alt"></i>, bg: "#f17508" },
  { title: "BOOTSTRAP", icon: <i className="fa-brands fa-bootstrap"></i>, bg: "#8e09f3" },
  { title: "JAVASCRIPT", icon: <i className="fa-brands fa-square-js"></i>, bg: "#f0f408" },
  { title: "REACT", icon: <i className="fa-brands fa-react"></i>, bg: "#0de9f9" },
  { title: "GITHUB", icon: <i className="fa-brands fa-github"></i>, bg: "#809698ff" },
  { title: "PYTHON", icon: <i className="fa-brands fa-python"></i>, bg: "#caf90d" },
  { title: "MYSQL", icon: <i className="fa-solid fa-database"></i>, bg: "teal" },
  { title: "PHP", icon: <i className="fa-brands fa-php"></i>, bg: "#6f6fff" },
  { title: "PHOTOSHOP", icon: <img src={Photoshop} alt="photoshop" />, bg: "#807091" },
  { title: "FILMORA", icon: <img src={Filmora} alt="filmora" />, bg: "aquamarine" },
  { title: "TAILWIND", icon: <img src={Tailwind} alt="tailwind" />, bg: "#98d0ecff" },
  { title: "FIGMA", icon: <img src={Figma} alt="figma" />, bg: "#f24e1e" },
  { title: "IONIC", icon: <img src={Ionic} alt="ionic" />, bg: "#aebcd1ff" },
  { title: "MS WORD", icon: <img src={MSWORD} alt="word" />, bg: "#185abd" },
  { title: "EXCEL", icon: <img src={EXCEL} alt="excel" />, bg: "#217346" },
  { title: "POWERPOINT", icon: <img src={PPT} alt="ppt" />, bg: "#d24726" },
  { title: "VSCODE", icon: <img src={VSCODE} alt="vscode" />, bg: "#007acc" },
];

const About = () => {
  Tabtitle("About | JLB");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-fluid mb-5 px-5">
      <h1 className="text-center">About</h1>
      <div className="card mb-3 border-0 mt-3 w-100">
        <div className="row justify-content-center align-items-center" id="about-row">
          <div className="col-12 col-md-5 text-center mb-3 mb-md-0">
            <img src={Mayon} className="img-fluid img-mayon" alt="Mayon" />
          </div>
          <div className="col-12 col-md-7">
            <div className="card-body text-center text-md-start">
              <h5 className="card-title aboutname">Joseph Lester Bacsarsa</h5>
              <p className="card-text-about mt-3">
                Hello, I'm an aspiring IT professional passionate about technology and problem-solving.
                I focus on creating innovative solutions and am eager to collaborate on impactful projects.
                Feel free to explore my portfolio and reach out! 👍
              </p>

              <h5 className="skills-about">EXPERIENCE</h5>

              <ul className="about-list">
                {skills.map((skill, index) => (
                  <li key={index} className="list" title={skill.title} style={{ backgroundColor: skill.bg }}>
                    {skill.icon}
                    <span className="skill-text">{skill.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
