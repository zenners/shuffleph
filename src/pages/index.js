import React from 'react'
import Link from 'gatsby-link'

const Icon = ({icon, link}) => (
  <span className="icon">
    <a href={link} >
    <i className={`fab fa-${icon}`}></i>
    </a>
  </span>

)

const IndexPage = () => (
  <div className="row left">
    <div className="col-md-9 left">
      <img className="left" src="Group 40.png" />
    </div>
    <div className="col-md-3">
      <div className="container info">
        <p>info@shuffle.ph</p>
        <p>+63 917 834 9933</p>
        <p>187 N. Averilla Street</p>
        <p>1500 San Juan Del Monte</p>
        <Icon icon="instagram" link="https://www.instagram.com/shufflemakerspace/"/>
        <Icon icon="facebook" link="https://www.facebook.com/shufflemakerspace/"/>


      </div>
    </div>




  </div>
)

export default IndexPage
