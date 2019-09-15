import React from "react"
import classes from './contact.module.css'

/*IMAGES*/
import github_icon from "../../images/github-icon.svg"
import linkedin_icon from "../../images/linkedin-icon.svg"
import download_icon from "../../images/download-icon.svg"


const Contact = () =>{
    return (   
        <section id="contact" className={classes.contact}>
            <div className={classes.contactContainer}>
                <a className="contact_btn" href="mailto:yulietremong@gmail.com" target="_blank"> <span>CONTACT ME</span> </a>
            </div>
            <div className={classes.smIcon}>
                <a href="https://github.com/yulietrg" target="_blank"><img src={github_icon} alt="github icon" /></a>
                <a href="https://www.linkedin.com/in/yuliet-rem%C3%B3n-089160ba/" target="_blank"><img src={linkedin_icon} alt="linkedin icon"/></a>
                <a href="https://drive.google.com/file/d/1GOaXte4cBp82Y1P8wjrHKAqAseWVwlwi/view" target="_blank"><img src={download_icon} alt="download icon"/></a>
            </div>
        </section>  
    )
}

export default Contact