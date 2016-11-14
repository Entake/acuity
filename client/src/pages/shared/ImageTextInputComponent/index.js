// Libraries
import React, { } from 'react'

// Local styling
import './index.css'

const ImageInput = (props) => {
  // const imageDescription = props.imageDescription

  return (
    <section className='imageInput'>
      <div className='row'>
        <form>
          <div className='small-12 medium-12 large-12 columns'>
            <input
              className='input title'
              input='text'
              name='ImageTitle'
              placeholder='Your image title (32)'
              maxLength='32'
              // value=''
              />
          </div>
          <div className='small-12 medium-12 large-12 columns'>
            <textarea
              className='input description'
              input='text'
              placeholder='Your image description (512)'
              maxLength='512'
              // value=''
              />
          </div>
        </form>
      </div>
    </section>
  )
}

ImageInput.propTypes = {
  // imageDescription: PropTypes.string
}

export default ImageInput
