import { Tabtitle } from '../components/GeneralFunctions';
import React, { useEffect } from 'react';
import Typewriter from "typewriter-effect";
import Carousel from '../components/Carousel';
import "../css/home.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Particles
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Home = () => {

    Tabtitle('Home | JLB');

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 1000 });
    }, []);

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        // optional: console.log(container)
    };

    return (
        <div className="home-wrapper">
            {/* Particle Background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: { value: "#ffffff" }, // page background
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onHover: { enable: true, mode: "repulse" },
                            onClick: { enable: true, mode: "push" },
                        },
                        modes: {
                            push: { quantity: 4 },
                            repulse: { distance: 100, duration: 0.4 },
                        },
                    },
                    particles: {
                        color: { value: "#0B8CD5" },
                        links: { enable: true, color: "#0B8CD5", distance: 150, opacity: 0.4, width: 1 },
                        move: { enable: true, speed: 2, outModes: "bounce" },
                        number: { value: 50, density: { enable: true, area: 800 } },
                        opacity: { value: 0.5 },
                        shape: { type: "circle" },
                        size: { value: { min: 2, max: 5 } },
                    },
                    detectRetina: true,
                }}
            />

            {/* Page Content */}
            <div className="container mb-5" id='home-container'>
                <div className="row text-center mt-5 mb-5 hero-section">
                    <div className="col-sm-6 hero-text mb-3">
                        <div className='hello' data-aos="fade-right">Hello my name is</div>
                        <div className="myname" data-aos="fade-up">Joseph Lester Bacsarsa</div>
                        <div className="type" data-aos="fade-left">
                            <Typewriter
                                id="type-text"
                                className="typewriter-text"
                                options={{
                                    strings: ['A Problem Solver', 'A Front-end Developer', 'A Web Designer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-sm-6 mb-3 carousel-home"><Carousel /></div>
                </div>
            </div>
        </div>
    );
};

export default Home;
