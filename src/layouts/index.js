import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Footer from '../components/Footer'
import "bootstrap/dist/css/bootstrap.css";
import './index.css'
import "bootstrap/dist/js/bootstrap.js";

const TemplateWrapper = ({ children }) => (
  <div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossOrigin="anonymous"></script>
    <Helmet
      title="Shuffle Maker Space"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]} >
      <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Space+Mono:400,400i,700" rel="stylesheet" />
      </ Helmet>

    <div>
      {children()}
        <Footer />
    </div>


  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
