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
    <div className='buttonContainer'>
      <div className={gridSize}>
        { props.disabled ? (
          <button
            className='button'
            style={{color: color, height: height, backgroundColor: bgColor}}
            onClick={cb}
            disabled>
            {buttonText}
          </button>
        ) : (
          <button
            className='button'
            style={{color: color, height: height, backgroundColor: bgColor}}
            onClick={cb}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  )
}

Button.propTypes = {
  gridSize: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.object,
  disabled: PropTypes.boolean
}

export default Button
