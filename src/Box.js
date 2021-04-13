import React from "react";
import "./Box.css";
function Box({ imageUrl, name, price, description }) {
  return (
    <div className="box">
      <img src={imageUrl} alt="" />
      <h3>{name}</h3>
      <h4>{price}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Box;
