import React from "react";

import { Link } from "react-router-dom";
import "./Navbar.css"
// import logo from "../Images/ProjectLogo.png"
export const Navbar = () => {
  return (
    
    <>
      <div className="top-nav">
        <div className="reg-nav">
          <div>
            <p>Registered for SARS eFiling? Click here to get started.</p>
          </div>
        </div>
        <div className="link-div">
          <div>
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
          <div>
            <Link className="link" to="/faq">
              FAQ
            </Link>
          </div>
          <div>
            <Link className="link" to="/calculator">
              Calculators
            </Link>
          </div>
          <div>
            <Link className="link" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="top-nav-II">
        <div className="logo-img">
          <Link to="/">
            <img src="https://www.taxtim.com/za/images/taxtim-logo.svg" alt="" />
          </Link>
        </div>
        <div className="top-nav-III">
          <div>
            <a href="/howitworks" className="anch">How it works</a>
          </div>
          <div>
            <a href="/" className="anch">Pricing</a>
          </div>
          <div>
            <a href="/" className="anch">Help</a>
          </div>
          <div>
            <button className="getstart">GET STARTED</button>
          </div>
        </div>
      </div>
    </>
  );
};
