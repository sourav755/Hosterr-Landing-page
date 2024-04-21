import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-12 md:flex-row md:justify-between">
      <ul className="flex gap-6 text-gray-400 font-lato justify-around">
        <li>
          <a href="https://www.facebook.com/">Facebook</a>
        </li>
        <li>
          <a href="https://www.instagram.com/">Instagram</a>
        </li>
        <li>
          <a href="https://www.twitter.com/">Twitter</a>
        </li>
      </ul>

      <div className="flex gap-2">
        <img src="./images/hlpavtr.svg" alt="" />
        <div>
          <p className="font-playfair font-thin">Have any Questions?</p>
          <a href="#" className="font-lato font-medium">
            Talk to a Specialist
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
