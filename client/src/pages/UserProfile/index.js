// Libraries
import { connect } from 'react-redux'
import React, { PureComponent, PropTypes } from 'react'

// Our actions

// Our components
import LayoutContainer from 'pages/shared/LayoutComponent'
import LeftContainer from 'pages/shared/LayoutComponent/LeftSideComponent'
import RightContainer from 'pages/shared/LayoutComponent/RightSideComponent'
import Button from 'pages/shared/ButtonComponent'
import UploadButton from 'pages/shared/UploadButtonComponent'
import Footer from 'pages/shared/FooterComponent'
import SearchBar from 'pages/shared/SearchBarComponent'
import User from 'pages/shared/UserComponent'
import ImageInput from 'pages/shared/ImageTextInputComponent'
import ImageDescription from 'pages/shared/ImageDescription'
import EnlargedImage from 'pages/shared/EnlargedImage'

// Our styles
import './index.css'

class UserProfile extends PureComponent {
  static propTypes = {
    hello: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
  }

  render () {
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
            <ImageDescription title='This Is Amazing' description='This is the best kind of image on the internet, it was created by people!' />
            <Button
              background-color='purple'
              color='white' height=''
              gridSize='small-12 medium-12 large-12 columns'
              text='Submit'
            />
          </LeftContainer>
          <RightContainer>
            <EnlargedImage src='assets/swainSmall.jpg' />
          </RightContainer>
        </LayoutContainer>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
