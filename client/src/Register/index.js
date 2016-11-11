// Libraries
import { connect } from 'react-redux'
import React, { PureComponent, PropTypes } from 'react'

// Our actions
import { helloWorldAction } from 'store/actions'

// Our components
import LayoutContainer from 'shared/LayoutComponent'
import LeftContainer from 'shared/LayoutComponent/LeftSideComponent'
import RightContainer from 'shared/LayoutComponent/RightSideComponent'
import Button from 'shared/ButtonComponent'
import UploadButton from 'shared/UploadButtonComponent'
import Footer from 'shared/FooterComponent'
import SearchBar from 'shared/SearchBarComponent'
import User from 'shared/UserComponent'
import ImageInput from 'shared/ImageTextInputComponent'
import ImageDescription from 'shared/ImageDescription'
import EnlargedImage from 'shared/EnlargedImage'

// Our styles
import './index.css'

class Register extends PureComponent {
  static propTypes = {
    hello: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
  }

  render () {
    if (process.env.NODE_ENV !== 'production') {
      console.log(this.props.hello.get('world'))
    }

    return (
      <div>
        <LayoutContainer>
          <LeftContainer>
            <div className='row'>
              <User userName='Aksel N. Ladegaard' userProfile='user' quote='A Reactive Engineer'/>
              <SearchBar />
              <a href='http://imgur.com'>
                <Button
                  backgroundColor='#c62828'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-4 columns'
                  text='Latest'
                />
              </a>
              <a href='http://imgur.com'>
                <Button
                  backgroundColor='#d84315'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-4 columns'
                  text='Popular'
                />
              </a>
              <a href='http://imgur.com'>
                <Button
                  backgroundColor='#00695c'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-4 columns'
                  text='Random'
                />
              </a>
              <a href='http://imgur.com'>
                <Button
                  backgroundColor='#00695c'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-12 columns'
                  text='Random'
                />
              </a>
            </div>
            {/*<ImageInput /> */}
            <ImageDescription title='This Is Amazing' description='This is the best kind of image on the internet, it was created by people!' />
            {/* <div>
              <h1 className='test'>What up my glib globs!</h1>
              <button type='button' className='success button' onClick={this.props.onClick}>
                Press me!
              </button>
              <h2>Output: {this.props.hello.get('world')}</h2>
            </div> */}
            <Button
              background-color='purple'
              color='white' height=''
              gridSize='small-12 medium-12 large-12 columns'
              text='Submit'
            />
          </LeftContainer>
          <RightContainer>
            <EnlargedImage src='assets/swainSmall.jpg' />
            {/* <UploadButton text='Upload' /> */}
            {/* I reccommend that you use the UploadBUtton Text part to communicate with hte user concerning upload failure/success */}
          </RightContainer>
        </LayoutContainer>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  hello: state.get('hello')
})

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(helloWorldAction)
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)