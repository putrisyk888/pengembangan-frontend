import React from "react";
import "./TopUpApp.css";

const TopUpApp = (props) => {
  return (
    <div className="product-card">
      <p className="product">{props.product_name}</p>

      <p className="description">{props.prod_desc}</p>
      
      <button className="button">Tumbas</button>
    </div>
  );
};

export default TopUpApp;
