import React from "react";
import "./Footer.css";
const Footer = () => {
  const hrStyle = {
    textAlign: "left",
    marginLeft: 0,
    position: "absolute",
    right: "105px",
    top: "38%",
    width: "85%",
    color: "black",
  };
  return (
    <div>
      <section class=" text-center lastbox">
        <div class="row lastbox1">
          <div class="col lastbox2">
            <a href="/" class="link1">
              Home
            </a>
          </div>
          <div class="col lastbox2">
            <a href="/Login" class="link1">
              Login
            </a>
          </div>
          <div class="col lastbox2">
            <a href="/contact" class="link1">
              Contact
            </a>
          </div>
        </div>
        <hr style={hrStyle} />
        <div class="lastbox3">© 2024 Company, Inc</div>
        <div class="space"></div>
      </section>
    </div>
  );
};

export default Footer;
