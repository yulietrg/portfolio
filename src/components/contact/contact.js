import React from "react"
import classes from './contact.module.css'

/*IMAGES*/


const Contact = () =>{
    return (   
        <section id="contact" className={classes.contact}>
            <div className={classes.contactContainer}>
                <a className="gradient_btn contact_btn" href="#"> <span>CONTACT ME</span> </a>
            </div>
        </section>  
    )
}

export default Contact