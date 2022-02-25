import React from "react";
// import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Error = () => {
    return(
        <>
        <div className="page">
        <div className="setStyle2">
            <span className="errors w-100 h-100" aria-label="emoji" role="img"> 🆘 </span>
            <h1 className="error font-weight-bolder"> 404 Error Page </h1>
            <p> Sorry, This page doesn't exist </p>
            <NavLink to="/" className="go"> Go Back </NavLink>
        </div>
        </div>
        </>
    );
};

export default Error;