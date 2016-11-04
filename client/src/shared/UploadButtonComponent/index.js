// Libraries
import React, { PropTypes } from 'react'

// Local styling
import './index.css'

const UploadButton = (props) => {
  const uploadButtonText = props.text
  const cb = props.onClick

  return (
    <button
      className='uploadButton'
      onClick={cb}>
        {uploadButtonText}
    </button>
  )
}

UploadButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.object,
}

export default UploadButton
