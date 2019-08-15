import React from "react"
import classes from './sidebar.module.css'
import { Link } from "gatsby"

const Sidebar = (props) => {

    let classes_sidebar = [classes.sidebar];

    let home, nohome, style
    console.log(props.page);


    if (props.show){
      if(props.page === "visuAll_page"){
        home = classes.hide
        classes_sidebar = [classes.sidebar, classes.open, classes.dark].join(' ')
      }
      else{
        nohome = classes.hide
        classes_sidebar = [classes.sidebar, classes.open].join(' ')
      }
    }
      


  return(

      <nav className={classes_sidebar}>          
        <ul className="sidebar_btn">
          {/* <button onClick={props.SidebarClickHandler} className={classes.closeBtn}>Close &times;</button> */}
          <li className = {home}><a href="#about" onClick={props.SidebarClickHandler}><span>ABOUT</span></a></li>
          <li className = {home}><a href="#work" onClick={props.SidebarClickHandler}><span>WORK</span></a></li>
          <li className = {home}><a href="#contact" onClick={props.SidebarClickHandler}><span>CONTACT</span></a></li>
          <li className = {nohome}><Link to="/" className = {classes.customBtn}><span>HOME</span></Link></li>
          <li><a href="#" onClick={props.SidebarClickHandler}><span>BYE!</span></a></li>
        </ul>
      </nav>


  )
}

export default Sidebar
