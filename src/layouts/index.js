import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
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
      <link href="https://fonts.googleapis.com/css?family=Space+Mono:400,400i,700" rel="stylesheet" />   
      </ Helmet>



    <div className="container-fluid h-100">
      {children()}
    </div>
    <Footer />

  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
