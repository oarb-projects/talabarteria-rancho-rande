import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faSpinner } from '@fortawesome/free-solid-svg-icons'
import {faFacebookF,faWhatsapp,faTwitter} from '@fortawesome/free-brands-svg-icons'
const Footer = ({ siteTitle }) => (
  <footer  id="main-footer"
    style={{
      backgroundColor:`#671a12`
    }}
  >
    <div id="left-side">
        <p id="Nombre">Rancho Grande Talabartería</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
            a galley of type and scrambled it to make a type specimen book. </p>
        <p id="Copyright">Copyright &copy; 2020 Rancho Grande Talabartería. All rights reserved</p>
    </div>
    <div id="right-side">
        <p id="links" appear>
            {/* <FontAwesomeIcon icon={faCoffee} size="1x" mr-2/> */}
            <a href="https://www.facebook.com/TRG1949" style={{color:"white"}}>             
                <FontAwesomeIcon icon={faFacebookF} size="1x"/>
            </a>
            <a href="https://www.facebook.com/TRG1949" style={{color:"white"}}>
                <FontAwesomeIcon icon={faWhatsapp}size="1x"/>             
            </a>
            <a href="https://www.facebook.com/TRG1949" style={{color:"white"}}>
                <FontAwesomeIcon icon={faTwitter} size="1x"/>
            </a>
            {/* <FontAwesomeIcon icon={faSpinner} size="2x" spin/> */}
            {/* <FontAwesomeIcon icon="spinner" size="6x" spin /> */}
        </p>
        <p>
            Developed by Or
        </p>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
