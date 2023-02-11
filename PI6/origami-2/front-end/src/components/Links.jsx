import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/workshop-styles.css";

const Links = ({ num }) => {
  return (
    <>
      <li className="listItem">
        <NavLink to="/post"> Post</NavLink>
      </li>
      <li className="listItem">
        <NavLink to="/register"> Register</NavLink>
      </li>
      <li className="listItem">
        <NavLink to="/login"> Login</NavLink>
      </li>
      <li className="listItem">
        <NavLink to="/profile"> Profile</NavLink>
      </li>

      {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
        <li className="listItem">
          <a href="#">########</a>
        </li>
      ))}
    </>
  );
};

export default Links;
