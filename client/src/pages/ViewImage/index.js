// Libraries
import React, { PropTypes, PureComponent } from 'react'

// Our components
import LayoutContainer from 'pages/shared/LayoutComponent'
import LeftContainer from 'pages/shared/LayoutComponent/LeftSideComponent'
import RightContainer from 'pages/shared/LayoutComponent/RightSideComponent'
import Button from 'pages/shared/ButtonComponent'
import Footer from 'pages/shared/FooterComponent'
import SearchBar from 'pages/shared/SearchBarComponent'
import User from 'pages/shared/UserComponent'
import ImageDescription from 'pages/shared/ImageDescription'
import EnlargedImage from 'pages/shared/EnlargedImage'
import Tags from 'pages/shared/TagsComponent'

// Our styles
import './index.css'

class ViewImage extends PureComponent {
  static propTypes = {
    params: PropTypes.object.isRequired
  }

  render () {
    console.log(`/api/get/image/${this.props.params.id}`)
    return (
      <div>
        <LayoutContainer>
          <LeftContainer>
            <div className='row'>
              <User userName='Elias Z. Jørgensen' userProfile='user' quote='A web developer' />
              <SearchBar />
              <Tags tag1='Music' tag2='Human like creature' tag3='Man of Music' tag4='The Beatles' tag5='Best in the world' />
              <a href='Upload'>
                <Button
                  backgroundColor='#00695c'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-12 columns'
                  text='Random'
                />
              </a>
              <ImageDescription title='This Is Amazing' description='This is the best kind of image on the internet, it was created by people!' />
              <Button
                background-color='purple'
                color='white' height=''
                gridSize='small-12 medium-12 large-12 columns'
                text='Submit'
              />
            </div>
          </LeftContainer>
          <RightContainer>
            <EnlargedImage src={`/api/get/image/${this.props.params.id}`} />
            {/* <UploadButton text='Upload' /> */}
            {/* I reccommend that you use the UploadBUtton Text part to communicate with hte user concerning upload failure/success */}
          </RightContainer>
        </LayoutContainer>
        <Footer />
      </div>
    )
  }
}

export default ViewImage
