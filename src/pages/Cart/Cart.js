import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"    
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Cart.scss"


const ProductsPage = () => (
    <Layout>
      <SEO title="Cart Page" />
      <div id="content">
        <p className="title">Carrito de compras</p>
      </div>
    </Layout>
  )
  
  export default ProductsPage
  