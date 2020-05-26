import React, {Component} from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"    
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope,faCalendar } from '@fortawesome/free-solid-svg-icons'
import {faFacebookF,faWhatsapp,faTwitter} from '@fortawesome/free-brands-svg-icons'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker/Marker'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Contact.scss"

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class ProductsPage  extends Component {
  static defaultProps = {
    center: {
      lat: 30.628221,
      lng: -110.9685844
    },
    zoom: 19
  };

  selectMarker  =()=>{
    console.log("clicked on marker")
    // this.setState({
    //     selectedStadium:stadium
    // })
  };
 
  sendEmail=()=>{
    console.log("===sending Email")
  }

  createMapOptions= (maps)=> {
    return {
      streetViewControl: true,
      rotateControl: true,
      panControl: false,
      mapTypeControl: true,
      scrollwheel: false,
      styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
    }
  }
  
  render(){
    return(
      <Layout>
        <SEO title="Contact Page" />
          <div id="content">
          <p className="title">Contacto</p>
          <div className="bg-lightBrown">
            {/* <!--==className="==============Contact Us Area =================--> */}
            <section className="contact_us_area">
              <div className="container-fluid">
                <div className="row contact_details_inner">
                    <div className="col-md-6 px-3">
                      <div className="contact_form">
                        <div className="main_title">
                          <h1 className="text-center pb-4 lang" key="sendamsg">¡Envía un mensaje!</h1>
                          <p className="lang" key="desc1">¿Tienes alguna duda o pedido especial? ¡No hay problema! Con gusto lo resolvemos.</p>
                        </div>
                          <form className="contact_us_form row" method="post" id="contactForm" onSubmit={this.sendEmail}>
                            <div className="form-group col-lg-12">
                              <input type="text" className="form-control lang-placeholder" id="name" name="name" placeholder="Nombre" required key="name"/>
                            </div>
                            <div className="form-group col-lg-12">
                              <input type="email" className="form-control lang-placeholder" id="email" name="email" placeholder="Correo electrónico" required key="email"/>
                            </div>
                            <div className="form-group col-lg-12">
                              <input type="text" className="form-control lang-placeholder" id="phone" name="phone" placeholder="Teléfono" required key="phone"/>
                            </div>
                            <div className="form-group col-lg-12">
                              <textarea className="form-control lang-placeholder" name="message" id="message" rows="3"
                              placeholder="Mensaje" required key="msg"></textarea>
                            </div>
                            <div className="form-group col-md-12">
                              <button type="submit" value="submit" className="btn btn-dark lang" key="send-btn">Enviar
                                Mensaje
                              </button>
                            </div>
                          </form>
                        </div>
                    </div>
                  <div className="col-md-6 informacion px-3">
                    <h1 className="lang" key="info">Información</h1>
                    <div className="text-center">
                      <p className="strong">
                        Ignacio Allende 201, Centro, 84160  
                      </p>
                      <p className="strong">
                        C.P. 21100
                      </p>
                      <p className="strong">
                      Magdalena de Kino, Son.
                      </p>
                      <div>
                        <p>
                          <FontAwesomeIcon icon={faPhone} size="1x"/> 632 322 0021
                        </p> 
                        <p>
                          <FontAwesomeIcon icon={faEnvelope} size="1x"/> atlas_leatherdist@hotmail.com 
                        </p>
                        <p>
                          <FontAwesomeIcon icon={faCalendar} size="1x"/> Lunes a viernes 8:30am a 6:00pm                     
                        </p>
                        <p>
                        <FontAwesomeIcon icon={faCalendar} size="1x"/> Sabados 8:30am a 5:00pm
                        </p>
                        <div className="pt-1">
                          <a href="https://www.facebook.com/pages/Talabarteria-Rancho-Grande/536816149748517" className="pr-2">
                            <FontAwesomeIcon icon={faFacebookF} size="1x"/>
                          </a>
                          <a href="#" className="pl-2">
                            <FontAwesomeIcon icon={faTwitter} size="1x"/>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1"></div>
                </div>
              </div>
            </section>
            <div style={{ height: '100vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyC_UHx7jUrV6Hg4pNClBxpGywg3v4ovcfs' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                options={this.createMapOptions}
              > 
              <AnyReactComponent
                lat={this.props.center.lat}
                lng={this.props.center.lng}
                text="X"
              />
              <Marker
                lat={this.props.center.lat}
                lng={this.props.center.lng}
                text={'Talabartería'}
                handleClick={this.selectMarker}
              ></Marker>
            </GoogleMapReact>
        </div>
          </div>
          {/* // <!--================Contact Success and Error message Area =================--> */}
          <div id="success" className="modal modal-message fade" role="dialog">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <i className="fa fa-close"></i>
                          </button>
                          <h2>Muchas gracias</h2>
                          <p>Tu mensaje ha sido enviado exitosamente...</p>
                      </div>
                  </div>
              </div>
          </div>

          {/* // <!-- Modals error --> */}
          <div id="error" className="modal modal-message fade" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i className="fa fa-close"></i>
                        </button>
                        <h2>Sorry !</h2>
                        <p> Something went wrong </p>
                    </div>
                </div>
            </div>
        </div>
          {/* // <!-- https://www.embedgooglemap.net/ --> */}
        </div>
    </Layout>
    )
  }
}

  
  export default ProductsPage
  