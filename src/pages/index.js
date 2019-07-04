import React from "react"
import { Link } from "gatsby"


/*IMAGES*/
import image from "../images/gatsby-astronaut.png"
import contact_icon from "../images/contact-icon.svg"
import work1 from "../images/work-2.png"
import work2 from "../images/work-3.jpg"

/*COMPONENTS*/

import Layout from "../components/layout"
import ImageText from "../components/imageText/imageText"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="home-container">
      <a href="#work"><h2 className="floating-work">Work</h2></a>
      <a href="#about"><h3 className="floating-about">About</h3></a>

      <div className="portfolio-parent">
        <div className="portfolio-container">
            <h1>POR</h1>
            <h1>TFO</h1>
            <h1>LIO</h1>
            <h5 className="name">yuliet</h5>
            <h5 className="profession">Front-end <strong>dev</strong></h5>
        </div>
      </div>

      <a href="#contact" id="contact_icon">
        <img src={contact_icon} alt="contact icon" />
      </a>

    </section>

    <section id="about">
      <div className="about">
        <p>I’m a <span className="highlighted-text">Front-end developer</span>, passionate for design and interactive web development.</p>
      </div>
    </section>

    <section id="work">
      <ImageText aligment = "right" img={work1} link="https://www.spotcoloreyewear.com/"/>
      <ImageText aligment = "left" img={work2} link="https://www.spotcoloreyewear.com/"/>
    </section>

    <section id="contact">
      <div className="contact-container">
        <a class="btn" href="#"> <span>CONTACT ME</span> </a>
      </div>
    </section>

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
