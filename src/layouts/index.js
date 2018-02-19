import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import "bootstrap/dist/css/bootstrap.css"; 
import './index.css'


const TemplateWrapper = ({ children }) => (
  <div>

    <Helmet
      title="Shuffle Maker Space"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]} >
      <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet" />

    </ Helmet>



    <div className="container-fluid"

    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
