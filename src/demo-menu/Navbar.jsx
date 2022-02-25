import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo.png";





const Navbar = () => {
  return (
    <>
    <div className="container-fluid nav bg">
      <div className="row">
        <div className="col-10 mx-auto">
    <nav className="navbar navbar-expand-lg navbar-light bg-light:#fff">
  <div className="container-fluid">
    <NavLink to="/"><img src={Logo} height={75} width={75} alt="Logo" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact 
          activeclassname="menu_active"
          className="nav-link active" 
          aria-current="page" 
          to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact 
          activeclassname="menu_active"
          className="nav-link" 
          to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact 
          activeclassname="menu_active"
          className="nav-link" 
          to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact 
          activeclassname="menu_active"
          className="nav-link" 
          to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
      </div>
    </div>
    </>
  );
};

export default Navbar;