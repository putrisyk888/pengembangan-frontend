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
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
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
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
