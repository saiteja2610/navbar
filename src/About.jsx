import React from "react";
// import { NavLink } from "react-router-dom";
import Web from "../src/Web/abouts.png"
import Common from "./Common";


const About = () => {
    return (
        <>
        <Common name='Welcome to About page' 
        imgsrc={Web} 
        visit="/contact" 
        btname="Contact Now"/>
        </>
    );
};

export default About;