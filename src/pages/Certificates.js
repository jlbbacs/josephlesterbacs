import { Tabtitle } from "../components/GeneralFunctions";
import React, { useEffect } from "react";
import "../css/projects.css";
import TECHSUPPORT from "../images/tech-support.png";
import Kodekid from "../images/kodekid1.png";
import ApiFetch from "../images/api-test.png";
import Charmingpets from "../images/charmingpets1.png";
import Weatherapp from "../images/weatherapp.png";
import Crud from "../images/crud.png";
import AOS from "aos";
import "aos/dist/aos.css";
import bmi from "../images/bmi.png";
import mern from "../images/mern.png";
import Todoapp from "../images/todo-app.png";
import Qregistration from "../images/bqr.png";
import ErzaWeatherAppPic from "../images/erza-weather-app.png";
import LechonPic from "../images/lechon.png";
import Scanner2Text from '../images/scanner2text.png';
import AI from "../images/Ai-Essentials.png";
import CYBERSECURITY from "../images/cyber security.png";
import KODEGO from "../images/kodego.png";

AOS.init();

const Certificates = () => {
  Tabtitle("Project | JLB");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      img: TECHSUPPORT,
      title: "Technical Support",
    //   desc: "Guide for Basic HTML and CSS.",
      demo: "https://www.coursera.org/account/accomplishments/certificate/KE8A8G0B7TIW",
    //   repo: "https://github.com/jlbbacs/mini-project-kode-kid",
      aos: "fade-right",
    },
    {
      img: AI,
      title: "AI Essentials",
    //   desc: "Fitness website with e-commerce.",
      demo: "https://www.coursera.org/account/accomplishments/certificate/FRFBEQ4W7C9P",
      aos: "flip-left",
    },
    {
      img: CYBERSECURITY,
      title: "Cyber Security",
    //   desc: "Website for pet training manners and adoption.",
    //   demo: "https://group-3-nickel-capstone.vercel.app/",
    //   repo: "https://github.com/LightLotus/group-3-nickel-capstone",
      aos: "fade-left",
    },
    {
      img: KODEGO,
      title: "FullStack Developer",
    //   desc: "Simple Weather App",
      demo: "https://bacsarsaweatherapp.vercel.app/",
      repo: "https://github.com/jlbbacs/Bacs-Weather-app",
      aos: "fade-right",
    },
    
  ];

  return (
    <div className="container" id="project">
      <h1>Certifications</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-5" id="group-card">
        {projects.map((proj, index) => (
          <div className="col d-flex" key={index}>
            <div
              className="card w-100"
              data-aos={proj.aos}
              data-aos-duration="2000"
              data-aos-easing="ease-out-cubic"
            >
              <img
                src={proj.img}
                className="card-img-top"
                alt={proj.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{proj.title}</h5>
                <p className="card-text">{proj.desc}</p>
              </div>
              <div className="card-footer text-center">
                <small className="text-muted me-2">
                  <a href={proj.demo} target="_blank" rel="noreferrer">
                View
                  </a>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
