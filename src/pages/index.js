import React from 'react'
import Link from 'gatsby-link'
import logo from '../Group 40-min.png'
import Shuffle from '../shuffle-og.png'
import "bootstrap/dist/css/bootstrap.css";
import '../layouts/style.css'

const Icon = ({icon, link}) => (
  <span className="icon">
    <a href={link} >
    <i className={`fab fa-${icon}`}></i>
    </a>
  </span>

)

const menu = [
  {
    title: 'ABOUT SHUFFLE',
    styles: 'bg-og tx-ma',
    path: '/about'
  },
  {
    title: 'MAKER SPACE',
    styles: 'bg-bl tx-gr',
    path: '/makerspace'
  },
  {
    title: 'UPCOMING EVENTS',
    styles: 'bg-gr tx-bl',
    path: '/events'
  },
  {
    title: 'CO-WORKING SPACE',
    styles: 'bg-ma tx-og',
    path: '/coworking'
  },
]

const MenuItem = ({title, styles, path}) => (
  <div className={`col-md-6 col-vh-md ${styles}`}>
  <Link
      to={path}
    >
    <h2 className="md-menu-title"> {title}
    </h2>
  </Link>

  </div>
)

const IndexPage = () => (

    <div className="flex-wrap row-eq-height">
      {menu.map((item) => (
        <MenuItem title={item.title} styles={item.styles} path={item.path} />
      ))}
    </div>

)

export default IndexPage
