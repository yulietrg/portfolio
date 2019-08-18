/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import Sidebar from "../sidebar/sidebar"
import "./layout.css"

//import TweenLite from 'gsap'
//import scrollTo from 'gsap/src/uncompressed/plugins/ScrollToPlugin'

import { TweenLite, ScrollToPlugin } from 'gsap/all'

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [state, setState] = useState(false)

  const HeaderToggleClickHandler = () =>{
    setState(true)
  }

  const SidebarToggleClickHandler = (location) =>{
    setState(false)
    TweenLite.to(window, .8, {scrollTo: location})
  }


  return (
    <>
      <Sidebar SidebarClickHandler = {SidebarToggleClickHandler} SidebarScrollClickHandler= {props.ScrollClickHandler} show={state} page={props.page}/>

      <Header siteTitle={data.site.siteMetadata.title} HeaderClickHandler = {HeaderToggleClickHandler} page={props.page}/>

      <main className={props.page}>{props.children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, Yuliet Remon
        </footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
