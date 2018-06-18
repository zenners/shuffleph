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

                  <span>
                    <span className="text-left footer-content">
                    187 N. Averilla Street San Juan del Monte 1500 /<a href="/">
                      hello@shuffle.ph{" "}
                    </a>
                    / 0995 013 4763 / 02 404 2101
                    </span>
                  <span>
                    <a href="https://www.facebook.com/shufflemakerspace/">
                      <i className="icon-social fab fa-facebook" />
                    </a>
                    <a href="https://www.instagram.com/shufflemakerspace/">
                      <i className="icon-social fab fa-instagram"/>
                    </a>
                  </span>
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
