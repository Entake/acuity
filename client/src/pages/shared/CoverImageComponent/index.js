
// Libraries
import React, { PropTypes } from 'react'

// Local styling
import './index.css'

const CoverImageComponent = (props) => {
  const imageSource = props.imageSource
  const coverImageText = props.coverImageText
  // const style = props.style

  return (
    <div className='coverImageContainer'>
      <div style={imageSource} className='coverImage' />
      <div className='row'>
        <div className='small-12 medium-12 large-12 columns'>
          <div className='coverImageTextCss'>{coverImageText}</div>
        </div>
      </div>
    </div>
    // <div className='coverImageContainer'>
    //   <div className='coverImage' src={imageSource} />
    //   <div className='row'>
    //     <div className='small-12 medium-12 large-12 columns'>
    //       <div className='coverImageTextCss' style={style}>{coverImageText}</div>
    //     </div>
    //   </div>
    // </div>

  )
}

CoverImageComponent.propTypes = {
  imageSource: PropTypes.string,
  style: PropTypes.object,
  coverImageText: PropTypes.string
}

export default CoverImageComponent
