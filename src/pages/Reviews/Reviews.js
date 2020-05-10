import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"    
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Reviews.scss"


const ProductsPage = () => (
    <Layout>
      <SEO title="Reviews Page" />
      <div id="content">
        <p className="title">Testimonios</p>
      </div>
    </Layout>
  )
  
  export default ProductsPage
  