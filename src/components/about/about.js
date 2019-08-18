import React from "react"
import classes from './about.module.css'

/*IMAGES*/


const About = () =>{
    return (   
        <section id="about">
            <div className={classes.about}>
                <h2>Hello! I’m Yuliet Remon, a <span className={classes.highlightedText}>Front-end developer</span> based  in Florida, passionate for design and interactive web development.</h2>
                <h2>I like to learn new things... this page is the result of me, learning Gatsby and React. Below some of my work :)</h2>
            </div>
        </section>  
    )
}

export default About