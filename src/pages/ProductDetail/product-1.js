import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"    
// import Product from "../../components/Product/Product"
import "./product-detail.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./product-detail.scss"
import ImageGallery from 'react-image-gallery';
import "./imagegallery.scss"
// import "~react-image-gallery/styles/css/image-gallery.css";
// import "react-image-gallery/styles/css/image-gallery.cs"
const images = [
{
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
},
{
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
},
{
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
},
];
function currencyFormat(num) {
    num=parseFloat(num)
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }
const ProductsPage = () => (
    <Layout>
      <SEO title="Products Page" />
      <div id="content">
        <div id="details">
            <div id="imagesContainer">
                <ImageGallery items={images} 
                    showPlayButton={false}
                    showNav={false}
                />
            </div>
            <div id="descriptionContainer">
                <p id="title">Cinto de Piel 1</p>
                <p id="description">Bacon ipsum dolor amet hamburger landjaeger meatloaf, pancetta fatback sausage strip steak pork belly picanha capicola boudin shank kielbasa tenderloin. Tri-tip leberkas boudin shank ground round, shoulder short loin salami hamburger burgdoggen tail biltong tenderloin. Rump alcatra chislic, frankfurter kevin
                 cow picanha meatloaf tenderloin pork turkey. Ham landjaeger bresaola chuck
                </p>
                <p id="Price">Precio</p>
                <span>{currencyFormat(1500)}</span>
            </div>
        </div>
      </div>
    </Layout>
  )
  
  export default ProductsPage
  