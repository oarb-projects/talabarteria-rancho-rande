import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Product from "../components/Product/Product"
import "./products.scss"
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const productArray=
[
  {
    title:"Cinto de piel 1",
    img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_cin_piel_1",
    cost: "1500.00",
    url:"product-1"
  },
  {
    title:"Cinto de piel 2",
    img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_cin_piel_2",
    cost: "1650.00",
    url:"product-2"
  },
  {
    title:"Cinto de piel 3",
    img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_cin_piel_3",
    cost: "850.00",
    url:"product-3"
  },
  {
    title:"Cinto de piel 4",
    img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_cin_piel_4",
    cost: "500.00",
    url:"product-4"
  },
  {
    title:"Cinto de piel 5",
    img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_cin_piel_5",
    cost: "650.00",
    url:"product-5"
  },
  {
    title:"Cinto de piel 6",
    img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_cin_piel_6",
    cost: "8450.00",
    url:"product-6"
  },

]

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

const ProductsPage = () => (
  <Layout>
    <SEO title="Products Page" />
    <div id="content">
      <div id="productMenu">
        <p>Categoria</p>
      </div>
      <div id="product-container">
        {productArray.map((product, index) => (
          <Product
            title={product.title}
            img={product.img}
            cost={product.cost}
            url={product.url}
            key={index}
          >
          </Product>
        ))}
      </div>
    </div>
  </Layout>
)

export default ProductsPage
