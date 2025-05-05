import React from "react";
import Navbar from "./home";
import TopUpApp from "./TopUpApp";
import "./TopUpApp.css";
import spotifyLogo from "./download.png";
import netflixLogo from "./Netflix-Symbol.png";

function App() {
  return (
    <div>
      <Navbar />
      <div className="logo-card">
        <img src={spotifyLogo} alt="logo-spotify" className="logo-image" />
        <p className="top-title">
          <h1>Spotify</h1>
        </p>
      </div>
      <div className="product-row">
        <TopUpApp product_desc="Paket 1 : Individu Rp54.990 / bulan" />
        <TopUpApp product_desc="Paket 2 : Family Rp86.900 / bulan" />
        <TopUpApp product_desc="Paket 3 : Student Rp27.500 / bulan" />
      </div>
      <hr />
      <div className="logo-card">
        <img src={netflixLogo} alt="logo-netflix" className="logo-image" />
        <p className="top-title">
          <h1>Netflix</h1>
        </p>
      </div>
      <div className="product-row">
        <TopUpApp product_desc="Paket 1 : Ponsel Rp54.000 / bulan" />
        <TopUpApp product_desc="Paket 2 : Dasar Rp65.000 / bulan" />
        <TopUpApp product_desc="Paket 3 : Premium Rp186.000 / bulan" />
      </div>
    </div>
  );
}

export default App;
