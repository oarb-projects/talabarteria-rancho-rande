import React,{useState}from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import logoImage from "../../Assets/Images/logo.png";

import "./Caroussel.scss"

function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    // console.log(props.imgArray)
    return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
        {props.imgArray.map((img, ind) => (
            <Carousel.Item key={ind}>
                <Image   className="desktop-banner" src={img.imgSrc}/>
                <Carousel.Caption>
                    <h3>{img.title}</h3>
                    <p className="subtitle">{img.subtitle}</p>
                </Carousel.Caption>
                <Image id="logo-image" src={logoImage} fluid></Image>
            </Carousel.Item>
          ))}
      </Carousel> 
    );
  }
  
  export default ControlledCarousel;
