import React from "react";
import "./home.css";
import { useState } from "react";
import Search from "./search";
import logokita from "./assets/img/logokita.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logokita} alt="logo euno streaming" className="logo" />
        <span className="brand-name">Ueno Streaming</span>
      </div>
      <ul className="navbar-link">
        <li>
          <a href="#home"><i class="fa-solid fa-house"></i></a>
        </li>
        <li>
          <a href="#package"><i class="fa-solid fa-box-open"></i></a>
        </li>
        <li>
          <a href="#contact"><i class="fa-solid fa-address-book"></i></a>
        </li>
      </ul>
      <div className="nav-search">
          <input
            type="text"
            placeholder="Search"
            style={{ padding: "5px", borderRadius: "5px" }}
          />
          <button
            style={{
              marginLeft: "5px",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
      </div>
    </nav>
  );
};

export default Navbar;
