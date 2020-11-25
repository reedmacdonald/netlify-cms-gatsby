import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
import "./styles.scss";

const Footer = class extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "rgb(245,245,245)",
          borderTopRadius: "25%",
          borderTopLeftRadius: "50%",
          borderTopRightRadius: "50%",
          display: "grid",
          placeItems: "center",
          height: "300px",
        }}
      >
        <div className={"grid-three"} style={{ width: "50%" }}>
          <div>
            <div>About Scholly</div>
            <div>Mission</div>
            <div>Contact Us</div>
            <div>Press</div>
            <div>Careers</div>
            <div>Blog</div>
          </div>
          <div>
            <div>Other</div>
            <div>Submit a Scholarship</div>
            <div>FAQ</div>
            <div>Privacy Policy</div>
            <div>CCPA Request</div>
            <div>Do Not Sell My Personal Information</div>
          </div>
          <div>
            <div>Scholly Logo</div>
            <div>Social Logos</div>
          </div>
        </div>
      </div>
    );
  }
};

export default Footer;
