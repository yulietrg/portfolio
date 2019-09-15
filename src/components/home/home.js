import React, {useEffect, useRef} from 'react';
//import classes from './home.module.css'
import classes from './home.module.css'

/*IMAGES*/
import contact_icon from "../../images/contact-icon.svg"

import * as ScrollMagic from "scrollmagic"
// import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import { Back, TweenMax, CSSPlugin, TimelineMax} from 'gsap/all'
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
// ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);


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
    const tl = new TimelineMax()
    //const scroll = new ScrollMagic.Controller();

    useEffect(() => {

        tl.from(work, 0.6, { opacity: 0, x: -40 })
            .from(letter1, 0.5, { ease: Back.easeOut.config(1.7), opacity: 0, x: -30}, 0.2)
            .from(letter2, 0.5, { ease: Back.easeOut.config(1.7), opacity: 0, x: -150}, 0.2)
            .from(letter3, 0.5, { ease: Back.easeOut.config(1.7), opacity: 0, x: -290}, 0.2)
            .from(letter4, 0.5, { ease: Back.easeOut.config(1.7), opacity: 0, x: 30,}, 0.4)
            .from(letter5, 0.5, { ease: Back.easeOut.config(1.7), opacity: 0, x: 150}, 0.4)
            .from(letter6, 0.5, { ease: Back.easeOut.config(1.7), opacity: 0, x: 290}, 0.4)
            .from(about, 0.6, { opacity: 0, y: 40, }, 0.5 )
            .from(letter7, 0.5, { ease: Back.easeOut.config(1.7), opacity: 0, x: -30}, 0.6)
            .from(letter8, 0.5, { ease: Back.easeOut.config(1.7), opacity: 0, x: -150}, 0.6)
            .from(letter9, 0.5, { ease: Back.easeOut.config(1.7), opacity: 0, x: -290}, 0.6)
            .from(name, 0.8, { opacity: 0}, 1)
            .from(profession, 0.8, { opacity: 0}, 1)

        /*const sc = new ScrollMagic.Scene({
            triggerElement: "#home",
            duration: 400, // scroll distance
            offset: 200 // start this scene after scrolling for 50px
            })
            .setTween(tl)
            .setPin(about)
            .addIndicators({name: "1 trigger ever"});
            sc.addTo(scroll);*/
        
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