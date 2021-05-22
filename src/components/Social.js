import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Social = () => {
  return (
    <div className="social">
      <div className="title">
        <h3>Get In Touch!</h3>
      </div>
      <div className="links">
        <a href="https://facebook.com">
          <FaFacebookF size={15} />
        </a>
        <a href="https://twitter.com">
          {" "}
          <FaTwitter size={15} />
        </a>
        <a href="https://instagram.com">
          {" "}
          <FaInstagram size={15} />
        </a>
        <a href="mailto:giamarqueses@gmail.com">
          <SiGmail size={15} />
        </a>
      </div>
    </div>
  );
};

export default Social;
