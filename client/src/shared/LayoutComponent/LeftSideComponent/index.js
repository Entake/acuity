// Libraries
import React, { PropTypes } from 'react'

// Local styling
import './index.css'

const LeftContainer = ({children}) => (
  <section className='leftContainer'>
    <div className='contentLeft'>
      {children}
    </div>
  </section>
)

LeftContainer.propTypes = {
  children: PropTypes.isRequired
}

export default LeftContainer
