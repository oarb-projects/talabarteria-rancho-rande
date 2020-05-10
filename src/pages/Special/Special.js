import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"    
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Special.scss"


const ProductsPage = () => (
    <Layout>
      <SEO title="Special Page" />
      <div id="content">
        <p className="title">Pedido Especial</p>
      </div>
    </Layout>
  )
  
  export default ProductsPage
  