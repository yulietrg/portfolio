import React from "react"
import classes from './sidebar.module.css'
import { Link } from "gatsby"

const Sidebar = (props) => {

    let classes_sidebar = [classes.sidebar];

    let home, nohome

    if(props.page === "visuAll_page"){
      home = classes.hide
      if (props.show){
        classes_sidebar.push(classes.open, classes.dark)
        classes_sidebar = classes_sidebar.join(' ')
        //classes_sidebar = [classes.sidebar, classes.open, classes.dark].join(' ')      
      }
      else{
        classes_sidebar.push(classes.dark)
        classes_sidebar = classes_sidebar.join(' ')
        //classes_sidebar = [classes.sidebar, classes.dark].join(' ')
      }
        
        
    }
    else{
      nohome = classes.hide
      if (props.show){
        classes_sidebar.push(classes.open)
        classes_sidebar = classes_sidebar.join(' ')
        //classes_sidebar = [classes.sidebar, classes.open].join(' ')
      } 
    }

    // if (props.show){
      
    // }
      


  return(

      <nav className={classes_sidebar}>          
        <ul className="sidebar_btn">
          {/* <button onClick={props.SidebarClickHandler} className={classes.closeBtn}>Close &times;</button> */}
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
