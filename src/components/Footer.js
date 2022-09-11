import React from "react";
import Twitter from "../images/twitter.png";
import Instagram from "../images/instagram.png";
import YouTube from "../images/youtube.png";
import Github from "../images/github.png";

export const Footer = () => {
  return (
    <div className="footer">
      <a href="https://twitter.com/fahad_masood_" target={"_blank"}>
        <img className="icon-large" src={Twitter} alt="" srcset="" />
      </a>
      <a href="https://instagram.com/_confidant_" target={"_blank"}>
        <img className="icon-large" src={Instagram} alt="" srcset="" />
      </a>
      <a href="https://www.youtube.com/c/fahadmasood" target={"_blank"}>
        <img className="icon-large" src={YouTube} alt="" srcset="" />
      </a>
      <a href="https://github.com/fahad-masood" target={"_blank"}>
        <img className="icon-large" src={Github} alt="" srcset="" />
      </a>
    </div>
  );
};
