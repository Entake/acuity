// Libraries
import { connect } from 'react-redux'
import React, { PureComponent, PropTypes } from 'react'

// Our actions

// Our components
import LayoutContainer from 'pages/shared/LayoutComponent'
import LeftContainer from 'pages/shared/LayoutComponent/LeftSideComponent'
import RightContainer from 'pages/shared/LayoutComponent/RightSideComponent'
import Button from 'pages/shared/ButtonComponent'
import Footer from 'pages/shared/FooterComponent'
import SearchBar from 'pages/shared/SearchBarComponent'
import User from 'pages/shared/UserComponent'
import ImageDescription from 'pages/shared/ImageDescription'
import AcuityImage from 'pages/shared/AcuityImageComponent'

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
              <User userName='Aksel N. Ladegaard' userProfile='user' quote='A Reactive Engineer' />
              <SearchBar />
              <a href='http://imgur.com'>
                <Button
                  backgroundColor='#c62828'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-4 columns'
                  text='Latest'
                  disabled
                />
              </a>
              <a href='http://imgur.com'>
                <Button
                  backgroundColor='#d84315'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-4 columns'
                  text='Popular'
                  disabled
                />
              </a>
              <a href='http://imgur.com'>
                <Button
                  backgroundColor='#00695c'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-4 columns'
                  text='Random'
                  disabled
                />
              </a>
            </div>
          </LeftContainer>
          <RightContainer>
            <AcuityImage src='assets/swainSmall.jpg' imgHref='browseImage' tag1='test' tag2='test' tag3='tag4' />
            <AcuityImage src='assets/swainSmall.jpg' imgHref='browseImage' tag1='test' tag2='test' tag3='tag4' />
            <AcuityImage src='assets/swainSmall.jpg' imgHref='browseImage' tag1='test' tag2='test' tag3='tag4' />
            <AcuityImage src='assets/swainSmall.jpg' imgHref='browseImage' tag1='test' tag2='test' tag3='tag4' />
            <AcuityImage src='assets/swainSmall.jpg' imgHref='browseImage' tag1='test' tag2='test' tag3='tag4' />
            <AcuityImage src='assets/swainSmall.jpg' imgHref='browseImage' tag1='test' tag2='test' tag3='tag4' />
            <AcuityImage src='assets/swainSmall.jpg' imgHref='browseImage' tag1='test' tag2='test' tag3='tag4' />
            <AcuityImage src='assets/swainSmall.jpg' imgHref='browseImage' tag1='test' tag2='test' tag3='tag4' />
            <AcuityImage src='assets/swainSmall.jpg' imgHref='browseImage' tag1='test' tag2='test' tag3='tag4' />
            <AcuityImage src='assets/swainSmall.jpg' imgHref='browseImage' tag1='test' tag2='test' tag3='tag4' />
            <AcuityImage src='assets/swainSmall.jpg' imgHref='browseImage' tag1='test' tag2='test' tag3='tag4' />
            <AcuityImage src='assets/swainSmall.jpg' imgHref='browseImage' tag1='test' tag2='test' tag3='tag4' />
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
