// Libraries
import React, { PropTypes, PureComponent } from 'react'

// React Components
import { Link } from 'react-router'

// Utils
import { isLoggedIn } from '../../../util'

class NavbarButton extends PureComponent {
  constructor (props) {
    super(props)

    this.Button = (
      (this.props.pressedButton === this.props.to)
      ? <Link to={this.props.to} className='navbarButtonPressed'><li>{this.props.title}</li></Link>
      : <Link to={this.props.to}><li>{this.props.title}</li></Link>
    )
  }
  render () {
    switch (this.props.type) {
      case 'intern':
        if (isLoggedIn()) {
          return this.Button
        } else {
          return false
        }

      case 'extern':
        if (!isLoggedIn()) {
          return this.Button
        } else {
          return false
        }

      default:
        return this.Button
    }
  }
}

NavbarButton.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  pressedButton: PropTypes.string.isRequired,
  type: PropTypes.string
}

export default NavbarButton
