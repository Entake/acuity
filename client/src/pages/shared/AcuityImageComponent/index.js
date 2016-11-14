
// Libraries
import React, { PropTypes } from 'react'

// Local styling
import './index.css'

const AcuityImage = (props) => {
  // const gridSize = props.gridSize
  const imageSource = props.src
  const tag1 = props.tag1
  const tag2 = props.tag2
  const tag3 = props.tag3
  const imgHref = props.imgHref

  return (
    <div className='small-6 medium-3 large-3 columns'>
      <div className='a-img-container'>
        <a href={imgHref}>
          <div className='img-container' data-content={`${tag1}, ${tag2}, ${tag3}`} >
            <img src={imageSource} />
          </div>
        </a>
      </div>
    </div>
  )
}

AcuityImage.propTypes = {
  src: PropTypes.string.isRequired,
  imgHref: PropTypes.string.isRequired,
  tag1: PropTypes.string,
  tag2: PropTypes.string,
  tag3: PropTypes.string
}

export default AcuityImage
