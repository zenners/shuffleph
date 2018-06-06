import React from 'react'
import Link from 'gatsby-link'
import MenuItem from '../components/Menuitem'
import img from '../about.jpg'

import Shuffle from '../shuffle-og.png'
import '../layouts/style.css'

import data from '../content/about'

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

const AboutContent = ({title, copy, othercopy, subcopy}) => (
  <div className="">
    <h3 className="tx-ma title-head"> {title} </h3>
    <p className="abt-body"> {copy} </p>
    <div>  <img src={img} />  </div>
    <p className="abt-body">
    {othercopy}
    </p>
    <p className="abt-body"> {subcopy}</p>
  </div>
)

const AboutPage = () => (
  <div>
    <div className="row row-eq-height">
      <div className="col-md-6 no-pad">
        <div className="d-flex flex-column">
        {menu.map((item) => (
          <MenuItem title={item.title} styles={item.styles} path={item.path} isActive={item.isActive} />
        ))}
        </div>

      </div>
      <div className="col-md-6 content-body abt-content">
        <div className="bg-ma text-center">
          <img style={{maxHeight: '307px'}}src={Shuffle}/>
        </div>
        <AboutContent
          title={data.title}
          copy={data.text}
          othercopy={data.subText}
          subcopy={data.secondText}
        />
      </div>
    </div>
  </div>
)

export default AboutPage
