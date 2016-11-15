// Libraries
import React, { PropTypes } from 'react'

// Local styling
import './index.css'

const Tags = (props) => {
  let colorNum = 0

  return (
    <ul className='tagsContainer'>
      {
        props.tags.map(tag => {
          colorNum > 5 ? colorNum = 1 : colorNum++
          return (
            <a className='hoverAbleTag' key={tag}><li className={`tag tag${colorNum}`}>{tag}</li></a>
          )
        })
      }
      <a><li className='tag tag6'>+</li></a>
    </ul>
  )
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired
}

export default Tags
