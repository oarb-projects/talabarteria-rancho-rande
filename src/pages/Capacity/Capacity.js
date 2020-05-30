import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"    
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import leather1 from "../../Assets/Images/Capacity/leathercraft1.jpg";
import leather2 from "../../Assets/Images/Capacity/leathercraft2.jpg";
import "./Capacity.scss"



const ProductsPage = () => (
    <Layout>
      <SEO title="Capacity Page" />
      <div id="content">
        <div id="page-header">
          <h1>Capacidad de Producción</h1>
        </div>
        <p className="information">
          Empresa que con los años ha adquirido gran prestigio por ...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
        <div className="col2">
          <div className="half text-justify pr-2">
            Siempre con los mejores materiales. Bacon ipsum dolor amet fatback tail filet mignon, short ribs tongue flank pork loin prosciutto ham bresaola doner cow cupim jowl landjaeger. Brisket salami pancetta jerky turkey ham hock. Landjaeger drumstick filet mignon, strip steak pork chop bacon sausage. Swine pig leberkas, ham hock ham ribeye corned beef bresaola hamburger porchetta pastrami prosciutto. Prosciutto boudin rump, brisket ham flank drumstick frankfurter picanha sirloin.
          </div>
          <div className="half pl-2">
            <Image src={leather1} className="center-cropped"/>
          </div>
        </div>
        <div className="col2 desktop">
          <div className="half pr-2">
            <Image src={leather2} className="center-cropped"/>
          </div>
          <div className="half text-justify pl-2">
            Bacon ipsum dolor amet fatback tail filet mignon, short ribs tongue flank pork loin prosciutto ham bresaola doner cow cupim jowl landjaeger. Brisket salami pancetta jerky turkey ham hock. Landjaeger drumstick filet mignon, strip steak pork chop bacon sausage. Swine pig leberkas, ham hock ham ribeye corned beef bresaola hamburger porchetta pastrami prosciutto. Prosciutto boudin rump, brisket ham flank drumstick frankfurter picanha sirloin.
          </div>
        </div>

        <div className="col2 mobile">
          <div className="half text-justify pr-2">
            Bacon ipsum dolor amet fatback tail filet mignon, short ribs tongue flank pork loin prosciutto ham bresaola doner cow cupim jowl landjaeger. Brisket salami pancetta jerky turkey ham hock. Landjaeger drumstick filet mignon, strip steak pork chop bacon sausage. Swine pig leberkas, ham hock ham ribeye corned beef bresaola hamburger porchetta pastrami prosciutto. Prosciutto boudin rump, brisket ham flank drumstick frankfurter picanha sirloin.
          </div>
          <div className="half pl-2">
            <Image src={leather2} className="center-cropped"/>
          </div>
        </div>
      </div>
    </Layout>
  )
  
  export default ProductsPage
  