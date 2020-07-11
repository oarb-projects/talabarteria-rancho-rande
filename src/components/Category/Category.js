import React from "react"
import Image from 'react-bootstrap/Image'
import "./Category.scss"
import {navigate} from 'gatsby';

const myClickHandler=(titulo,event)=>{
    console.log(event)
    console.log('==titulo')
    console.log("/products/"+titulo)
    navigate("/products/"+titulo); //navigate to edit page
}

const Category = (props) => (
    // onClick={this.handleUpdate.bind(this)
    <div  className="categoryContainer" onClick={myClickHandler.bind(this,props.titulo)}>
        <p>{props.titulo}</p>
        {/* <img src={props.img}></img> */}
        <Image src={props.img} fluid></Image>
        {/* <img src=""></img> */}
    </div>
)  
    
export default Category
