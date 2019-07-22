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
        <ul>
          <button onClick={props.SidebarClickHandler} className={classes.closeBtn}>Close &times;</button>
          <li><a href="#" className="gradient_btn sidebar_btn"><span>ABOUT</span></a></li>
          <li><a href="#" className="gradient_btn sidebar_btn"><span>WORK</span></a></li>
          <li><a href="#" className="gradient_btn sidebar_btn"><span>CONTACT</span></a></li>
        </ul>
      </nav>


  )
}

export default Sidebar
