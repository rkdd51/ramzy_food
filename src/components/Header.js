import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
const Title = () => {
  return (
    <>
      <div>
        <a href="/">
          <img
            className="logo"
            alt="logo"
            src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"
          />
        </a>
      </div>
    </>
  );
};
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Link to="/">
        <Title />
      </Link>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      {/* {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )} */}
      {
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Login" : "Logout"}
        </button>
      }
    </div>
  );
};

export default Header;
