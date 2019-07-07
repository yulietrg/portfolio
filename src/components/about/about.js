import React from "react"
import classes from './about.module.css'

/*IMAGES*/


const About = () =>{
    return (   
        <section id="about">
            <div className={classes.about}>
                <p>I’m a <span className={classes.highlightedText}>Front-end developer</span>, passionate for design and interactive web development.</p>
            </div>
        </section>  
    )
}

export default About