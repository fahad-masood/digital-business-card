import React from "react";
import Photo from "../images/about-me.jpg";
import Email from "../images/email.png";
import LinkedIn from "../images/linkedin.png";

export const Info = () => {
  return (
    <>
      <img className="image-container" src={Photo} alt="" />
      <h1 className="info-name">Fahad Masood</h1>
      <h3 className="info-title">Frontend Developer</h3>
      <a
        className="info-website"
        href="https://fahadmasood.com"
        target="_blank"
      >
        fahadmasood.com
      </a>
      <div className="button">
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJbPnRGBZdWMftsrSMWgNkLJGTmBGrVfwVrwwtMpLkplGPTqpsQZdGZdcbSsTCdjDLWg"
          target="_blank"
        >
          <button className="btn btn-light">
            <img className="icon" src={Email} alt="" srcset="" /> Email
          </button>
        </a>

        <a href="https://linkedin.com/in/fahad--masood" target="_blank">
          <button className="btn btn-contrast">
            <img className="icon" src={LinkedIn} alt="" srcset="" />
            LinkedIn
          </button>
        </a>
      </div>
    </>
  );
};
