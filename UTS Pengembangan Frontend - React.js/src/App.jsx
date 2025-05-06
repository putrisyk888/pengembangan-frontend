import React from "react";
import Navbar from "./home";
import TopUpApp from "./TopUpApp";
import "./App.css";
import Bayar from "./payment";

//Logo Aplikasi
import canva from "./assets/img/canva.png";
import spotify from "./assets/img/download.png";
import iqiyi from "./assets/img/iqiyi.webp";
import netflix from "./assets/img/Netflix-Symbol.png";
import vidio from "./assets/img/vidio.jpeg";
import viu from "./assets/img/viu.png";
import wetv from "./assets/img/wetv.webp";
import youtube from "./assets/img/youtube.png";

//Logo Pembayaran Aplikasi
import dana from "./assets/img/dana.jpg";
import indomaret from "./assets/img/Logo_Indomaret.png";
import ovo from "./assets/img/ovo.jpg";

function App() {
  return (
    <div>
      <Navbar />
      <h1>Katalog Aplikasi</h1>
      <div className="logo-card">
        <img src={spotify} alt="logo-image" className="logo-aplikasi" />
        <p className="top-title">
          <h2>Spotify</h2>
        </p>
      </div>
      <div className="product-row">
        <TopUpApp product_desc="Paket 1 : Individu Rp54.990 / bulan" />
        <TopUpApp product_desc="Paket 2 : Family Rp86.900 / bulan" />
        <TopUpApp product_desc="Paket 3 : Student Rp27.500 / bulan" />
      </div>

      <hr />

      <div className="logo-card">
        <img src={netflix} alt="logo-image" className="logo-aplikasi" />
        <p className="top-title">
          <h2>Netflix</h2>
        </p>
      </div>
      <div className="product-row">
        <TopUpApp product_desc="Paket 1 : Ponsel Rp54.000 / bulan" />
        <TopUpApp product_desc="Paket 2 : Dasar Rp65.000 / bulan" />
        <TopUpApp product_desc="Paket 3 : Premium Rp186.000 / bulan" />
      </div>

      <hr />

      <div className="logo-card">
        <img src={canva} alt="logo-image" className="logo-aplikasi" />
        <p className="top-title">
          <h2>Canva</h2>
        </p>
      </div>
      <div className="product-row">
        <TopUpApp product_desc="Paket 1 : Designer Rp15.000 / bulan" />
        <TopUpApp product_desc="Paket 2 : Lifetime Education Rp30.000 / bulan" />
      </div>

      <hr />

      <div className="logo-card">
        <img src={iqiyi} alt="logo-image" className="logo-aplikasi" />
        <p className="top-title">
          <h2>Iqiyi</h2>
        </p>
      </div>
      <div className="product-row">
        <TopUpApp product_desc="Paket 1 : Dasar Rp19.000 / bulan" />
        <TopUpApp product_desc="Paket 2 : Standart Rp39.000 / bulan" />
        <TopUpApp product_desc="Paket 3 : Premium Rp59.000 / bulan" />
      </div>

      <hr />

      <div className="logo-card">
        <img src={vidio} alt="logo-image" className="logo-aplikasi" />
        <p className="top-title">
          <h2>Vidio</h2>
        </p>
      </div>
      <div className="product-row">
        <TopUpApp product_desc="Paket 1 : Platinum Rp39.000 / bulan" />
        <TopUpApp product_desc="Paket 2 : Premier Rp49.000 / bulan" />
        <TopUpApp product_desc="Paket 3 : Platinum + Premier Rp139.000 / bulan" />
      </div>

      <hr />

      <div className="logo-card">
        <img src={viu} alt="logo-image" className="logo-aplikasi" />
        <p className="top-title">
          <h2>Viu</h2>
        </p>
      </div>
      <div className="product-row">
        <TopUpApp product_desc="Paket 1 : Premium Rp33.000 / bulan" />
        <TopUpApp product_desc="Paket 1 : Sharing Plus Rp20.000 / bulan" />
      </div>

      <hr />

      <div className="logo-card">
        <img src={wetv} alt="logo-image" className="logo-aplikasi" />
        <p className="top-title">
          <h2>WeTV</h2>
        </p>
      </div>
      <div className="product-row">
        <TopUpApp product_desc="Paket 1 : Sharing Rp15.000 / bulan" />
        <TopUpApp product_desc="Paket 2 : Private Rp38.000 / bulan" />
        <TopUpApp product_desc="Paket 3 : Semi Private Rp28.000 / bulan" />
      </div>

      <hr />

      <div className="pembayaran">
        <h3>Saluran Pembayaran</h3>
        <br />
        <div className="logo-pembayaran">
         <img src={dana} alt="dana" className="logo-item" />
         <img src={indomaret} alt="indomaret" className="logo-item" />
         <img src={ovo} alt="ovo" className="logo-item" />
        </div>
      </div>
      
      <div className="call">
        <h4>Hubungi Kami</h4>
        <br />
        <div className="sosmed">
          <i style={{ marginRight: "20px" }} class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-x-twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default App;
