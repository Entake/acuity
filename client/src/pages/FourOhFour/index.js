// Libraries
import React, { PropTypes, PureComponent } from 'react'

// Our styles
import './index.css'

class fourOhFour extends PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired
  }

  render () {
    return (
      <section className='oh'>
        <div className='text'>
          <h1>404 :(<br /></h1>
          <h2>This page and unicorns don't exist</h2>
        </div>
        <div className='ohImgContainer'>
          <img src='assets/mascot.svg' />
        </div>
      </section>
    )
  }
}

export default fourOhFour
