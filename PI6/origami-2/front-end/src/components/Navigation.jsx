import React from "react";
import "../assets/workshop-styles.css";
import Links from "./Links";
import whiteBird from "../assets/white-origami-bird.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="Navigation">
      <ul>
        <li className="listItem">
          <NavLink to="/">
            <img src={whiteBird} alt="White Orgami" />
          </NavLink>
        </li>
        <Links/>
      </ul>
    </nav>
  );
};

export default Navigation;
