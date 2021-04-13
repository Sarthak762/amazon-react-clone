import { Menu, MoreVert } from "@material-ui/icons";
import React, { useState } from "react";
import "./CategoryHeader.css";
import Navigation from "./Navigation";
const items = [
  "Best sellers",
  "Mobiles",
  "Todays deal",
  "Fashion",
  "New releases",
  "Prime",
  "Electronics",
  "Customer service",
  "Amazon pay",
  "Home & Kitchen",
  "Computers",
];
function CategoryHeader() {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <div className="categoryHeader">
        <div
          className="menu"
          onClick={() => {
            setDisplay(true);
          }}
        >
          <Menu />
          All
        </div>
        {items.map((item) => (
          <div className="options">{item}</div>
        ))}
        <img
          src="https://divinelifestyle.com/wp-content/uploads/2015/07/Amazon-prime.png"
          alt=""
        />
      </div>
      <Navigation
        show={display}
        handleClose={() => {
          setDisplay(false);
        }}
      />
    </>
  );
}

export default CategoryHeader;
