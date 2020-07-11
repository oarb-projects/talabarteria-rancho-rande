/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// import React from "react"
import * as React from 'react';

import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/Header"
import Footer from "./Footer/Footer"
// import "./layout.css"
import "./layout.scss"
const MyContext = React.createContext(); 

class Layout extends React.Component {
// const Layout = ({ children }) => {
  // console.log(props)
  // console.log(children)
  // data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  render() {
    return (
      <MyContext.Provider value={{ doSomething: this.doSomething }}>

        {/* <Header siteTitle={this.data.site.siteMetadata.title} /> */}
        <Header/>
        <div
          style={{
            margin: `0 auto`
          }}>
          <main>{this.props.children}</main>
          <Footer/>
        </div>
      </MyContext.Provider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
