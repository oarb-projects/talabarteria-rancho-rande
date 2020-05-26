import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Swal from 'sweetalert2'
import "./CartProduct.scss"





class Product extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            qty:this.props.qty?this.props.qty:0,
            cartqty:0,
            title:this.props.title,
            cost:this.props.cost,
            id:this.props.id,
            subtotal:0
        };
    }

    componentDidMount() {
        console.log("====mounted product")
        if(localStorage.getItem('cart')){
            console.log(this.state.id)
            let arr=JSON.parse(localStorage.getItem('cart'));
            let productLocation = arr.findIndex(product => product.id === this.state.id);
            console.log(productLocation)
            if(productLocation !== -1){
                console.log("found")
                let productToModify=arr[productLocation]
                console.log(productToModify)
                // console.log("====subtotal")
                let subtotal=productToModify.qty*productToModify.cost
                // console.log(subtotal)
                this.setState({
                    cartqty: productToModify.qty,
                    subtotal:subtotal
                })
            }
        }
        // const rememberMe = localStorage.getItem('rememberMe') === 'true';
        // const user = rememberMe ? localStorage.getItem('user') : '';
        // this.setState({ user, rememberMe });
    }
 
    handleClick=()=>{
        // localStorage.removeItem('cart');
        // console.log("Adding to Cart")
        // console.log(this.state)
        this.props.newFunction(this.state);
        let arr;
        if(localStorage.getItem('cart')){
            arr=JSON.parse(localStorage.getItem('cart'));
        }
        else{
            arr=[]
        }
        var productLocation = arr.findIndex(product => product.id === this.state.id);
 
        if(productLocation === -1){
            /*Non existing product in Cart*/
            if(this.state.qty>0){
                /*more than 1 of qty*/
                arr.push(this.state)
                localStorage.setItem('cart',JSON.stringify(arr))
                this.setState((state)=>{
                    return{
                    cartqty:state.qty
                     }
                 });
            }
         
        }
        else{
            /*updateQuantity*/
            console.log("===located")
            let productToModify=arr[productLocation]
            productToModify.qty=productToModify.qty+this.state.qty
            console.log(productToModify)
            localStorage.setItem('cart',JSON.stringify(arr))
            this.setState({
                cartqty: productToModify.qty
            })
        }
        console.log("=====current cart")
        console.log(arr)
    }

    currencyFormat(num) {
        num=parseFloat(num)
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    handleIncrement=()=>{
        // let subtotal=cost*this.state.cartqty
        this.setState((state)=>{
            return{
                cartqty:state.cartqty+1,
                subtotal:state.cost*(state.cartqty+1)
            }
        });
    }

    handleDecrement(){
        this.setState((state)=>{
            return{
                cartqty:state.cartqty-1>-1? this.state.cartqty-1 : 0,
                subtotal:state.cost*(state.cartqty-1>-1? this.state.cartqty-1 : 0)
            }
        });
    }

    handleUpdate(){
        console.log("updating")
        if(localStorage.getItem('cart')){
            let arr=JSON.parse(localStorage.getItem('cart'));
            console.log(this.state)
            var productLocation = arr.findIndex(product => product.id === this.state.id);
            if(productLocation === -1){

            }
            else{
                console.log(arr[productLocation])
                console.log(this.state.cartqty)
                arr[productLocation].qty=this.state.cartqty
                localStorage.setItem('cart',JSON.stringify(arr))
            }
        }
    }

    handleRemove(){
        console.log("removing")
        if(localStorage.getItem('cart')){
            let arr=JSON.parse(localStorage.getItem('cart'));
            console.log(this.state)
            var productLocation = arr.findIndex(product => product.id === this.state.id);
            if(productLocation === -1){

            }
            else{
                Swal.fire({
                    title: '¿Está seguro de eliminar?',
                    // text: 'User will have Admin Privileges',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33', 
                    confirmButtonText: 'Si!',
                    cancelButtonText: 'No!'
                 }).then((result) => {
                    if(result.value){
                        //  this.props.submitUser(this.state)
                        console.log("removed")
                        console.log(arr[productLocation])
                        arr.splice(productLocation, 1);
                        localStorage.setItem('cart',JSON.stringify(arr))
                        // console.log(this.state.cartqty)
                        // arr[productLocation].qty=this.state.cartqty
                        // localStorage.setItem('cart',JSON.stringify(arr))
                   }
                 })
            }
        }
    }

    render() {
        return (
            <>
                <div  className='cartProductContainer'>   
                    <div className="imageContainer">
                            <Link to={this.props.url}>
                                <Image src={this.props.img}></Image>
                            </Link>
                        </div>
                    <div className="productContent">
                        <p className="productTitle">{this.state.title}</p> 
                        {/* <p>new info</p> */}
                    </div>
                    <div className="productForm">
                        <div className="remove" onClick={this.handleRemove.bind(this)}>
                            <p>remove</p>
                        </div>
                        <div className="qty">
                            <div className="signs" onClick={this.handleDecrement.bind(this)}>
                                <p>-</p>
                            </div>
                            <div className="qtyinbox">
                                <p>{this.state.cartqty}</p>
                            </div>
                            <div className="signs" onClick={this.handleIncrement.bind(this)}>
                                <p>+</p>
                            </div>           
                        </div>
                        <div className="update" onClick={this.handleUpdate.bind(this)}>
                            <p>update</p>
                        </div>
                    </div>
                    <div className="priceContainer">
                        <p className="price"><span className="mobileLabel">Precio: </span>{this.currencyFormat(this.state.cost)}</p>
                    </div>
                    <div className="subtotalContainer">
                        <p className="subtotal"><span className="mobileLabel">Subtotal:</span>{this.currencyFormat(this.state.subtotal)}</p>
                    </div>

                </div>
                <hr className="productLine">
                </hr>
            </>
        );
    }
    
}

export default Product
