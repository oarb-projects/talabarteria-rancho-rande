import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"    
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope,faCalendar } from '@fortawesome/free-solid-svg-icons'
import {faFacebookF,faWhatsapp,faTwitter} from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Contact.scss"


const ProductsPage = () => (
    <Layout>
      <SEO title="Contact Page" />
      <div id="content">
        <p className="title">Contacto</p>
        <div class="bg-lightBrown">
        {/* <!--================Contact Us Area =================--> */}
        <section class="contact_us_area">
          <div class="container-fluid">
            <div class="row contact_details_inner">
                <div class="col-md-6 px-3">
                  <div class="contact_form">
                    <div class="main_title">
                      <h1 class="text-center pb-4 lang" key="sendamsg">¡Envía un mensaje!</h1>
                      <p class="lang" key="desc1">¿Tienes alguna duda o pedido especial? ¡No hay problema! Con gusto lo resolvemos.</p>
                    </div>
                      <form class="contact_us_form row" method="post" id="contactForm" onsubmit="event.preventDefault();enviar()">
                        <div class="form-group col-lg-12">
                          <input type="text" class="form-control lang-placeholder" id="name" name="name" placeholder="Nombre" required key="name"/>
                        </div>
                        <div class="form-group col-lg-12">
                          <input type="email" class="form-control lang-placeholder" id="email" name="email" placeholder="Correo electrónico" required key="email"/>
                        </div>
                        <div class="form-group col-lg-12">
                          <input type="text" class="form-control lang-placeholder" id="phone" name="phone" placeholder="Teléfono" required key="phone"/>
                        </div>
                        <div class="form-group col-lg-12">
                          <textarea class="form-control lang-placeholder" name="message" id="message" rows="3"
                          placeholder="Mensaje" required key="msg"></textarea>
                        </div>
                        <div class="form-group col-md-12">
                          <button type="submit" value="submit" class="btn btn-dark lang" key="send-btn">Enviar
                            Mensaje
                          </button>
                        </div>
                      </form>
                    </div>
                </div>
                <div class="col-md-6 informacion px-3">
                  <h1 class="lang" key="info">Información</h1>
                  <div class="text-center">
                    <p class="strong">
                      Ignacio Allende 201, Centro, 84160  
                    </p>
                    <p class="strong">
                      C.P. 21100
                    </p>
                    <p class="strong">
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
                      <div class="pt-1">
                        <a href="https://www.facebook.com/pages/Talabarteria-Rancho-Grande/536816149748517" class="pr-2">
                          <FontAwesomeIcon icon={faFacebookF} size="1x"/>
                        </a>
                        <a href="#" class="pl-2">
                          <FontAwesomeIcon icon={faTwitter} size="1x"/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-1"></div>
            </div>
          </div>
        </section>
        {/* // <!--==================MAP=============================--> */}
        <div class="container-fluid">
              <div class="row">
                  <div class="col-12">
                      <section class="map">
                          <div class="mapouter">
                              <div class="gmap_canvas">
                                  <iframe width="100%" height="500px" id="gmap_canvas"
                                      src="https://maps.google.com/maps?q=talabarteria%20rancho%20grande&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                      frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                  </iframe>
                              </div>
                          </div>
                      </section>
                  </div>
              </div>
          </div>
      </div>
        {/* // <!--================Contact Success and Error message Area =================--> */}
  <div id="success" class="modal modal-message fade" role="dialog">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <i class="fa fa-close"></i>
                  </button>
                  <h2>Muchas gracias</h2>
                  <p>Tu mensaje ha sido enviado exitosamente...</p>
              </div>
          </div>
      </div>
  </div>

      {/* // <!-- Modals error --> */}

      <div id="error" class="modal modal-message fade" role="dialog">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <i class="fa fa-close"></i>
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
  
  export default ProductsPage
  