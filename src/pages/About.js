import "../css/about.css";
import React from "react";
import Mayon from "../images/mayon.png";
import { Tabtitle } from "../components/GeneralFunctions";
import { useEffect } from "react";
import AOS from "aos";
import Photoshop from "../images/icons8-adobe-photoshop.gif";
import Filmora from "../images/icons8-filmora.svg";
import "aos/dist/aos.css";
import Tailwind from "../images/tailwind-css.svg";
import Figma from "../images/icons8-figma.gif";
import Ionic from "../images/ionic-icon-svgrepo-com.svg";
import PPT from "../images/ppt.png";
import MSWORD from "../images/word.png";
import EXCEL from "../images/excel.png";
import VSCODE from "../images/vscode-svgrepo-com.svg";

AOS.init();

const About = () => {
  Tabtitle("About | JLB");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mb-5">
      <h1>About</h1>
      <div className="card mb-3 border-0 mt-3" style={{ maxwidth: 540 }}>
        <div className="row " id="about-row">
          <div className="col-sm-5">
            <img
              src={Mayon}
              className="img-fluid rounded-star img-mayon"
              alt="..."
            />
          </div>

          <div className="col-sm-7">
            <div className="card-body">
              <h5 className="card-title aboutname">Joseph Lester Bacsarsa</h5>
              <p className="card-text-about mt-3">
                Hello, I'm an aspiring IT professional passionate about
                technology and problem-solving. I focus on creating innovative
                solutions and am eager to collaborate on impactful projects.
                Feel free to explore my portfolio and reach out!👍
              </p>
              <h5 className="text-center skills-about">EXPERIENCE</h5>

              <ul className="about-list text-center">
  <li className="list" title="HTML" style={{backgroundColor:"#0d6cf9ff"}}>
    <i className="fa-brands fa-html5 fa-bounce fa-2xl"></i>
    <span className="d-block mt-2 text-muted" style={{ fontSize: "0.75rem"}}>HTML</span>
  </li>

  <li className="list" title="CSS" style={{backgroundColor:"#f17508ff"}}>
    <i className="fa-brands fa-css3-alt fa-flip fa-2xl"></i>
    <span className="d-block mt-2 text-muted" style={{ fontSize: "0.75rem" }}>CSS</span>
  </li>

  <li className="list" title="BOOTSTRAP" style={{backgroundColor:"#8e09f3ff"}}>
    <i className="fa-brands fa-bootstrap fa-beat-fade fa-2xl"></i>
    <span className="d-block mt-2 text-muted" style={{ fontSize: "0.75rem" }}>BOOTSTRAP</span>
  </li>

  <li className="list" title="JAVASCRIPT" style={{backgroundColor:"#f0f408ff"}}>
    <i className="fa-brands fa-square-js fa-shake fa-2xl"></i>
    <span className="d-block mt-2 text-muted" style={{ fontSize: "0.75rem" }}>JAVASCRIPT</span>
  </li>

  <li className="list" title="REACT"style={{backgroundColor:"#0de9f9ff"}}>
    <i className="fa-brands fa-react fa-spin-pulse fa-2xl"></i>
    <span className="d-block mt-2 text-muted" style={{ fontSize: "0.75rem" }}>REACT</span>
  </li>

  <li className="list" title="GITHUB" style={{backgroundColor:"#c5f0f4ff"}}>
    <i className="fa-brands fa-github fa-fade fa-2xl"></i>
    <span className="d-block mt-2 text-muted" style={{ fontSize: "0.75rem" }}>GITHUB</span>
  </li>

  <li className="list" title="PYTHON" style={{backgroundColor:"#caf90dff"}}>
    <i className="fa-brands fa-python fa-spin fa-2xl"></i>
    <span className="d-block mt-2 text-muted" style={{ fontSize: "0.75rem" }}>PYTHON</span>
  </li>

  <li className="list" title="MYSQL">
    <i className="fa-solid fa-database fa-beat-fade fa-2xl"></i>
    <span className="d-block mt-2 text-muted" style={{ fontSize: "0.75rem" }}>MYSQL</span>
  </li>

  <li className="list" title="PHP">
    <i className="fa-brands fa-php fa-beat-fade fa-2xl"></i>
    <span className="d-block mt-2 text-muted" style={{ fontSize: "0.75rem" }}>PHP</span>
  </li>

  <li className="list" title="PHOTOSHOP">
    <img src={Photoshop} className="img-fluid" alt="photoshop logo" />
    <span className="d-block mt-2 text-muted" style={{ fontSize: "0.75rem" }}>PHOTOSHOP</span>
  </li>

  <li className="list" title="FILMORA">
    <img src={Filmora} className="img-fluid" alt="filmora logo" />
    <span className="d-block mt-2 text-muted" style={{ fontSize: "0.75rem" }}>FILMORA</span>
  </li>

  <li className="list" title="TAILWIND">
    <img src={Tailwind} className="img-fluid" alt="tailwind logo" />
    <span className="d-block mt-2 text-muted" style={{ fontSize: "0.75rem" }}>TAILWIND</span>
  </li>

  <li className="list" title="FIGMA">
    <img src={Figma} className="img-fluid" alt="figma logo" />
    <span className="d-block mt-2 text-muted" style={{ fontSize: "0.75rem" }}>FIGMA</span>
  </li>

  <li className="list" title="IONIC">
    <img src={Ionic} className="img-fluid" alt="ionic logo" />
    <span className="d-block mt-2 text-muted" style={{ fontSize: "0.75rem" }}>IONIC</span>
  </li>

  <li className="list" title="MS WORD">
    <img src={MSWORD} className="img-fluid" alt="word logo" />
    <span className="d-block mt-2 text-muted" style={{ fontSize: "0.75rem" }}>MS WORD</span>
  </li>

  <li className="list" title="EXCEL">
    <img src={EXCEL} className="img-fluid" alt="excel logo" />
    <span className="d-block mt-2 text-muted" style={{ fontSize: "0.75rem" }}>EXCEL</span>
  </li>

  <li className="list" title="POWERPOINT">
    <img src={PPT} className="img-fluid" alt="powerpoint logo" />
    <span className="d-block mt-2 text-muted" style={{ fontSize: "0.75rem" }}>PPT</span>
  </li>

  <li className="list" title="VSCODE">
    <img src={VSCODE} className="img-fluid" alt="vscode logo" />
    <span className="d-block mt-2 text-muted" style={{ fontSize: "0.75rem" }}>VSCODE</span>
  </li>
</ul>


              <p className="card-text">
                <small className="text-muted"></small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
