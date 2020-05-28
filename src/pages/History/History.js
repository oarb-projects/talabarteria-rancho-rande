import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"    
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import BusinessImage from "../../Assets/Images/negocio.jpg";
import funda1 from "../../Assets/Images/History/funda1_opt.jpg";
import funda2 from "../../Assets/Images/History/funda2_opt.jpg";
import cinto1 from "../../Assets/Images/History/cinto1_opt.jpg";
import montura1 from "../../Assets/Images/History/montura1_opt.jpg";

import Slider from "react-slick";

import "./History.scss"
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


var settings = {
  dots: true,
  infinite: true,
  arrows:true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplaySpeed: 2000,
  responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 465,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  // centerPadding:"200px"
};

const HistoryPage = () => (
    <Layout>
      <SEO title="History Page" />
      <div id="content">
        <div id="page-header">
          <h1>Historia</h1>
        </div>
        <p className="information">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
        <Image src={BusinessImage} className="center-cropped"/>
        <p className="information">Fabricamos monturas, cintos, riendas, chaparreras, correones, cabezadas, fundas y muchas cosas más🐎. 
          Reparación en general.
          También contamos con botas camperas y botines, frenos, espuelas, carteras, hebillas, navajas Case, Victorinox, Muela.
          Además, variedad de cuchillos profesionales carniceros y línea doméstica
        </p>
        <Slider {...settings}>
          <div className="slide">
            <Image src={cinto1}/>
          </div>
          <div className="slide">
            <Image src={funda1} />
          </div>
          <div className="slide">
            <Image src={funda2} />
          </div>
          <div className="slide">
            <Image src={montura1} />
          </div>
        </Slider>
      </div>
    </Layout>
  )
  
  export default HistoryPage
  