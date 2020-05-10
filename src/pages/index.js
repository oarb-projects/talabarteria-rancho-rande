import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Category from "../components/Category/Category"

// bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import landingImage from "../Assets/Images/leather.png";
import logoImage from "../Assets/Images/logo.png";
import Button from 'react-bootstrap/Button'
import "./index.scss"
const categoryArray=
[
  {
    title:"Monturas",
    img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_Monturas"
  },
  {
    title:"Cintos",
    img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_Cintos"
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
    img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_Chaparreras"
  },
  {
    title:"Fundas Pistola",
    img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_Fundas_Pistola"
  }

]
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{position:"relative"}}>
      <Image src={landingImage} fluid></Image>
      <Image id="logo-image" src={logoImage} fluid></Image>
    </div>
    <div id="content">
      <p className="title">Categoría</p>
      <div class="categories-container">
        {categoryArray.map((category, index) => (
          <Category
            title={category.title}
            img={category.img}
          >
          </Category>
        ))}
      </div>
      
      <Row noGutters className="justify-content-md-center" style={{marginBottom:"5vh"}}>
       <div className="col-4">
        <Button
            variant="primary"
            href="/categories"
          >Ver más   
        </Button>
       </div>
      </Row>
    </div>
    <p className="title" style={{textAlign:"center"}}>Compra en línea</p>

  </Layout>
)

export default IndexPage
