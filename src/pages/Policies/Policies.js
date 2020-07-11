import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"    
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretRight } from '@fortawesome/free-solid-svg-icons'
import "./Policies.scss"


const ProductsPage = () => (
    <Layout>
      <SEO title="Policies Page" />
      <div id="content">
        <div id="page-header">
          <h1>Políticas de la empresa</h1>
        </div>
        {/* <Accordion defaultActiveKey="0"> */}
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{textAlign:"left"}}>
                <FontAwesomeIcon icon={faCaretRight} size="2x" style={{color:"black",marginRight:"20px"}} />
                  Acerca de los Pedidos
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>
                  <li>                
                    En Talabarteria Rancho Grande estamos para servirte, posicione su pedido cualquier día en cualquier horario en talabarteriaranchogrande.com
                  </li>
                  <li>
                    seleccione el método de envío en el checkout
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{textAlign:"left"}}>
                <FontAwesomeIcon icon={faCaretRight} size="2x" style={{color:"black",marginRight:"20px"}} />
                Acerca de las cancelaciones
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ul>
                  <li>                
                    En Talabarteria Rancho Grande estamos para servirte, posicione su pedido cualquier día en cualquier horario en talabarteriaranchogrande.com
                  </li>
                  <li>
                    seleccione el método de envío en el checkout
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{textAlign:"left"}}>
                <FontAwesomeIcon icon={faCaretRight} size="2x" style={{color:"black",marginRight:"20px"}} />
                Acerca de los envíos
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <ul>
                  <li>                
                    En Talabarteria Rancho Grande estamos para servirte, posicione su pedido cualquier día en cualquier horario en talabarteriaranchogrande.com
                  </li>
                  <li>
                    seleccione el método de envío en el checkout
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </Layout>
  )
  
  export default ProductsPage
  