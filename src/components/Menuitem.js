import React from 'react'
import Link from 'gatsby-link'


const Icon = ({icon, link}) => (
  <span className="icon ">
    <i className={`fas fa-${icon}`}></i>
  </span>

)

const MenuItem = ({title, styles, path, isActive}) => (
  <div className={isActive ? `d-none d-sm-flex div-height col-vh-md ${styles}` : `d-none d-sm-flex col-vh-sm ${styles}`}>
    <Link to={path}>
      <h2 className={isActive ? 'md-menu-title' : 'xsm-menu-title'}>
      {title}

      </h2>
      {!isActive ?  <Icon icon="chevron-right" /> : null}

    </Link>
  </div>
)

export default MenuItem
