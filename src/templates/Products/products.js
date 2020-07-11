import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Product from "../../components/Product/Product"
// bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql } from "gatsby"
import "./custom.scss"

// const productArray=
// [
//   {
//     id:'101',
//     title:"Cinto de piel 1",
//     img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_cin_piel_1",
//     cost: "1500.00",
//     url:"/product-1"
//   },
//   {
//     id:'102',
//     title:"Cinto de piel 2",
//     img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_cin_piel_2",
//     cost: "1650.00",
//     url:"/product-2"
//   },
//   {
//     id:'103',
//     title:"Cinto de piel 3",
//     img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_cin_piel_3",
//     cost: "850.00",
//     url:"/product-3"
//   },
//   {
//     id:'104',
//     title:"Cinto de piel 4",
//     img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_cin_piel_4",
//     cost: "500.00",
//     url:"/product-4"
//   },
//   {
//     id:'105',
//     title:"Cinto de piel 5",
//     img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_cin_piel_5",
//     cost: "650.00",
//     url:"/product-5"
//   },
//   {
//     id:'106',
//     title:"Cinto de piel 6",
//     img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_cin_piel_6",
//     cost: "8450.00",
//     url:"/product-6"
//   },
//   {
//     id:'107',
//     title:"Cinto de piel 7",
//     img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_cin_piel_7",
//     cost: "8450.00",
//     url:"/product-7"
//   },
//   {
//     id:'108',
//     title:"Cinto de piel 8",
//     img:"https://via.placeholder.com/200x200/F6F6F6/000000/?text=img_cin_piel_8",
//     cost: "8450.00",
//     url:"/product-8"
//   },

// ]



function updateCounter(data){
  // console.log("here i am")
  // console.log(data)
}

class ProductsPage extends React.Component{
  constructor(props) {
    super(props);
  
    console.log("===props")
    console.log(props.pageContext )
    let existentProducts=this.props.data.talabarteria.productsInCategories
    existentProducts=existentProducts.map((existentProduct)=>{
      return {
        ...existentProduct,
        url:"/"
      }
    })
    console.log(existentProducts)

    this.state = {
      qty:0,
      products:existentProducts,
    };

  }

  // componentDidMount=()=>{

  // }
// const ProductsPage = () => (
  render() {
    const category = this.props.data.mongodbTalabarteriadbCategories
    // console.log(category)
    return (
      <Layout qty={this.state.qty}>
        <SEO title="Products Page" />
        <div id="content">
          <div id="page-header">
            {/* <h1>Cintos de piel</h1> */}
            <h1>{this.props.pageContext.title}</h1>
            {/* <h1>{category.titulo?category.titulo:''}</h1> */}
            <div id="product-container">
            {this.state.products.map((product, index) => (
              <Product
                title={product.title}
                img={product.imagen}
                cost={product.price}
                url={product.url}
                id={product.id}
                key={index}
                tabIndex={index}
                newFunction={updateCounter}
              >
              </Product>
            ))}
            </div> 
          </div>
        
        </div>
      </Layout>
    )
  }
}
export default ProductsPage
{/* <div id="product-container">
{productArray.map((product, index) => (
  <Product
    title={product.title}
    img={product.img}
    cost={product.cost}
    url={product.url}
    id={product.id}
    key={index}
    tabIndex={index}
    newFunction={updateCounter}
  >
  </Product>
))}
</div> 
productsInCategories(categoryId: ID!): [SWAPI_Product]


*/

}

export const  query = graphql`
  query productsInCategories($categoryId: String!) {
    talabarteria {
      productsInCategories(categoryId:$categoryId) {
        id    
        descripcion
        title
        imagen
        price
      }
    }
  }
`
