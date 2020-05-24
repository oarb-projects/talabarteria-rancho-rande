import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Product from "../../components/Product/Product"
// bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./custom.scss"

const productArray=
[
  {
    id:'101',
    title:"Cinto de piel 1",
    img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_cin_piel_1",
    cost: "1500.00",
    url:"/product-1"
  },
  {
    id:'102',
    title:"Cinto de piel 2",
    img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_cin_piel_2",
    cost: "1650.00",
    url:"/product-2"
  },
  {
    id:'103',
    title:"Cinto de piel 3",
    img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_cin_piel_3",
    cost: "850.00",
    url:"/product-3"
  },
  {
    id:'104',
    title:"Cinto de piel 4",
    img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_cin_piel_4",
    cost: "500.00",
    url:"/product-4"
  },
  {
    id:'105',
    title:"Cinto de piel 5",
    img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_cin_piel_5",
    cost: "650.00",
    url:"/product-5"
  },
  {
    id:'106',
    title:"Cinto de piel 6",
    img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_cin_piel_6",
    cost: "8450.00",
    url:"/product-6"
  },
  {
    id:'107',
    title:"Cinto de piel 7",
    img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_cin_piel_7",
    cost: "8450.00",
    url:"/product-7"
  },
  {
    id:'108',
    title:"Cinto de piel 8",
    img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_cin_piel_8",
    cost: "8450.00",
    url:"/product-8"
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
function updateCounter(data){
  // console.log("here i am")
  // console.log(data)
}

class ProductsPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        qty:0,
    };
  }

// const ProductsPage = () => (
  render() {
    return (
        <Layout qty={this.state.qty}>
        <SEO title="Products Page" />
        <div id="content">
          <div id="page-header">
            <h1>Cintos de piel</h1>
          </div>
          <div id="product-container">
            {productArray.map((product, index) => (
              <Product
                title={product.title}
                img={product.img}
                cost={product.cost}
                url={product.url}
                id={product.id}
                key={index}
                newFunction={updateCounter}
              >
              </Product>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}
export default ProductsPage
