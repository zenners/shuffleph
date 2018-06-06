import React from 'react'
import Link from 'gatsby-link'


const Icon = ({icon, link}) => (
  <span className="icon ">
    <i className={`fas fa-${icon}`}></i>
  </span>

)

const MenuItem = ({title, styles, path, isActive}) => (
  <div className={`${styles}`}>
    <Link to={path}>
      <h2 className={isActive ? 'menu-title' : 'sm-menu-title'}>
      {title}

      </h2>
      {!isActive ?  <Icon icon="chevron-right" /> : null}

    </Link>
  </div>
)

export default MenuItem
