import React, { Component } from "react";
import Link from "gatsby-link";

const Icon = ({ icon, link }) => (
  <span className="icon">
    <a href={link}>
      <i className={`fab fa-${icon}`} />
    </a>
  </span>
);

const menu = [
  {
    title: "ABOUT SHUFFLE",
    styles: "bg-og tx-ma",
    path: "../about",
    isActive: true
  },
  {
    title: "UPCOMING EVENTS",
    styles: "bg-gr tx-bl",
    path: "../events",
    isActive: false
  },
  {
    title: "MAKERSPACE",
    styles: "bg-bl tx-gr",
    path: "../makerspace",
    isActive: false
  },

  {
    title: "CO-WORKING SPACE",
    styles: "bg-ma tx-og",
    path: "../coworking",
    isActive: false
  }
];

const MenuItem = ({ title, styles, path }) => (
  <li className={`col-md-6 ${styles}`}>
    <Link to={path}>
      <h2 className="md-menu-title sm"> {title}</h2>
    </Link>
  </li>
);

class Header extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-sm navbar-dark fixed-top bg-bl"
        id="navbar-style-dark"
      >
        <div className="container nav">
          <Link className="navbar-brand js-scroll-trigger" to="../">
            ShufflePH
          </Link>
          <button
            className="navbar-toggler mt-2"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive" style={{height: '100vh'}}>
            <ul className="navbar-nav ml-auto mt-5">
              {menu.map(item => (
                <MenuItem
                  title={item.title}
                  styles={item.styles}
                  path={item.path}
                />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
