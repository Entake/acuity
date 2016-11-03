// Libraries
import React, { PropTypes } from 'react'

// Local styling
import './index.css'

const RightContainer = ({children}) => (
  <section className='rightContainer'>
    <div className='contentRight'>
      {children}
    </div>
  </section>
)

RightContainer.propTypes = {
  children: PropTypes.isRequired
}

export default RightContainer
