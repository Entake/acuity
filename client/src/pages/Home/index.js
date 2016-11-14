// Libraries
import React, { PureComponent } from 'react'

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

class Home extends PureComponent {
  static propTypes = {
  }

  render () {
    return (
      <div>
        <LayoutContainer>
          <LeftContainer>
            <div className='row'>
              <User userName='Aksel N. Ladegaard' userProfile='user' quote='A Reactive Engineer' />
              <SearchBar />
              <a href='browseImage'>
                <Button
                  backgroundColor='#c62828'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-4 columns'
                  text='Latest'
                />
              </a>
              <a href='browseImage'>
                <Button
                  backgroundColor='#d84315'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-4 columns'
                  text='Popular'
                />
              </a>
              <a href='browseImage'>
                <Button
                  backgroundColor='#00695c'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-4 columns'
                  text='Random'
                />
              </a>
              <a href='browse'>
                <Button
                  backgroundColor='#00695c'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-12 columns'
                  text='browse'
                />
              </a>
            </div>
            <a href='upload'>
              <Button
                background-color='purple'
                color='white' height=''
                gridSize='small-12 medium-12 large-12 columns'
                text='Upload Image'
              />
            </a>
          </LeftContainer>
          <RightContainer>
            <div className='row'>
              <div className='small-12 medium-12 large-12 columns'>
                <div className='AcuityDescription'>
                  <div className='spinningUnicorn'>
                    <img src='assets/favicon.ico' />
                  </div>
                </div>
                <div className='small-12 medium-12 large-12 columns'>
                  <div className='AcuityDescriptionText'>
                    <h4>Hey this is acuity, this will just take up some space or something</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* This section is popular images or something along those lines, grid sizing will be changed later
                The sidebar should be changed to acocunt for some other things on the landing page, this is however not
                top priority right now.
              */}
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
          </RightContainer>
        </LayoutContainer>
        <Footer />
      </div>
    )
  }
}

export default Home
