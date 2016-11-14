// Libraries
import React, { PureComponent, PropTypes } from 'react'

// Our components
import LayoutContainer from 'pages/shared/LayoutComponent'
import LeftContainer from 'pages/shared/LayoutComponent/LeftSideComponent'
import RightContainer from 'pages/shared/LayoutComponent/RightSideComponent'
import Button from 'pages/shared/ButtonComponent'
import Footer from 'pages/shared/FooterComponent'
import SearchBar from 'pages/shared/SearchBarComponent'
import User from 'pages/shared/UserComponent'
import AcuityImage from 'pages/shared/AcuityImageComponent'

// Our styles
import './index.css'

class Browse extends PureComponent {
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
              <User userName='Aksel N. Ladegaard' userProfile='UserProfile' quote='A Reactive Engineer' />
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
            <Button
              background-color='purple'
              color='white' height=''
              gridSize='small-12 medium-12 large-12 columns'
              text='Submit'
            />
          </LeftContainer>
          <RightContainer>
            <section className='searchResults'>
              <div className='row'>
                <AcuityImage src='assets/swainSmall.jpg' tag1='test' tag2='test' tag3='tag4' />
                <AcuityImage src='assets/swainSmall.jpg' tag1='test' tag2='test' tag3='tag4' />
                <AcuityImage src='assets/swainSmall.jpg' tag1='test' tag2='test' tag3='tag4' />
                <AcuityImage src='assets/swainSmall.jpg' tag1='test' tag2='test' tag3='tag4' />
                <AcuityImage src='assets/swainSmall.jpg' tag1='test' tag2='test' tag3='tag4' />
                <AcuityImage src='assets/swainSmall.jpg' tag1='test' tag2='test' tag3='tag4' />
                <AcuityImage src='assets/swainSmall.jpg' tag1='test' tag2='test' tag3='tag4' />
                <AcuityImage src='assets/swainSmall.jpg' tag1='test' tag2='test' tag3='tag4' />
              </div>
            </section>
          </RightContainer>
        </LayoutContainer>
        <Footer />
      </div>
    )
  }
}

export default Browse
