// Libraries
import React, { PropTypes } from 'react'

// Local styling
import './index.css'

const ImageDescription = (props) => {
  const title = props.title
  const description = props.description

  return (
    <section className='imageTitleDescription'>
      <div className='row'>
        <div className='title small-12 medium-12 large-12 columns'><h4>{title}</h4></div>
        <div className='description small-12 medium-12 large-12 columns'><h6>{description}</h6></div>
      </div>
    </section>
  )
}

ImageDescription.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default ImageDescription
