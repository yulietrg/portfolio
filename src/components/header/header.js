import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import classes from './header.module.css'
import { visuAll } from "../../data/work";

const Header = (props) => {

  let classes_container = [classes.container];

  if(props.page === "visuAll_page"){
    classes_container.push(classes.darkBack)
    classes_container = classes_container.join(' ')
  }
    
  return(
    <header>
      <nav>
        <div className={classes_container}>
          <a onClick={props.HeaderClickHandler} className={classes.menuIcon}>{"{ }"}</a>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
