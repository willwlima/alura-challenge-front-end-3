import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="nav-content">
      <div className="content-nav">
        <img 
        className="imgLogo" 
        src="image/aluraGeek.png" 
        alt="Logo AluraGeek" 
        onClick={() => navigate("/")}
        />
        <div className="content-left">
          <div className="search">
            <p style={{ width: "329px" }}>O que deseja encontrar?</p>
            <img className="icon" src="image/IconeSearch.png" alt="" />
          </div>
        </div>
        <button className="btn-login" onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
