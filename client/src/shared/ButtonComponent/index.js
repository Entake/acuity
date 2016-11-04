// Libraries
import React, { PropTypes } from 'react'

// Local styling
import './index.css'

const Button = (props) => {
  const bgColor = props.backgroundColor
  const gridSize = props.gridSize
  const buttonText = props.text
  const height = props.height
  const color = props.color
  const cb = props.onClick

  return (
    <div className={gridSize}>
      <button
        className='button'
        style={{color: color, height: height, backgroundColor: bgColor}}
        onClick={cb}>
          {buttonText}
      </button>
    </div>
  )
}

Button.propTypes = {
  gridSize: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.object,
  color: PropTypes.string,
}

export default Button
