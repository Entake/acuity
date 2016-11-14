// Libraries
import React, { PureComponent, PropTypes } from 'react'

// React Components
import NavbarButton from 'pages/shared/NavbarButton'
import { Link } from 'react-router'

// Local styling
import './index.css'

export default class Navbar extends PureComponent {

  constructor () {
    super()

    // set initial state
    this.state = {
      pressedNavButton: ''
    }
  }

  componentDidMount () {
    // create listeners, to enable scroll transition
    window.addEventListener('scroll', function () {
      document.body.classList[window.scrollY > 35 ? 'add' : 'remove']('scrolled')
    })
    window.addEventListener('scroll', function () {
      document.body.classList[window.scrollY < 35 ? 'add' : 'remove']('not-scrolled')
    })
  }

  componentWillReceiveProps (nextProps) {
    // handle marking of navbarbutton
    this.markNavButton(nextProps.location.pathname)
  }

  // sets button as pressed, when called
  markNavButton (title) {
    this.setState({
      pressedNavButton: title
    })
  }

  render () {
    return (
      <div>
        <nav id='header' className='header'>
          <button className='hamburger_menu'>
            <img src='assets/vector/hamburger_menu.svg' />
          </button>
          <div className='navbar-container'>
            <ul className='header-left-links'>
              <img src='assets/favicon.ico' />
              <Link to='/'><li>Idex, Danmark</li></Link>
            </ul>
            <ul className='header-right-links'>
              <NavbarButton
                to='/'
                title='Home'
                pressedButton={this.state.pressedNavButton}
              />
              <NavbarButton
                to='/login'
                title='Login'
                type='extern'
                pressedButton={this.state.pressedNavButton}
              />
              <NavbarButton
                to='/register'
                title='Register'
                type='extern'
                pressedButton={this.state.pressedNavButton}
              />
              <NavbarButton
                to='/upload'
                title='Upload'
                type='intern'
                pressedButton={this.state.pressedNavButton}
              />
            </ul>
          </div>
        </nav>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Navbar.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
}
