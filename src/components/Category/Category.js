import React from "react"
import Image from 'react-bootstrap/Image'
import "./Category.scss"

const Category = (props) => (
    <div  className="categoryContainer" >
        <p>{props.title}</p>
        {/* <img src={props.img}></img> */}
        <Image src={props.img} fluid></Image>
        {/* <img src=""></img> */}
    </div>
)  
    
export default Category
