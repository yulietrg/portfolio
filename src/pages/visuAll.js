import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import ImageText from "../components/ImageText/ImageText"

import visuAll_img from "../images/VisualUX.gif"

import {visuAll} from "../data/work.js"

const SecondPage = () => (
  <Layout page="visuAll_page">

    <SEO title="VisuAll" />

    <ImageText aligment = {visuAll.aligment} subHeading = {visuAll.subHeading} heading = {visuAll.heading} description={visuAll.description} img={visuAll.image} link={visuAll.link} page={visuAll.page} btn={visuAll.btnText}/>

    <Image src={visuAll_img}/> 

  </Layout>
)

export default SecondPage
