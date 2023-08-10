import React from "react";
import "./header.css";
import logo from "./main-page-1/logo@3x.png";
import userlogo from "./main-page-1/user.png";
import cart from "./main-page-1/cart.png";
import shop from "./main-page-1/shop.png";
import login from "./main-page-1/Log In.png";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img className="logo" src={logo} />
        </div>
        <ul className="menu">
          <li>
            <a href="#">Section 1</a>
          </li>
          <li>
            <a href="#">Section 2</a>
          </li>
          <li>
            <a href="#">Section 3</a>
          </li>
          <li>
            <a>
              <img src={shop} />
            </a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a href="#"> SingUp </a>
          </li>
          <li>
            <button
              style={{
                backgroundColor: "lightblue",
                width: "70px",
                height: "26px",
              }}
            >
              Log In
            </button>
          </li>
          <li>
            <a>
              <img src={userlogo} />
            </a>
          </li>
          <li>
            <a>
              <img src={cart} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
