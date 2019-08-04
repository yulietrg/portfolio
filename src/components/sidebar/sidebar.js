import React from "react"
import classes from './sidebar.module.css'

const Sidebar = (props) => {

    let classes_sidebar = [classes.sidebar];

    if (props.show){
        classes_sidebar = [classes.sidebar, classes.open].join(' ')
        console.log("open") 
    }

  return(

      <nav className={classes_sidebar}>          
        <ul className="sidebar_btn">
          {/* <button onClick={props.SidebarClickHandler} className={classes.closeBtn}>Close &times;</button> */}
          <li><a href="#about" onClick={props.SidebarClickHandler}><span>ABOUT</span></a></li>
          <li><a href="#work" onClick={props.SidebarClickHandler}><span>WORK</span></a></li>
          <li><a href="#contact" onClick={props.SidebarClickHandler}><span>CONTACT</span></a></li>
          <li><a href="#" onClick={props.SidebarClickHandler}><span>BYE!</span></a></li>
        </ul>
      </nav>


  )
}

export default Sidebar
