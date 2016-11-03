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
  children: PropTypes.isRequired
}

export default LayoutContainer
