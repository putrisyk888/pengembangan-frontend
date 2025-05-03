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
          prod_desc={["Paket 1: Individu Rp54.990",
                      "Paket 2: Family Rp.102.000",
                      "Paket 3: Family Rp.102.000",
          ]}
        />
        <TopUpApp product_name="Netflix" prod_desc="Paket Sharing Rp65.000" />
      </div>
    </div>
  );
}

export default App;
