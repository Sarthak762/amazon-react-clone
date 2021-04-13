import {
  LocationOnOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./Header.css";
function Header() {
  const [inputValue, setInputValue] = useState(null);
  return (
    <div className="header">
      <img
        className="logo"
        src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol-700x394.jpg"
        alt=""
      />
      <div className="location">
        <LocationOnOutlined />
        <div className="location_info">
          <p>Hello</p>
          <h3>Select your Address</h3>
        </div>
      </div>
      <div className="search_box">
        <form className="search">
          <select name="category" id="category">
            <option value="electronics">Electronics</option>
            <option value="all" selected>
              All
            </option>
            <option value="grocery">grocery</option>
          </select>
          <input
            type="text"
            name="query"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <BrowserRouter>
            <Link to={`/search/:${inputValue}`}>
              <button type="submit" className="search_button">
                <SearchOutlined />
              </button>
            </Link>
          </BrowserRouter>
        </form>
      </div>
      <div className="language">
        <img
          src="https://media.gettyimages.com/vectors/flag-of-india-vector-id472317739?s=612x612"
          alt=""
        />
      </div>
      <div className="order">
        Retuens <br /> & orders
      </div>
      <div className="cart">
        <ShoppingCartOutlined />
        Cart
      </div>
    </div>
  );
}

export default Header;
