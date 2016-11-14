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
                  backgroundColor='#673AB7'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-4 columns'
                  text='Latest'
                />
              </a>
              <a href='browseImage'>
                <Button
                  backgroundColor='#F44336'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-4 columns'
                  text='Popular'
                  disabled
                />
              </a>
              <a href='browseImage'>
                <Button
                  backgroundColor='#CDDC39'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-4 columns'
                  text='Random'
                  disabled
                />
              </a>
              <a href='upload'>
                <Button
                  backgroundColor='#4CAF50'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-12 columns'
                  text='Upload Image'
                />
              </a>
              <a href='browse'>
                <Button
                  backgroundColor='#00695c'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-12 columns'
                  text='Browse'
                  disabled
                />
              </a>
              <div className='small-12 medium-12 large-12 columns'>
                <div className='acuityDescription'>
                  <div className='spinningUnicorn'>
                    <img src='assets/mascot.svg' />
                  </div>
                </div>
              </div>
            </div>
          </LeftContainer>
          <RightContainer>
            <div className='row'>
              <div className='small-12 medium-8 medium-offset-2 large-6 large-offset-3 columns'>
                <div className='acuityDescriptionText'>
                  <h5>Acuity is the automatic open source image tagging website.
                    <br />This site was developed using Google Vision API, all libaries and technologies are under their respective licenses, whilst our work is under the MIT license. #placeholderText
                  </h5>
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
