// Libraries
import React, { PropTypes } from 'react'

// Local styling
import './index.css'

const EnlargedImage = (props) => {
  const src = props.src

  return (
    <section className='enlargedImage'>
      <img src={src} />
    </section>
  )
}

EnlargedImage.propTypes = {
  src: PropTypes.string.isRequired
}

export default EnlargedImage
