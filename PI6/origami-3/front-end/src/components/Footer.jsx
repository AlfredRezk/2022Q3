import React from "react";
import Link from "./Links";
import "../assets/workshop-styles.css";
import blueBird from "../assets/blue-origami-bird-flipped.png";
import Links from "./Links";

const Footer = ({isAuth, setIsAuth}) => {
  return (
    <footer className="Footer">
      <ul>
          <Links  isAuth={isAuth} setIsAuth = {setIsAuth}/>

        <li className="listItem">
          <a href="#">
            <img src={blueBird} alt="" />
          </a>
        </li>
      </ul>
      <p> Software University &copy; 2023</p>
    </footer>
  );
};

export default Footer;
