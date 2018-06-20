import React from 'react'
import Link from 'gatsby-link'
import MenuItem from '../components/Menuitem'
import Header from '../components/Header'
import logo from '../Group 40-min.png'
import '../layouts/style.css'



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


export default ({ data }) => {
  // console.log("data",data);


var dates = data.allMarkdownRemark.edges.map((item)=>{
   return item.node.frontmatter}).map((item) => {
   return item.dates})

var date = Object.values(dates);
// console.log("date",date);

//
// date.map((item, index) => {
//   // console.log("SECTION: ", index)
//   item.map(i =>  i.date )
// })
const { edges: posts } = data.allMarkdownRemark
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
            {data.allMarkdownRemark.edges.map(({ node, post }, index) => (
              <div key={node.id}>
              <div className="event-item tx-ma">
                <div className={`${index == 0 ? 'h4' : 'd-display'} event-item tx-ma`}>
                  {date[index].map(item => <h2 className={`initialism bold all-caps mr-2 text-left list-inline-item `}><li>{item.date}</li></h2>)}
                </div>
                <div>
                <h3 className={`${index == 0 ? 'h2' : ''} bold italic`}>{node.frontmatter.title}</h3>
                </div>
                <h3 className={`small italic`}> with {node.frontmatter.by}</h3>
                <h4 className="">{node.frontmatter.start} to {node.frontmatter.end}</h4>
                <p className="tx-bl">{node.excerpt}</p><br />
                <h4 className="tx-bl"><Link to="../events-page"> LINK TO EVENT </Link> </h4>
          
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC } limit: 4,
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
            image{
              images
            }
            dates{
              date
            }
          }
           excerpt(pruneLength: 400)
        }
      }
    }
  }`;
