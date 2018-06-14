import React, { Component } from "react";
import Link from "gatsby-link";

class Footer extends Component {
  render() {
    return (
      <section className="">
        <footer className="footer">
          <div className="footer-bottom">
            <div className="container mx-0">

              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-6">
                  <span className="float-left" >
                    <a className="text-left footer-content">
                    187 N. Averilla Street San Juan del Monte 1500 /<a href="/">
                      hello@shuffle.ph{" "}
                    </a>
                    / 0995 013 4763 / 02 404 2101
                    </a>
                    <a href="https://www.instagram.com/shufflemakerspace/">
                      <i className="icon-social a fab fa-instagram"/>
                    </a>
                    <a href="https://www.facebook.com/shufflemakerspace/">
                      <i className="icon-social b fab fa-facebook" />
                    </a>
                     <a href="https://www.facebook.com/shufflemakerspace/">
                      <i className="icon-social c fab fa-facebook" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Footer;
