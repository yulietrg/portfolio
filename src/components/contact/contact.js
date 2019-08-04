import React from "react"
import classes from './contact.module.css'

/*IMAGES*/
import github_icon from "../../images/github-icon.svg"
import linkedin_icon from "../../images/linkedin-icon.svg"


const Contact = () =>{
    return (   
        <section id="contact" className={classes.contact}>
            <div className={classes.contactContainer}>
                <a className="contact_btn" href="mailto:yulietremong@gmail.com" target="_blank"> <span>CONTACT ME</span> </a>
            </div>
            <div className={classes.smIcon}>
                <a href="https://github.com/yulietrg" target="_blank"><img src={github_icon} alt="github icon" /></a>
                <a href="https://www.linkedin.com/in/yuliet-rem%C3%B3n-089160ba/" target="_blank"><img src={linkedin_icon} alt="linkedin icon"/></a>
            </div>
        </section>  
    )
}

export default Contact