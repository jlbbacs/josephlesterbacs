import { Tabtitle } from "../components/GeneralFunctions";
import React, { useEffect, useState } from "react";
import "../css/certificates.css";
import TECHSUPPORT from "../images/tech-support.png";
import AOS from "aos";
import "aos/dist/aos.css";
import AI from "../images/Ai-Essentials.png";
import CYBERSECURITY from "../images/cyber security.png";
import KODEGO from "../images/kodego.png";
import ECOMMERCE from "../images/e-commerce.png";
import LINUXSQL  from "../images/linux & sql.png";
import NETWORKSECURITY  from "../images/netfowk-security.png";
import SERURITYMANAGMENTRISK  from "../images/securty management risk.png";
import DIGITALMARKETING from "../images/digital marketing.png";

AOS.init();

const Certificates = () => {
  Tabtitle("Project | JLB");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🔹 State for fullscreen image
  const [fullscreenImg, setFullscreenImg] = useState(null);

  const projects = [
    {
      img: TECHSUPPORT,
      title: "Technical Support",
      demo: "https://www.coursera.org/account/accomplishments/certificate/KE8A8G0B7TIW",
      aos: "fade-right",
    },
    {
      img: AI,
      title: "AI Essentials",
      demo: "https://www.coursera.org/account/accomplishments/certificate/FRFBEQ4W7C9P",
      aos: "flip-left",
    },
    {
      img: CYBERSECURITY,
      title: "Cyber Security",
      aos: "fade-right",
    },
    {
      img: ECOMMERCE,
      title: "Foundation of Digital Marketing and E-commerce",
      aos: "fade-left",
    },
    {
      img: KODEGO,
      title: "FullStack Development",
      aos: "fade-right",
    },
    {
      img: LINUXSQL,
      title: "Tools of the trade:Linux and SQL",
      aos: "fade-left",
    },
     {
      img: NETWORKSECURITY,
      title: "Networking",
      aos: "fade-right",
    },
     {
      img: SERURITYMANAGMENTRISK,
      title: "Security risk Managment",
      aos: "fade-left",
    },
    {
      img: DIGITALMARKETING,
      title: "Digital Marketing",
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
              {/* Clickable Image */}
              <img
                src={proj.img}
                className="card-img-top"
                alt={proj.title}
                onClick={() => setFullscreenImg(proj.img)} // 🔹 Open fullscreen
                style={{ cursor: "pointer" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{proj.title}</h5>
              </div>
              {proj.demo && (
                <div className="card-footer text-center">
                  {/* <small className="text-muted me-2">
                    <a href={proj.demo} target="_blank" rel="noreferrer">
                      View
                    </a>
                  </small> */}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Fullscreen Modal */}
      {fullscreenImg && (
        <div className="fullscreen-overlay" onClick={() => setFullscreenImg(null)}>
          <img src={fullscreenImg} alt="fullscreen" className="fullscreen-img" />
        </div>
      )}
    </div>
  );
};

export default Certificates;
