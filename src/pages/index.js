import React from "react"
import { Link } from "gatsby"

/*COMPONENTS*/

import Layout from "../components/layout"
import Home from "../components/home/home"
import About from "../components/about/about"
import Contact from "../components/contact/contact"
import ImageTextList from "../components/imageTextList/imageTextList"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Home/>

    <About/>

    <ImageTextList/>

    <Contact/>

    {/* <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image /> 
        <img src={image} alt=""/>
      </div>
      <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>

  
)

export default IndexPage
