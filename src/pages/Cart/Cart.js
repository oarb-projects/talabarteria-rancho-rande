import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"    
import Product from "../../components/CartProduct/CartProduct"

// import 'bootstrap/dist/css/bootstrap.min.css';
import "./Cart.scss"

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
]
function updateCounter(data){
  // console.log("here i am")
  // console.log(data)
}
class cartPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        qty:0,
        productArray:[]
    };
  }

  componentDidMount=()=>{
    if(localStorage.getItem('cart')){
      // console.log(this.state.id)
      let arr=JSON.parse(localStorage.getItem('cart'));
      console.log(arr.length)
      this.setState({
        productArray:arr
      })
    }
  }
// const ProductsPage = () => (
  render() {
    return (
      <Layout>
        <SEO title="Cart Page" />
        <div id="content">
              <div id="page-header">
                <h1>Carrito de Compras</h1>
              </div>
              <div id="product-container">
              <p id="imageTitle">Producto</p>
              <p id="quantityTitle">Cantidad</p>
              <p id="priceimageTitle">Precio</p>
              <p id="subtotalTitle">Subtotal</p>
              <hr id="cart"></hr>
                {this.state.productArray.map((product, index) => (
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
  
  export default cartPage
  