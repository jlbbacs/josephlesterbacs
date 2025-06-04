
import { Tabtitle } from '../components/GeneralFunctions';
import React, { useEffect } from 'react';
import Typewriter from "typewriter-effect";
import  Carousel  from '../components/Carousel';
import "../css/home.css";
import AOS from "aos";
import "aos/dist/aos.css";


AOS.init();



const Home = ()=> {
    

    Tabtitle('Home | JLB');
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return(
  
    <div className="container mb-5 " id='home-container'> 
  
  
    <div className="row text-center mt-5 mb-5 hero-section"> 
        <div className="col-sm-6 hero-text mb-3">
        <div  className='hello'data-aos="fade-right" data-aos-duration="1000"> Hello my name is</div>
         <div className="myname" data-aos="fade-up" data-aos-duration="1000">Joseph Lester Bacsarsa</div>
       
        <div className="type" data-aos="fade-left" data-aos-duration="1000" >
        <Typewriter 

            id = "type-text"  
            className="typewriter-text"
            options={{
            strings: ['A Problem Solver','A Front-end Developer','A Web Designer'],
            autoStart: true,
             loop: true,
              }}
            
              /> 
              </div>
              </div>

        <div className="col-sm-6 mb-3 carousel-home">{<Carousel/>}</div>
    </div>

    </div>  



    )
    }

export default Home;