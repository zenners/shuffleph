import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <footer className="footer" style={{
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '60px',
    lineHeight: '60px',
    }}>
  <div>
    <div
      style={{
        margin: '0 auto',
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h4 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#212121',
            textDecoration: 'none',
          }}
        >
          187 N. Averilla Street San Juan del Monte 1500 /  hello@shuffle.ph / 0995 013 4763 / 02 404 2101
        </Link>
      </h4>
    </div>
  </div>
  </footer>
)

export default Header
