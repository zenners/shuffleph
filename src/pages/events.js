import React from 'react'
import Link from 'gatsby-link'
import MenuItem from '../components/Menuitem'
import Header from '../components/Header'
import logo from '../Group 40-min.png'
import '../layouts/style.css'
import data from '../content/event'


const menu = [
  {
    title: 'ABOUT SHUFFLE',
    styles: 'bg-og tx-ma',
    path: '/about',
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
  {
    title: 'UPCOMING EVENTS',
    styles: 'bg-gr tx-bl',
    path: '/events',
    isActive: true,
  },
]

const EventItem = ({index, date, title, by, from, to}) => {
  const bigger = index == 0 ? 'h1' : ''
  return (
    <div className="event-item tx-ma">
      <h2 className={`${bigger} bold all-caps`}> {date} </h2>
      <h3 className={`${bigger} bold italic`}> {title} </h3>
      <h3 className={`${bigger} small italic `}> with {by} </h3>
      <h4 className=""> {from} to {to} </h4>
      <h4 className="tx-bl"> LINK TO EVENT </h4>
      <hr className="bg-og" />
    </div>
  )
}


const AboutPage = () => (
  <div>
   <Header />
    <div className="flex-wrap row-eq-height">
      <div className="col-md-6 no-pad">
        <div className="d-flex flex-column">
        {menu.map((item) => (
          <MenuItem title={item.title} styles={item.styles} path={item.path} isActive={item.isActive} />
        ))}
        </div>

      </div>
      <div className="col-md-6 mtop">
        <div className="event-container">
          {data.map((event, index) => (
            <EventItem index={index} date={event.date} title={event.title} by={event.by}
                       from={event.from} to={event.to} />
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default AboutPage
