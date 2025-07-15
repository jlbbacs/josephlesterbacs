import { Tabtitle } from "../components/GeneralFunctions";
import React, { useEffect } from "react";
import "../css/projects.css";
import Nolimit from "../images/Nolimit1.png";
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

AOS.init();

const Project = () => {
  Tabtitle("Project | JLB");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      img: Kodekid,
      title: "Kodekid",
      desc: "Guide for Basic HTML and CSS.",
      demo: "https://jlbbacs.github.io/mini-project-kode-kid/",
      repo: "https://github.com/jlbbacs/mini-project-kode-kid",
      aos: "fade-right",
    },
    {
      img: Nolimit,
      title: "No Limit",
      desc: "Fitness website with e-commerce.",
      demo: "https://jlbbacs.github.io/NOLIMIT-GROUP4-PROJECT/",
      repo: "https://github.com/jlbbacs/NOLIMIT-GROUP4-PROJECT",
      aos: "flip-left",
    },
    {
      img: Charmingpets,
      title: "Charming Pets",
      desc: "Website for pet training manners and adoption.",
      demo: "https://group-3-nickel-capstone.vercel.app/",
      repo: "https://github.com/LightLotus/group-3-nickel-capstone",
      aos: "fade-left",
    },
    {
      img: Weatherapp,
      title: "JLB Weather",
      desc: "Simple Weather App",
      demo: "https://bacsarsaweatherapp.vercel.app/",
      repo: "https://github.com/jlbbacs/Bacs-Weather-app",
      aos: "fade-right",
    },
    {
      img: ApiFetch,
      title: "API Fetch",
      desc: "Simple API fetch with search bar",
      demo: "https://api-withsearchbar-test.vercel.app/",
      repo: "https://github.com/jlbbacs/react-api-search-test",
      aos: "flip-left",
    },
    {
      img: Crud,
      title: "CRUD",
      desc: "Simple CRUD operation using PHP",
      demo: "https://jlbcrud.000webhostapp.com/index.php",
      repo: "https://github.com/jlbbacs/crud",
      aos: "fade-left",
    },
    {
      img: ErzaWeatherAppPic,
      title: "Erza's Weather App",
      desc: "Weather Forecast Application",
      demo: "https://erza-weather-app.vercel.app/",
      repo: "https://github.com/jlbbacs/weather-app-erza",
      aos: "fade-left",
    },
    {
      img: bmi,
      title: "BMI Calculator",
      desc: "Simple BMI Calculator",
      demo: "https://bmi-calculator-cyan.vercel.app/",
      repo: "https://github.com/jlbbacs/ionic-test",
      aos: "fade-left",
    },
    {
      img: mern,
      title: "MERN CRUD Test",
      desc: "Simple MERN CRUD operations",
      demo: "https://mern-test-indol.vercel.app/",
      repo: "https://github.com/jlbbacs/mern-test",
      aos: "flip-left",
    },
    {
      img: Qregistration,
      title: "Quick Registration Form",
      desc: "Simple online registration app, export to PDF",
      demo: "https://quick-registration-seven.vercel.app/",
      repo: "https://github.com/jlbbacs/quick-registration",
      aos: "flip-left",
    },
    {
      img: Todoapp,
      title: "To-Do App",
      desc: "Simple To-Do Application",
      demo: "https://to-do-app-ochre-nu.vercel.app/",
      repo: "https://github.com/jlbbacs/to-do-app",
      aos: "fade-left",
    },
     {
      img: LechonPic,
      title: "Fredos Lechon",
      desc: "Lechon Order Managment App",
      demo: "https://fredos-lechon.vercel.app/",
      repo: "https://github.com/jlbbacs/fredos-lechon",
      aos: "fade-right",
    },
     {
      img: Scanner2Text,
      title: "Receipt Scanner to Text ",
      desc: "Scan receipt and convert to text",
      demo: "https://receipt-scanner-2text.vercel.app/",
      repo: "https://github.com/jlbbacs/receipt-scanner-2text",
      aos: "fade-left",
    }
  ];

  return (
    <div className="container" id="project">
      <h1>Projects</h1>
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
                    Demo
                  </a>
                </small>
                <small className="text-muted">
                  <a href={proj.repo} target="_blank" rel="noreferrer">
                    Repo
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

export default Project;
