import React from "react"
//import classes from './home.module.css'
import classes from './home.module.css'

/*IMAGES*/
import contact_icon from "../../images/contact-icon.svg"

const Home = (props) =>{
    return (   
        <section className={classes.homeContainer} id="home">
        <a href="javascript:void(0)" onClick={()=>props.ScrollClickHandler('#work')} className="link"><h2 className={classes.floatingWork}>Work</h2></a>
        <a href="javascript:void(0)" onClick={()=>props.ScrollClickHandler('#about')} className="link"><h3 className={classes.floatingAbout}>About</h3></a>

        <div className={classes.portfolioParent}>
            <div className={classes.portfolioContainer}>
                <h1>por</h1>
                <h1>tfo</h1>
                <h1>lio</h1>
                <h5 className={classes.name}>yuliet</h5>
                <h5 className={classes.profession}>Front-end <strong>dev</strong></h5>
            </div>
        </div>

        <a href="javascript:void(0)" onClick={()=>props.ScrollClickHandler('#contact')} className={classes.contactIcon}>
            <img src={contact_icon} alt="contact icon" />
        </a>

        </section>  
    )
}

export default Home