// Libraries
import { connect } from 'react-redux'
import React, { PropTypes, PureComponent } from 'react'

// Our actions
import { imageInfoAction } from 'store/actions'

// Our components
import LayoutContainer from 'pages/shared/LayoutComponent'
import LeftContainer from 'pages/shared/LayoutComponent/LeftSideComponent'
import RightContainer from 'pages/shared/LayoutComponent/RightSideComponent'
// import Button from 'pages/shared/ButtonComponent'
import Footer from 'pages/shared/FooterComponent'
import SearchBar from 'pages/shared/SearchBarComponent'
import User from 'pages/shared/UserComponent'
import ImageDescription from 'pages/shared/ImageDescription'
import EnlargedImage from 'pages/shared/EnlargedImage'
import Tags from 'pages/shared/TagsComponent'

// Our styles
import './index.css'

class ViewImage extends PureComponent {
  constructor () {
    super()

    this.state = {
      loading: true
    }
  }

  static propTypes = {
    data: PropTypes.object,
    params: PropTypes.object.isRequired,
    getImageInfoFromID: PropTypes.func.isRequired
  }

  componentWillMount = () => {
    this.props.getImageInfoFromID(this.props.params.id)
  }

  componentDidUpdate = () => {
    if (this.props.data) {
      this.setState({
        loading: false
      })
    }
  }

  render () {
    return (
      <div>
        <LayoutContainer>
          <LeftContainer>
            <div className='row'>
              {
                this.state.loading
                  ? <User userName='Loading...' userProfile='user' quote='A lovely User' />
                : <User userName={this.props.data.user.login} userProfile='user' quote='A lovely User' />
              }
              <SearchBar />
              {
                this.state.loading
                ? ''
                  : <Tags tags={this.props.data.image.tags} />
              }
              {/* <a href='Upload'>
                <Button
                backgroundColor='#00695c'
                color='white' height=''
                gridSize='small-12 medium-12 large-12 columns'
                text='Random'
                />
              </a> */}
              {
                this.state.loading
                  ? <ImageDescription
                    title='Loading title...'
                    description='Loading description...'
                    />
                : <ImageDescription
                  title={this.props.data.image.title}
                  description={this.props.data.image.description}
                  />
              }
              {/* <Button
                background-color='purple'
                color='white' height=''
                gridSize='small-12 medium-12 large-12 columns'
                text='Submit'
              /> */}
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

const mapStateToProps = state => ({
  data: state.getIn(['browse', 'imageFromID'])
})

const mapDispatchToProps = (dispatch) => ({
  getImageInfoFromID: id => dispatch(imageInfoAction(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewImage)
