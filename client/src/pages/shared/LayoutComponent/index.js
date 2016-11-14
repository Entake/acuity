// Libraries
import React, { PropTypes } from 'react'

// Local styling
import './index.css'

const LayoutContainer = ({children}) => (
  <section className='layoutContainer'>
    {children}
  </section>
)

LayoutContainer.propTypes = {
  children: React.PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
}

export default LayoutContainer
