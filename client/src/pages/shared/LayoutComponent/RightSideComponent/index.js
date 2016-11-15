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
  children: React.PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
}

export default RightContainer
