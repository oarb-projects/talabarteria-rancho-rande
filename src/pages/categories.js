import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Category from "../components/Category/Category"

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import landingImage from "../Assets/Images/leather.png";
import Button from 'react-bootstrap/Button'
const isLoading=false;
const categoryArray=
[
  {
    title:"Monturas",
    img:"https://via.placeholder.com/200x200/F6F6F6/FFFFFF/?text=Monturas"
  },
  {
    title:"Cintos",
    img:"https://via.placeholder.com/200x200/F6F6F6/FFFFFF/?text=Cintos"
  },
  {
    title:"Fundas",
    img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_fundas"
  },
  {
    title:"Fundas Celular",
    img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_fundasCel"
  },
  {
    title:"Chaparreras",
    img:"https://via.placeholder.com/200x200/F6F6F6/FFFFFF/?text=Chaparreras"
  },
  {
    title:"Fundas Pistola",
    img:"https://via.placeholder.com/200x200/F6F6F6/FFFFFF/?text=Fundas Pistola"
  }

]

const handleClick=()=>{
  console.log("you clicked me");
}

const CategoryPage = () => (
  <Layout>
    <SEO title="Category Page" />
    <div>
      <Image src={landingImage} fluid></Image>
    </div>
    <h1>Categorías</h1>
    <Row noGutters>
      {categoryArray.map((category, index) => (
          <Category
            title={category.title}
            img={category.img}
            key={index}
          >
          </Category>
      ))}
    </Row>
    <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >    
        {isLoading ? 'Loading…' : 'Click to load'}
    </Button>
    <Link to="/page-2/">Ver más</Link>

  </Layout>
)

export default CategoryPage
