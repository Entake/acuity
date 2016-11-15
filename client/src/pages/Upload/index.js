// Libraries
import { connect } from 'react-redux'
import React, { PureComponent, PropTypes } from 'react'

// Our actions
import { uploadAction } from 'store/actions'

// Our components
import LayoutContainer from 'pages/shared/LayoutComponent'
import LeftContainer from 'pages/shared/LayoutComponent/LeftSideComponent'
import RightContainer from 'pages/shared/LayoutComponent/RightSideComponent'
import Footer from 'pages/shared/FooterComponent'
import User from 'pages/shared/UserComponent'

// Our styles
import './index.css'

class Upload extends PureComponent {
  constructor () {
    super()

    // Refs
    this.form
    this.titleInput
    this.descriptionInput
    this.imageInput
  }

  static propTypes = {
    token: PropTypes.string.isRequired,
    submitImage: PropTypes.func.isRequired,
    image: PropTypes.object,
    success: PropTypes.bool
  }

  handleClick = e => {
    e.preventDefault()
    console.log(this.imageInput.files)

    const data = new window.FormData()
    data.append('title', this.titleInput.value)
    data.append('description', this.descriptionInput.value)
    data.append('image', this.imageInput.files[0])

    this.props.submitImage(data, this.props.token)
  }

  componentDidUpdate () {
    if (this.props.success) {
      setImmediate(this.context.router.push(`/browse/${this.props.image.id}`))
    }
  }

  render () {
    console.log(this.props.image)
    return (
      <form encType='multipart/form-data' ref={f => { this.form = f }} id='uploadForm'>
        <div>
          <LayoutContainer>
            <LeftContainer>
              <div className='row'>
                <User userName='Aksel N. Ladegaard' userProfile='user' quote='A Reactive Engineer' />
                <section className='imageInput'>
                  <div className='row'>
                    <div className='small-12 medium-12 large-12 columns'>
                      <input
                        className='input title'
                        name='ImageTitle'
                        placeholder='Your image title (32)'
                        maxLength='32'
                        ref={i => { this.titleInput = i }}
                      />
                    </div>
                    <div className='small-12 medium-12 large-12 columns'>
                      <textarea
                        className='input description'
                        placeholder='Your image description (512)'
                        maxLength='512'
                        form='uploadForm'
                        ref={i => { this.descriptionInput = i }}
                      />
                    </div>
                  </div>
                </section>
                <div className='small-12 medium-12 large-12 columns'>
                  <button
                    className='button'
                    style={{color: 'white', backgroundColor: 'purple'}}
                    onClick={this.handleClick} >
                    Submit
                  </button>
                </div>
              </div>
            </LeftContainer>
            <RightContainer>
              <input
                className='uploadButton'
                type='file'
                accept='.png,.jpg,.jpeg'
                ref={i => { this.imageInput = i }}
              />
              {/* I reccommend that you use the UploadBUtton Text part to communicate with hte user concerning upload failure/success */}
            </RightContainer>
          </LayoutContainer>
          <Footer />
        </div>
      </form>
    )
  }
}

Upload.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  token: state.getIn(['auth', 'token']),
  success: state.getIn(['upload', 'success']),
  image: state.getIn(['upload', 'image']),
  error: state.getIn(['upload', 'error'])
})

const mapDispatchToProps = (dispatch) => ({
  submitImage: (params, token) => dispatch(uploadAction(params, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(Upload)
