import React, {useEffect, useRef} from 'react';
import classes from './sidebar.module.css'
import { Link } from "gatsby"
//import { TimelineLite, CSSPlugin} from 'gsap/all'

const Sidebar = (props) => {

  // const plugin = CSSPlugin
  // const animation = new TimelineLite({ paused: true })

  //let classes_sidebar = [classes.sidebar, classes.open].join(' ');

  let classes_sidebar = [classes.sidebar];

  let home, nohome, menuLi;

  let menuContainer = useRef(null);

  useEffect(() => {
    console.log(menuContainer)
    //menuLi = menuContainer.querySelectorAll('li a')
    //animation.staggerFrom(menuLi, 0.5, { autoAlpha: 0, y: 120 }, 0.1)
  }, []);

  if(props.page === "visuAll_page"){
    home = classes.hide
    if (props.show){
      classes_sidebar.push(classes.open, classes.dark)
      classes_sidebar = classes_sidebar.join(' ')
      //animation.play()    
    }
    else{
      classes_sidebar.push(classes.dark)
      classes_sidebar = classes_sidebar.join(' ')
    }   
  }
  else{
    nohome = classes.hide
    if (props.show){
      classes_sidebar.push(classes.open)
      classes_sidebar = classes_sidebar.join(' ')
      //animation.play()
    } 
  }

  return(

      <nav className={classes_sidebar}>          
        <ul className="sidebar_btn" ref={element => {menuContainer = element}}>
        {/* <button onClick={() =>  animation.play()} >Play</button> */}
          <li className = {home}><a href="javascript:void(0)" onClick={()=>props.SidebarClickHandler('#about')}><span>ABOUT</span></a></li>
          <li className = {home}><a href="javascript:void(0)" onClick={()=>props.SidebarClickHandler('#work')}><span>WORK</span></a></li>
          <li className = {home}><a href="javascript:void(0)" onClick={()=>props.SidebarClickHandler('#contact')}><span>CONTACT</span></a></li>
          <li className = {nohome}><Link to="/" className = {classes.customBtn}><span>HOME</span></Link></li>
          <li><a href="javascript:void(0)" onClick={()=>props.SidebarClickHandler('#home')}><span>BYE!</span></a></li>
        </ul>
      </nav>


  )
}

export default Sidebar
