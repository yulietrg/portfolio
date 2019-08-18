import React from "react"
import { Link } from "gatsby"

/*COMPONENTS*/

import Layout from "../components/layout/layout"
import Home from "../components/home/home"
import About from "../components/about/about"
import Contact from "../components/contact/contact"
import ImageTextList from "../components/imageTextList/imageTextList"
import SEO from "../components/seo"

import TweenLite from 'gsap'
import scrollTo from 'gsap/src/uncompressed/plugins/ScrollToPlugin'

const IndexPage = () => {

  const ScrollGoClickHandler = (location)=>{
    TweenLite.to(window, .8, {scrollTo: location})
  }

return(
  <Layout page="home_page">

    <SEO title="Home" />

    <Home ScrollClickHandler={ScrollGoClickHandler}/>

    <About/>

    <ImageTextList/>

    <Contact/>
    
  </Layout>

  
)};

export default IndexPage
