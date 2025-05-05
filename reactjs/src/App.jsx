import React from "react";
import Navbar from "./home";
import TopUpApp from "./topUpApp";

function App() {
  return (
    <div>
      <Navbar />
      <div className="product-container">
        <TopUpApp
          product_name="Spotify"
          product_desc="Paket 1 : Individu Rp54.990 / bulan
                        Paket 2 : Family Rp86.900 / bulan
                        Paket 3 : 2 orang Rp71.490 / bulan
                        Paket 4 : Student Rp27.500 / bulan"
        />
        <TopUpApp
          product_name="Netflix"
          product_desc="Paket 1 : Ponsel Rp54.000 / bulan
                        Paket 2 : Dasar Rp65.000 / bulan
                        Paket 3 : Standart Rp120.000 / bulan
                        Paket 4 : Premium Rp186.000 / bulan"
        />
        </div>
      </div>
  );
}

export default App;