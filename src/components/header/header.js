import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import classes from './header.module.css'

const Header = (props) => {

  return(
    <header>
      <nav>
        {/* <div className="toolbar_navigation_items" style={style}>
          <button onClick={close} className="w3-bar-item w3-button w3-large">Close &times;</button>
          <a href="#" className=""><span>ABOUT</span></a>
          <a href="#" className=""><span>WORK</span></a>
          <a href="#" className=""><span>CONTACT</span></a>
        </div> */}

        <div className={classes.container}>
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
