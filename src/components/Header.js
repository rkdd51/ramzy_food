import React, { useState } from "react";
import "../index.css";
import { NavLink } from "react-router-dom";
const Title = () => {
  return (
    <>
      <div>
        <a href="/">
          <img
            className="w-[80px]"
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
    <div className="flex justify-between border border-slate-700 p-2 m-2  ">
      <NavLink to="/">
        <Title />
      </NavLink>
      <div className="flex gap-2=3">
        <ul className="flex  gap-3 pt-7  ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-fuchsia-400 rounded-lg p-2" : "bg-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "bg-fuchsia-400 rounded-lg p-2" : "bg-white"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "bg-fuchsia-400 rounded-lg p-2" : "bg-white"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/instamart"
              className={({ isActive }) =>
                isActive ? "bg-fuchsia-400 rounded-lg p-2" : "bg-white"
              }
            >
              InstaMart
            </NavLink>
          </li>
          <li>Cart</li>
          <li>
            {
              <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Login" : "Logout"}
              </button>
            }
          </li>
        </ul>
      </div>

      {/* {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )} */}
    </div>
  );
};

export default Header;
