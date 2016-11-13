// Libraries
import React, { PureComponent, PropTypes } from 'react'

// Our components
import LayoutContainer from 'shared/LayoutComponent'
import LeftContainer from 'shared/LayoutComponent/LeftSideComponent'
import RightContainer from 'shared/LayoutComponent/RightSideComponent'
import Button from 'shared/ButtonComponent'
import Footer from 'shared/FooterComponent'
import SearchBar from 'shared/SearchBarComponent'
import User from 'shared/UserComponent'
import ImageDescription from 'shared/ImageDescription'
import EnlargedImage from 'shared/EnlargedImage'

// Our styles
import './index.css'

class Home extends PureComponent {
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
              <User userName='Elias Z. Jørgensen' userProfile='user' quote='A web developer' />
              <SearchBar />
              <a href='#'>
                <Button
                  backgroundColor='#c62828'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-4 columns'
                  text='Music'
                />
              </a>
              <a href='#'>
                <Button
                  backgroundColor='#d84315'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-4 columns'
                  text='Pink'
                />
              </a>
              <a href='#'>
                <Button
                  backgroundColor='#00695c'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-4 columns'
                  text='Head'
                />
              </a>
              <a href='Upload'>
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
            {/* <UploadButton text='Upload' /> */}
            {/* I reccommend that you use the UploadBUtton Text part to communicate with hte user concerning upload failure/success */}
          </RightContainer>
        </LayoutContainer>
        <Footer />
      </div>
    )
  }
}

export default Home
