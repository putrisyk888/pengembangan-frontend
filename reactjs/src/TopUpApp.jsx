import React from "react";
import "./TopUpApp.css";

const TopUpApp = (props) => {
  return (
    <div className="product-card">
      <h2>{props.product_name}</h2>
      <h4>Jenis Paket</h4>
      <p>{props.product_desc}</p>
      <button className="buy-button">Beli</button>
    </div>
  );
};

export default TopUpApp;