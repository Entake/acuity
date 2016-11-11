// Libraries
import React, { PropTypes } from 'react'

// React Components
import { Link } from 'react-router'

const NavbarButton = (props) => (
  (props.pressedButton === props.to)
  ? <Link to={props.to} className='navbarButtonPressed'><li>{props.title}</li></Link>
  : <Link to={props.to}><li>{props.title}</li></Link>
)

NavbarButton.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  pressedButton: PropTypes.string.isRequired
}

export default NavbarButton
