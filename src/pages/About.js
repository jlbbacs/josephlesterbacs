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

              <ul className="about-list">
                <li
                  className="list"
                  id="ht"
                  data-bs-toggle="popover"
                  data-bs-placement="top"
                  data-bs-content="Top popover"
                  title="HTML"
                >
                  <i class="fa-brands fa-html5 fa-html5 fa-bounce fa-2xl"></i>
                </li>
                <li
                  className="list"
                  id="cs"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="CSS"
                >
                  <i class="fa-brands fa-css3-alt fa-flip fa-2xl"></i>
                </li>
                <li
                  className="list"
                  id="bo"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="BOOTSTRAP"
                >
                  <i class="fa-brands fa-bootstrap fa-beat-fade fa-2xl"></i>
                </li>
                <li
                  className="list"
                  id="ja"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="JAVASCRIPT"
                >
                  <i class="fa-brands fa-square-js fa-shake fa-2xl"></i>
                </li>
                <li
                  className="list"
                  id="re"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="REACT"
                >
                  <i class="fa-brands fa-react fa-spin-pulse fa-2xl"></i>
                </li>
                <li
                  className="list"
                  id="gi"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="GITHUB"
                >
                  <i class="fa-brands fa-github fa-fade fa-2xl"></i>
                </li>
                <li
                  className="list"
                  id="py"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="PYTHON"
                >
                  <i className="fa-brands fa-python fa-spin fa-2xl"></i>
                </li>
                <li
                  className="list"
                  id="my"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="SQL"
                >
                  MYSQL
                </li>
                <li
                  className="list"
                  id="ph"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="PHP"
                >
                  <i class="fa-brands fa-php fa-beat-fade fa-2xl"></i>
                </li>
                <li
                  className="list"
                  id="photo"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="PHOTOSHOP"
                >
                  <img src={Photoshop} className="img-fluid" alt="..." />
                </li>
                <li
                  className="list"
                  id="fil"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="FILMORA"
                >
                  <img src={Filmora} className="img-fluid" alt="filmora logo" />
                </li>
                <li
                  className="list"
                  id="tail"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="TAILWIND"
                >
                  <img
                    src={Tailwind}
                    className="img-fluid"
                    alt="tailwindlogo"
                  />
                </li>
                <li
                  className="list"
                  id="fig"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="FIGMA"
                >
                  <img src={Figma} className="img-fluid" alt="figmalogo" />
                </li>
                <li
                  className="list"
                  id="fig"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="IONIC"
                >
                  <img src={Ionic} className="img-fluid" alt="figmalogo" />
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
