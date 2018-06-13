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
    title: 'MAKER SPACE',
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

// const EventItem = ({index, date, title, by, from, to}) => {
//   const bigger = index == 0 ? 'h1' : ''
//   return (
//     <div className="event-item tx-ma">
//       <h2 className={`${bigger} bold all-caps`}> {date} </h2>
//       <h3 className={`${bigger} bold italic`}> {title} </h3>
//       <h3 className={`${bigger} small italic `}> with {by} </h3>
//       <h4 className=""> {from} to {to} </h4>
//       <h4 className="tx-bl"> LINK TO EVENT </h4>
//       <hr className="bg-og" />
//     </div>
//   )
// }

// const bigger = index == 0 ? 'h1' : '';

// const AboutPage = () => (
//   <div>
//    <Header />
//     <div className="flex-wrap row-eq-height">
//       <div className="col-md-6 no-pad">
//         <div className="d-flex flex-column">
//         {menu.map((item) => (
//           <MenuItem title={item.title} styles={item.styles} path={item.path} isActive={item.isActive} />
//         ))}
//         </div>
//
//       </div>
//       <div className="col-md-6 mtop">
//         <div className="event-container">
//           {data.map((event, index) => (
//             <EventItem index={index} date={event.date} title={event.title} by={event.by}
//                        from={event.from} to={event.to} />
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
// )


// const bigger = index == 0 ? 'h1' : ''
export default ({ data }) => {
  console.log("data",data);

var big = data.allMarkdownRemark.edges.map((item)=>{
  return item.node }).map((item) => {
  return item.frontmatter})
var biggest = Object.keys(big).map(function (key, index) {
return big[key].title})
var Bogger= Object.values(biggest)[0];

console.log("BIGGEST", biggest);
console.log("BOGGER", Bogger);



var big = data.allMarkdownRemark.edges.map((item)=>{
   return item.node.frontmatter
})
var bigger = big.map((item) => {
   return item.adates}).map((item) => {
   return item.bdates
})

var biggest = Object.values(bigger);

console.log("BIGGER", bigger);
console.log("BIGGEST", biggest);

var sample = Object.keys(bigger).map(function (key) {
    return bigger[key]
})

console.log("SAMPLE", sample);

  return (
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
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id}>
              <div className="event-item tx-ma">
                <h2 className={`initialism bold all-caps`}>{node.frontmatter.date}</h2>
                <p className="tx-bl"></p>
                <h3 className={`${Bogger==node.frontmatter.title ? 'h2' : ''} bold italic`}>{node.frontmatter.title}</h3>
                <h3 className={`small italic`}> with {node.frontmatter.by}</h3>
                <h4 className="">{node.frontmatter.start} to {node.frontmatter.end}</h4>
                <p className="tx-bl">{node.excerpt}</p><br />
                <h4 className="tx-bl"> LINK TO EVENT </h4>
                <hr className="bg-og" />
              </div>
              </div>
            ))}
          </div>
        <div>
      </div>
    </div>
  </div>
</div>

  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC } limit: 4,
    filter: {fileAbsolutePath: {regex: "/(events)/.*\\.md$/"}}) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            by
            start
            end
            adates{
               bdates{
                 date
               }
             }
          }
           excerpt(pruneLength: 400)
        }
      }
    }
  }`;
