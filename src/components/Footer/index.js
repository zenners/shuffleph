import React, { Component } from "react";
import Link from "gatsby-link";

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <footer className="pl-3 pr-5">
        <span className="icon social float-left pr-3"><a href="https://www.instagram.com/shufflemakerspace/">
        <i className="fab fa-instagram mr-2" data-reactid="16"></i></a>
      <a href="https://www.facebook.com/shufflemakerspace/">
        <i className="fab fa-facebook" data-reactid="19"></i></a></span>

          <h4
            className="footer-mrgn"
            style={{
              color: "#000000"
            }}
          >

             187 N. Averilla Street San Juan del Monte 1500 /<a
              href="/"
              style={{
                color: "#000000",
                textDecoration: "none"
              }}
            >
              hello@shuffle.ph{" "}
            </a>
            / 0995 013 4763 / 02 404 2101

          </h4>
        </footer>
      </section>
    );
  }
}

export default Footer;
