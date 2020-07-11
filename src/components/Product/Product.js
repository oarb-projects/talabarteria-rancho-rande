import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import "./Product.scss"





class Product extends React.Component{
    constructor(props) {
        super(props);
        // this.handleIncrement = this.handleClick.bind(this);
        // this.handleClick = this.handleClick.bind(this);
        this.state = {
            qty:this.props.qty?this.props.qty:0,
            cartqty:0,
            title:this.props.title,
            cost:this.props.cost,
            img:this.props.img,
            hoverState:false,
            id:this.props.id
        };
        // this.handleIncrement = this.handleClick.bind(this);
        // this.handleClick = this.handleClick.bind(this);
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
                this.setState({
                    cartqty: productToModify.qty
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

    Increment=()=>{
        console.log("incrementing 1")
        let newqty=this.state.qty+1;
        console.log(newqty)
        this.setState({
            qty:newqty
        });
    }

    Decrement=()=>{
        console.log("Decrementing")
        this.setState({
            qty: this.state.qty-1>-1? this.state.qty-1 : 0
        });
    }

    handleIncrement=()=>{
       this.Increment();
    }

    handleKeyIncrement=(event)=>{
        if(event.keyCode === 13){
            this.Increment();
        }
    }

    handleDecrement(){
        this.Decrement();
    }
    
    handleKeyDecrement=(event)=>{
        if(event.keyCode === 13){
            this.Decrement();
        }
    }

    changeHandler = (name, event) => {
        this.setState({
            qty: event.target.value
        });
    }
    // hoverHandler=()=>{
    //     console.log(this.state)
    //     this.setState({
    //         // hoverState:'productContainer active'
    //         hoverState:true 
    //     })
    // }
    // hoverExitHandler=()=>{
    //     // console.log(this.state)
    //     this.setState({
    //         // hoverState:'productContainer active'
    //         hoverState:false 
    //     })
    // }
    render() {
        return (
            <div  className='productContainer' 
                // onMouseEnter={this.hoverHandler.bind(this)}
                // onMouseLeave={this.hoverExitHandler.bind(this)}
                // role="menuitem"
            >   
                <div className="imageContainer">
                    <Link to={this.props.url} tabIndex={(this.props.tabIndex*4)}>
                        <Image src={this.state.img} fluid></Image>
                    </Link>
                </div>
                    <p className="productTitle">{this.state.title}</p>
                    <p className="price">{this.currencyFormat(this.state.cost)}</p>
                    {this.state.cartqty>0 &&
                        <p className="cart-tag">{this.state.cartqty} in cart</p>

                    } 
                    {/* {this.state.hoverState && 
                        <div className="productForm">
                            <div className="qty">
                                <div className="signs" onClick={this.handleDecrement.bind(this)}>
                                    <p>-</p>
                                </div>
                                <div className="qtyinbox">
                                    <p>{this.state.qty} </p>
                                </div>
                                <div className="signs" onClick={this.handleIncrement.bind(this)}>
                                    <p>+</p>
                                </div>           
                            </div>
                            <Button variant="primary" block size="xs" data-id={this.state.id} onClick={this.handleClick}>Buy</Button>
                        </div>
                    } */}
                    <div className="productForm">
                            <div className="qty">
                                <div className="signs" role="button" onClick={this.handleDecrement.bind(this)} onKeyDown={this.handleKeyDecrement.bind(this)} tabIndex={(this.props.tabIndex*4)+1}>
                                    <p>-</p>
                                </div>
                                <div className="qtyinbox">
                                    <p>{this.state.qty} </p>
                                </div>
                                <div className="signs" role="button" onClick={this.handleIncrement.bind(this)} onKeyDown={this.handleKeyIncrement.bind(this)} tabIndex={(this.props.tabIndex*4)+2}>
                                    <p>+</p>
                                </div>           
                            </div>
                        <Button variant="primary" block size="xs" data-id={this.state.id}  tabIndex={(this.props.tabIndex*4)+3} onClick={this.handleClick}>Buy</Button>
                    </div>
                </div>
        );
    }
    
}

export default Product
