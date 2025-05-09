import React from "react";
import "./home.css";
import { useState } from "react";
import Search from "./search";
import logokita from "./assets/img/logokita.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <nav className="navbar">
      <div className="burger" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </div>

      <div className="navbar-brand">
        <img src={logokita} alt="logo euno streaming" className="logo" />
        <span className="brand-name">Ueno Streaming</span>
      </div>

      <div className="navbar-right">
        <ul className={`navbar-link ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#home"><i class="fa-solid fa-lg fa-house"></i></a>
          </li>
          <li>
            <a href="#package"><i class="fa-solid fa-lg fa-box-open"></i></a>
          </li>
          <li>
            <a href="#contact"><i class="fa-solid fa-lg fa-address-book"></i></a>
          </li>
          <li className="searching">
            <input type="text" placeholder="search" style={{padding: "5px", borderRadius: "5px"}} />
            <i className="fa fa-lg fa-search" aria-hidden="true" style={{cursor: "pointer", marginLeft: "10px", color: "darkslateblue"}}>         
            </i>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
