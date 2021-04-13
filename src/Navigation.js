import { Avatar } from "@material-ui/core";
import { ClearOutlined, HelpOutline } from "@material-ui/icons";
import React, { useState } from "react";
import "./Navigation.css";

const trending = ["Best Sellers", "New Releases", "Movers and shakers"];
const digital = [
  "Echo and Alexa",
  "fire TV",
  "Kindle E-readers and eBooks",
  "Audible Audiobooks",
  "Echo and Alexa",
  "fire TV",
  "Kindle E-readers and eBooks",
  "Audible Audiobooks",
  "Echo and Alexa",
  "fire TV",
  "Kindle E-readers and eBooks",
  "Audible Audiobooks",
];

function Navigation({ show, handleClose }) {
  const display = show ? { display: "flex" } : { display: "none" };
  return (
    <div className="container " style={display}>
      <div className="navigation">
        <div className="nav_top">
          <Avatar />
          Hello, Sign in
        </div>
        <h3>Trending</h3>
        {trending.map((trend) => (
          <div className="nav_options">{trend}</div>
        ))}
        <h3>Digital Content And Devices</h3>
        {digital.map((trend) => (
          <div className="nav_options">{trend}</div>
        ))}
      </div>
      <div onClick={handleClose}>
        <ClearOutlined />
      </div>
    </div>
  );
}

export default Navigation;
