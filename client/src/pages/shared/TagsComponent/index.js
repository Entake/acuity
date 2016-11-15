// Libraries
import React, { PropTypes } from 'react'

// Local styling
import './index.css'

const Tags = (props) => {
  const tag1 = props.tag1
  const tag2 = props.tag2
  const tag3 = props.tag3
  const tag4 = props.tag4
  const tag5 = props.tag5

  return (
    <ul className='tagsContainer'>
      <a><li className='tag tag1'>{tag1}</li></a>
      <a><li className='tag tag2'>{tag2}</li></a>
      <a><li className='tag tag3'>{tag3}</li></a>
      <a><li className='tag tag4'>{tag4}</li></a>
      <a><li className='tag tag5'>{tag5}</li></a>
    </ul>
  )
}

Tags.propTypes = {
  tag1: PropTypes.string,
  tag2: PropTypes.string,
  tag3: PropTypes.string,
  tag4: PropTypes.string,
  tag5: PropTypes.string
}

export default Tags
