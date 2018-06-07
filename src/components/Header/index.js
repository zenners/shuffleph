import React, { Component } from "react";
import Link from "gatsby-link";

const menu = [
  {
    title: 'ABOUT SHUFFLE',
    styles: 'bg-og tx-ma',
    path: '/about',
    isActive: true,
  },
  {
    title: 'UPCOMING EVENTS',
    styles: 'bg-gr tx-bl',
    path: '/events',
    isActive: false,
  },
  {
    title: 'MAKERSPACE',
    styles: 'bg-bl tx-gr',
    path: '/makerspace',
    isActive: false,
  },

  {
    title: 'CO-WORKING SPACE',
    styles: 'bg-ma tx-og',
    path: '/coworking',
    isActive: false,
  },
]

const MenuItem = ({title, styles, path}) => (
  <div className={`col-md-6 ${styles}`}>
  <Link
      to={path}
    >
    <h2 className="md-menu-title"> {title}
    </h2>
  </Link>

  </div>
)

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
          <div className="collapse navbar-collapse" id="navbarResponsive">

            <ul className="navbar-nav ml-auto pl-4">
            <div className="row row-eq-height d-none d-sm-flex">
              {menu.map((item) => (
                <MenuItem title={item.title} styles={item.styles} path={item.path} />
              ))}
            </div>
              <li className="nav-item">
              <Link className="nav-link js-scroll-trigger pr-3" to="../about">About</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link js-scroll-trigger pr-3" to="../events">Events</Link>
              </li>
              <li className="nav-item">
               <Link className="nav-link js-scroll-trigger pr-3" to="../makerspace">MakerSpace</Link>
              </li>
              <li className="nav-item">
               <Link className="nav-link js-scroll-trigger pr-3" to="../coworking">Co-Working Space</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
