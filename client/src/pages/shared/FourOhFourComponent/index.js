// Libraries
import React, { PropTypes } from 'react'

// Local styling
import './index.css'

const FourOhFour = (props) => {
  return (
    <section className='oh'>
      <div className='text'>
        <h1>404<br /></h1>
        <h2>This page and unicorns don't exist</h2>
      </div>
      <div className='ohImgContainer'>
        <img src='assets/mascot.svg' />
      </div>
    </section>
  )
}

FourOhFour.propTypes = {
  src: PropTypes.string.isRequired
}

export default FourOhFour
