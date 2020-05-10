import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from 'react-bootstrap/Image'
import "./Product.scss"

function currencyFormat(num) {
    num=parseFloat(num)
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }

const Product = (props) => (
    <div  className="productContainer" >
        <Link to={props.url}>
            <Image src={props.img} fluid></Image>
        </Link>
        <p className="productTitle">{props.title}</p>
        <p>{currencyFormat(props.cost)}</p>
    </div>
)  
    
export default Product
