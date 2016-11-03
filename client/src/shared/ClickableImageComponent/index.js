
// Libraries
import React, { PropTypes } from 'react'
import { Link } from 'react-router'

// Local styling
import './index.css'

const ClickableImageComponent = (props) => {
  const imageSource = props.src
  const gridSize = `${props.gridSize}`
  const imageText = props.imageText
  const textPlacement = props.textPlacement
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
  src: PropTypes.string.isRequired,
  gridSize: PropTypes.string.isRequired,
  imageText: PropTypes.string,
  textPlacement: PropTypes.object,
  style: PropTypes.object
}

export default ClickableImageComponent
