import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Image from 'react-bootstrap/Image'
import titleImage from "../../Assets/Images/title.png";
import Collapse from 'react-bootstrap/Collapse'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faSearch,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {SlideDown} from 'react-slidedown'
import Badge from 'react-bootstrap/Badge'
import 'react-slidedown/lib/slidedown.css'
import "./Header.scss"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: true,
      itemsInCart:0
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    console.log('The link was clicked.');
    console.log((this.state.openMenu))
    this.setState(state => ({
      openMenu: !state.openMenu
    }));
  }

  componentDidMount() {
    console.log("====mounted header")
    if(localStorage.getItem('cart')){
        // console.log(this.state.id)
        let arr=JSON.parse(localStorage.getItem('cart'));
        console.log(arr.length)
        this.setState({
          itemsInCart:arr.length
        })
    }
  }
  render() {
    return(
      <header id="mainHeader">
        <div id="navbar" style={{width:"100%"}}>
          <div id="hamContainer">
            <a onClick={this.handleClick}>
              <FontAwesomeIcon icon={faBars} size="2x" style={{color:"white",marginRight:"20px"}} />
            </a>
          </div>
          <div id="ImageContainer">
            <Link to="/">
              <Image id="titleImage" src={titleImage} fluid></Image>
            </Link>
          </div>
          <div id="iconContainer" >
            <FontAwesomeIcon id="search" icon={faSearch} size="2x" style={{color:"white",marginRight:"20px"}} />
            <Link to="/Cart">
              <FontAwesomeIcon icon={faShoppingCart} size="2x" style={{color:"white"}} />
            </Link>
            <Badge className="ml-2" variant="light">{this.state.itemsInCart}</Badge>
          </div>
        </div>

        {/* <Collapse in={this.state.openMenu}> */}
        <SlideDown closed={this.state.openMenu}>
          <div id="menu">
            <div className="menu-column">
              <div className="pageLink">
                <Link to="/History/">Historia</Link>
              </div>
              {/* <div className="pageLink">             
                <Link to="/Reviews/">Testimonios</Link>
              </div> */}
              <div className="pageLink">             
                <Link to="/Capacity/">Capacidad de Produccion</Link>
              </div>
            </div>
            <div className="menu-column">
              <div className="pageLink">
                <Link to="/Policies/">Políticas de empresa</Link>
              </div>
              <div className="pageLink">             
                <Link to="/Special/" style={{textDecoration:"underline",fontWeight:"bold"}}>Pedido Especial</Link>
              </div>
              {/* <div className="pageLink">             
                <Link to="/BuyExperience/">Aprende a comprar en línea</Link>
              </div> */}
            </div>
            <div className="menu-column">
              <Link to="/Contact/">Contacto</Link>
            </div>
          </div>
        </SlideDown>
        {/* </Collapse> */}
      </header>
      )

  }
}
// const Header = ({ siteTitle }) => (
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

  //  {/* <div
  //         style={{
  //           margin: `0 auto`,
  //           maxWidth: 960,
  //           padding: `1.45rem 1.0875rem`,
  //         }}
  //       >
  //         <h1 style={{ margin: 0 }}>
  //           <Link
  //             to="/"
  //             style={{
  //               color: `white`,
  //               textDecoration: `none`,
  //             }}
  //           >
  //             {siteTitle}
  //           </Link>
  //         </h1>
  //       </div>

export default Header
