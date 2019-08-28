import React, {useEffect, useRef} from 'react';
//import classes from './home.module.css'
import classes from './home.module.css'

/*IMAGES*/
import contact_icon from "../../images/contact-icon.svg"

import { Back, TweenMax, CSSPlugin} from 'gsap/all'


const Home = (props) =>{

    let letter1 = useRef(null);
    let letter2 = useRef(null);
    let letter3 = useRef(null);
    let letter4 = useRef(null);
    let letter5 = useRef(null);
    let letter6 = useRef(null);
    let letter7 = useRef(null);
    let letter8 = useRef(null);
    let letter9 = useRef(null);

    let work = useRef(null);
    let about = useRef(null);
    let name = useRef(null);
    let profession = useRef(null);

    const plugin = CSSPlugin
    //const animation = new TimelineLite()

    useEffect(() => {
        //const menuH1 = title.querySelectorAll('h1')
        //TweenMax.staggerFrom(menuH1, 0.5, { autoAlpha: 0, y: 60 }, 0.2)

        TweenMax.from(work, 0.5, { opacity: 0, x: -40 })
        TweenMax.from(about, 0.5, { opacity: 0, y: 40, delay: 0.5 })

        TweenMax.from(letter1, 0.5, { ease: Back.easeOut.config(1.7), opacity: 0, x: -30, delay: 0.2 })
        TweenMax.from(letter2, 0.5, { ease: Back.easeOut.config(1.7), opacity: 0, x: -150, delay: 0.2 })
        TweenMax.from(letter3, 0.5, { ease: Back.easeOut.config(1.7), opacity: 0, x: -290, delay: 0.2 })

        TweenMax.from(letter4, 0.5, { ease: Back.easeOut.config(1.7), opacity: 0, x: -30, delay: 0.4 })
        TweenMax.from(letter5, 0.5, { ease: Back.easeOut.config(1.7), opacity: 0, x: -150, delay: 0.4})
        TweenMax.from(letter6, 0.5, { ease: Back.easeOut.config(1.7), opacity: 0, x: -290, delay: 0.4 })

        TweenMax.from(letter7, 0.5, { ease: Back.easeOut.config(1.7), opacity: 0, x: -30, delay: 0.6 })
        TweenMax.from(letter8, 0.5, { ease: Back.easeOut.config(1.7), opacity: 0, x: -150, delay: 0.6 })
        TweenMax.from(letter9, 0.5, { ease: Back.easeOut.config(1.7), opacity: 0, x: -290, delay: 0.6 })

        // TweenMax.from(letter1, 0.3, { x: -160, y: -140, scale: 0.5, delay: 0.2 })
        // TweenMax.from(letter2, 0.3, { y: -160, scale: 0.5, delay: 0.3 })
        // TweenMax.from(letter3, 0.3, { x: 220, scale: 0.5, delay: 0.4 })

        TweenMax.from(name, 0.8, { opacity: 0, delay: 1 })
        TweenMax.from(profession, 0.8, { opacity: 0, delay: 1 })
        
      }, []);

    return (   
        <section className={classes.homeContainer} id="home">
        <a href="javascript:void(0)" onClick={()=>props.ScrollClickHandler('#work')} className="link" ><h2 className={classes.floatingWork} ref={element => {work = element}}>Work</h2></a>
        <a href="javascript:void(0)" onClick={()=>props.ScrollClickHandler('#about')} className="link" ><h3 className={classes.floatingAbout} ref={element => {about = element}}>About</h3></a>

        <div className={classes.portfolioParent}>
            <div className={classes.portfolioContainer}>
                <h1>
                    <span ref={element => {letter1 = element}}>p</span>
                    <span ref={element => {letter2 = element}}>o</span>
                    <span ref={element => {letter3 = element}}>r</span>
                </h1>
                <h1>
                    <span ref={element => {letter4 = element}}>t</span>
                    <span ref={element => {letter5 = element}}>f</span>
                    <span ref={element => {letter6 = element}}>0</span>
                </h1>
                <h1>
                    <span ref={element => {letter7 = element}}>l</span>
                    <span ref={element => {letter8 = element}}>i</span>
                    <span ref={element => {letter9 = element}}>0</span>
                </h1>
                {/* <h1>por</h1>
                <h1>tfo</h1>
                <h1>lio</h1> */}
                <h5 className={classes.name} ref={element => {name = element}}>yuliet</h5>
                <h5 className={classes.profession} ref={element => {profession = element}}>Front-end <strong>dev</strong></h5>
            </div>
        </div>

        <a href="javascript:void(0)" onClick={()=>props.ScrollClickHandler('#contact')} className={classes.contactIcon}>
            <img src={contact_icon} alt="contact icon" />
        </a>

        </section>  
    )
}

export default Home