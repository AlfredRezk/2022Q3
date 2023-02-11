import React from "react";
import Link from "./Links";
import "../assets/workshop-styles.css";
import blueBird from "../assets/blue-origami-bird-flipped.png";

const Footer = () => {
  return (
    <footer className="Footer">
      <ul>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num, index) => (
          <Link key={index.toString()} num={num} />
        ))}

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
