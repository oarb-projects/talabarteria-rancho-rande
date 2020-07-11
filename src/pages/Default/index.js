import React, {  Component } from "react";
// import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Category from "../../components/Category/Category"

import ControlledCarousel from "../../components/Caroussel/Caroussel"
import './custom.scss'

import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import landingImage from "../../Assets/Images/leather.png";
// import logoImage from "../../Assets/Images/logo.png";
import safeImage from "../../Assets/Images/Online/SafeSales.jpg"
import warehouseImage from "../../Assets/Images/Online/warehouse.jpg"
import styleImage from "../../Assets/Images/Online/style.jpg"
import tb1 from "../../Assets/Images/Banners/talabartero1.jpg";
import tb2 from "../../Assets/Images/Banners/talabartero2.jpg"
import tb3 from "../../Assets/Images/Banners/talabartero3.jpg"
// import tb4 from "../../Assets/Images/Banners/talabartero4.jpg"

import Button from 'react-bootstrap/Button'

import "./index.scss"

// const categoryArray=
// [
//   {
//     title:"Monturas",
//     img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_Monturas"
//   },
//   {
//     title:"Cintos",
//     img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_Cintos"
//   },
//   {
//     title:"Fundas",
//     img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_fundas"
//   },
//   {
//     title:"Fundas Celular",
//     img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_fundasCel"
//   },
//   {
//     title:"Chaparreras",
//     img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_Chaparreras"
//   },
//   {
//     title:"Fundas Pistola",
//     img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_Fundas_Pistola"
//   }
// ]

const imgArray=[
  {
    imgSrc:landingImage,
    title:'Recoge tu pedido en tienda',
    subtitle:'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  },
  {
    imgSrc:tb2,
    title:'Compra en línea 100% confiables',
    subtitle:'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  },
  {
    imgSrc:tb3,
    title:'Third Slide Label',
    subtitle:'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  },
  {
    imgSrc:tb1,
    title:'Fourth Slide Label',
    subtitle:'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  }
]



// const IndexPage = () => (
class IndexPage  extends Component {

  constructor(props){
    super(props);
    // const categories = props.data.allMongodbTalabarteriadbCategories.edges;
    const queriedCategories=props.data.talabarteria.categories
    console.log("==categories")
    console.log(queriedCategories)
    this.state={
      categories:queriedCategories
    }
  }

  componentDidMount() {
    // let newUrl= 'http://localhost:3000/api/categories'
    //   fetch(newUrl, {
    //     method: 'GET', // or 'PUT'
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log("===Fetch Result")
    //     console.log('Success:', data);
    //     let receivedCategories=data;
    //     let nondbCat={
    //           title:"Fundas Pistola",
    //           img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_Fundas_Pistola"
    //       }
    //     data.push(nondbCat)
    //     this.setState({
    //       categories:data
    //     })
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  }

  render(){
    return(
      <Layout>
      <SEO title="Home" />
      {/* <div style={{position:"relative"}}>
        <Image src={landingImage} fluid></Image>
        <Image id="logo-image" src={logoImage} fluid></Image>
      </div> */}
      <ControlledCarousel
        imgArray={imgArray}
      />
      <div id="content">
        <p className="title">Categoría</p>
        <div id="categories-container">
          {this.state.categories.map((category, index) => (
            <Category
              titulo={category.titulo}
              img={category.img}
              id={category._id}
              key={index}
            >
            </Category>
          ))}
        </div>

        <Row noGutters className="justify-content-center" style={{marginBottom:"5vh"}}>
        <div className="col-4">
          <Button
              variant="primary"
              href="/products"
            >Ver más
          </Button>
        </div>
        </Row>

        <p className="title" style={{textAlign:"center"}}>Compra en línea</p>

        <div id="online-container">
          <div className="onlineDiv">
            {/* <Image src={safeImage} fluid></Image> */}
            <Image src={safeImage} alt="safe" className="center-cropped"/>
            <p className="onlineTitle" >Purchase securely</p>
            <p className="onlineDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="onlineDiv">
            {/* <Image src={warehouseImage} fluid></Image> */}
            <Image src={warehouseImage} alt="warehouse" className="center-cropped"/>
            <p className="onlineTitle">Ships from Warehouse</p>
            <p className="onlineDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="onlineDiv">
            <img src={styleImage} alt="style" className="center-cropped"/>
            <p className="onlineTitle">Style your room</p>
            <p className="onlineDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>

      </div>

    </Layout>
    )
  }
}
// }
// export const pageQuery = graphql`
// query {
//   allMongodbTalabarteriadbCategories{
//     edges{
//       node{
//         title
//         id
//         mongodb_id
//       }
//     }
//   }
// }
// `

export const pageQuery=graphql`
  query MyQuery {
    talabarteria {
      categories {
        id
        img
        titulo
        products {
          price
          titulo
          imagen
          }
        }
    }
  }
`
export default IndexPage
