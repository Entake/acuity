// Libraries
import React, { PropTypes } from 'react'

const Container = ({children}) => (
  <div class='container'>
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.object.isRequired
}

export default Container
