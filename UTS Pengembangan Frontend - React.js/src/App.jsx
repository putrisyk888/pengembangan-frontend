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
import dana from "./assets/img/danaLogo.png";
import indomaret from "./assets/img/Logo_Indomaret.png";
import ovo from "./assets/img/ovo.jpg";

function App() {
  return (
    <div>
      <Navbar />
      <h1>
        <strong>Katalog Produk</strong>
      </h1>
      <div className="logo-card">
        <div className="top-title">
          <img src={netflix} alt="logo-image" className="logo-aplikasi" />
          <h2>Netflix</h2>
        </div>
        <div className="product-row">
          <TopUpApp product_desc="Paket 1 : Sharing 1U Rp29.000 / bulan" />
          <TopUpApp product_desc="Paket 2 : Semi Private Rp36.000 / bulan" />
          <TopUpApp product_desc="Paket 3 : Ponsel Rp54.000 / bulan" />
          <TopUpApp product_desc="Paket 4 : Dasar Rp65.000 / bulan" />
          <TopUpApp product_desc="Paket 5 : Premium Rp186.000 / bulan" />
        </div>
      </div>

      <div className="logo-card">
        <div className="top-title">
          <img src={canva} alt="logo-image" className="logo-aplikasi" />
          <h2>Canva</h2>
        </div>
        <div className="product-row">
          <TopUpApp product_desc="Paket 1 : Member Rp10.000 / bulan" />
          <TopUpApp product_desc="Paket 2 : Member Rp15.000 / 2 bulan" />
          <TopUpApp product_desc="Paket 3 : Member Rp20.000 / 3 bulan" />
          <TopUpApp product_desc="Paket 4 : Member Rp25.000 / 6 bulan" />
          <TopUpApp product_desc="Paket 5 : Member Rp30.000 / 12 bulan" />
        </div>
      </div>

      <div className="logo-card">
        <div className="top-title">
          <img src={vidio} alt="logo-image" className="logo-aplikasi" />
          <h2>Vidio</h2>
        </div>
        <div className="product-row">
          <TopUpApp product_desc="Paket 1 : Platinum Rp10.000 / hari" />
          <TopUpApp product_desc="Paket 2 : Platinum Rp25.000 / 7 hari" />
          <TopUpApp product_desc="Paket 3 : Platinum Rp39.000 / bulan" />
          <TopUpApp product_desc="Paket 4 : Premier Rp49.000 / bulan" />
          <TopUpApp product_desc="Paket 5 : Platinum + Premier Rp139.000 / bulan" />
        </div>
      </div>

      <div className="pembayaran">
        <span className="pembayaran-title"><strong>Saluran Pembayaran</strong></span>
        <br />
        <div className="logo-pembayaran">
          <img src={dana} alt="dana" className="logo-item" />
          <img src={ovo} alt="ovo" className="logo-item" />
          <img src={indomaret} alt="indomaret" className="logo-item" />

      <div className="call">
        <div>
          <span className="call-title"><strong>Hubungi Kami</strong></span>
        </div>
        <div>
        <i style={{marginRight: "20px"}} className="fa-brands fa-lg fa-instagram"></i>
        <i style={{marginRight: "20px"}} className="fa-brands fa-lg fa-x-twitter"></i>
        <i class="fa-brands fa-lg fa-tiktok"></i>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default App;
