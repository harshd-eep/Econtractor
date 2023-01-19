import React from "react";
import Common from "./Common.jsx";
import web2 from "./img.png";
import "./styles.css";
// import web from "./img1.png";
// import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <Common
        name="About US"
        imgsrc={web2}
        visit="/Contact"
        btname="Contact US"
      />
    </>
  );
};

export default About;
