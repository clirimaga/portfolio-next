import React from "react";
import { TypeAnimation } from "react-type-animation";
import classes from './About.module.css'
import '../globals.css'
// import AOS from "aos";
// import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default function About() {
//   AOS.init();
  const { t } = useTranslation();

  return (
    <div
      className="col-5 col-sm-6 col-12 ms-5 mt-2 d-flex flex-column justify-content-around"
      data-aos="zoom-out-left"
    >
      <div>
        <div className="d-flex my-3 gap-2 align-items-center">
        <img className={classes.wavinghand} src='https://res.cloudinary.com/dffxhlnzz/image/upload/v1679737147/portfolio/hand-removebg-preview_ha4ym2.png' alt='waving hand' />
        <h3>Hi there!</h3>
        {/* <h3>"Hi.1"</h3> */}

        </div>
        <h3>I am Çlirim Sadiku, a</h3>
        <TypeAnimation
          sequence={[
            "Frontend", // Types 'One'
            1500, // Waits 1s
            "Backend", // Deletes 'One' and types 'Two'
            1500, // Waits 2s
            "Full-Stack Developer", // Types 'Three' without deleting 'Two'
            1500,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          speed={60}
          style={{ fontSize: "2rem" }}
          className={classes.maincolor}
        />
      </div>
      <h5>Analytical and detail-oriented Web Developer with a knack for conceptualizing and delivering elegant, user-friendly solutions effectively and efficiently. Regular participant of hackathons and web developer meetups.</h5>
    </div>
  );
}
