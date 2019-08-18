import React from "react"
import classes from './about.module.css'

/*IMAGES*/


const About = () =>{
    return (   
        <section id="about">
            <div className={classes.about}>
                <p>Hello! I’m Yuliet Remon, a <span className={classes.highlightedText}>Front-end developer</span> based  in Florida, passionate for interactive web development.</p>
            </div>
        </section>  
    )
}

export default About