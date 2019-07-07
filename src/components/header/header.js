import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import classes from './header.module.css'

const Header = ({ siteTitle }) => (
  <header>
    <div className={classes.container}>
      <span className={classes.red}>{"{ }"}</span>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
