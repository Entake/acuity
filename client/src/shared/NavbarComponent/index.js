// Libraries
import React, { Component, PropTypes } from 'react'

// React Components
import NavbarButton from 'components/NavbarButtonComponent'
import { Link } from 'react-router'

// Local styling
import './index.css'

export default class NavbarComponent extends Component {

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
      <nav id='header' className='header'>
        <button className='hamburger_menu'>
          <img src='assets/vector/hamburger_menu.svg' />
        </button>
        <div className='navbar-container'>
          <ul className='header-left-links'>
            <img src='assets/vector/idex_logo.svg' />
            <Link to='/'><li>Idex, Danmark</li></Link>
          </ul>
          <ul className='header-right-links'>
            <NavbarButton
              to='/'
              title=''
              pressedButton={this.state.pressedNavButton}
            />
            <NavbarButton
              to='/about'
              title='Om os'
              pressedButton={this.state.pressedNavButton}
            />
            <NavbarButton
              to='/Frivillig'
              title='Frivillig'
              pressedButton={this.state.pressedNavButton}
            />
            <NavbarButton
              to='/Projekter'
              title='Projekter'
              pressedButton={this.state.pressedNavButton}
            />
            <NavbarButton
              to='/Lande'
              title='Lande'
              pressedButton={this.state.pressedNavButton}
            />
            <NavbarButton
              to='/FAQ'
              title='FAQ'
              pressedButton={this.state.pressedNavButton}
            />

          </ul>
        </div>
      </nav>
    )
  }
}

NavbarComponent.propTypes = {
  location: PropTypes.object.isRequired
}
