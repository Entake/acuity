
// Libraries
import React, { PropTypes } from 'react'
import { Link } from 'react-router'

// Local styling
import './index.css'

const ClickableImageComponent = (props) => {
  const textPlacement = props.textPlacement
  const imageText = props.imageText
  const gridSize = props.gridSize
  const imageSource = props.src
  const style = props.style

  return (
    <div className={gridSize}>
      <div className='clickableImageCss'>
        <Link to='/about' className='clickAbleImageLink' >
          <div className='image'>
            <img src={imageSource} style={style} />
            <div className='imageTextCss' style={textPlacement}>{imageText}</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

ClickableImageComponent.propTypes = {
  gridSize: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  textPlacement: PropTypes.object,
  imageText: PropTypes.string,
  style: PropTypes.object
}

export default ClickableImageComponent
