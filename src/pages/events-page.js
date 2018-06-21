import React from 'react'
import Link from 'gatsby-link'
import MenuItem from '../components/Menuitem'
import Header from '../components/Header'
import img from '../about.jpg'

import Shuffle from '../shuffle-og.png'
import '../layouts/style.css'

import data from '../content/about'

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

const AboutContent = ({title, copy, othercopy, subcopy}) => (
  <div className="">
    <h3 className="tx-ma title-head"> {title} </h3>
    <p className="abt-body"> {copy} </p>
    <div>  <img className="img-fluid" style={{marginBottom: '15.2px'}} src={img} />  </div>
    <p className="abt-body">
    {othercopy}
    </p>
    <p className="abt-body"> {subcopy}</p>
  </div>
)


export default ({ data }) => {
  // console.log("data",data);


var dates = data.allMarkdownRemark.edges.map((item)=>{
   return item.node.frontmatter}).map((item) => {
   return item.dates})

var date = Object.values(dates);


var images = data.allMarkdownRemark.edges.map((item)=>{
   return item.node.frontmatter}).map((item) => {
   return item.image})

var image = Object.values(images);
console.log("image",image);


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


              <div>
              <div className="text-center col-vh-abt">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src={img} alt="First slide"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={img} alt="Second slide"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={img} alt="Third slide"/>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
                </div>
              </div>
              <div className="event-item tx-ma mt-5 pt-5">
                <p className="tx-bl">Learn this Marikina specialized craft with ThePaperPlaneProjectMNL as we pattern,
                cut and stitch coin holders, key holders and cord organizers.  Pick up the different techniques on how
                people create different products and the basic do's and don'ts of leather smithing!
                </p><br />
                <hr className="bg-og" />
              </div>
              </div>
  
          </div>
        <div>
      </div>
    </div>
  </div>
</div>

  );
};

export const query = graphql`
  query IndexQuerys {
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
