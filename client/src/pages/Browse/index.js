// Libraries
import { connect } from 'react-redux'
import React, { PureComponent, PropTypes } from 'react'
import { Link } from 'react-router'

// Our actions
import { browseAction } from 'store/actions'

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
  constructor () {
    super()

    this.state = {
      loading: true,
      page: 1
    }
  }

  static propTypes = {
    user: PropTypes.object,
    images: PropTypes.array,
    browse: PropTypes.func.isRequired
  }

  componentWillMount = () => {
    this.props.browse(this.state.page)
  }

  componentDidUpdate = () => {
    if (this.props.images) {
      console.log('woop', this.props.images)
      this.setState({
        loading: false
      })
    }
  }

  render () {
    const loading = <h1>Loading...</h1>
    let images

    // Insert images
    if (!this.state.loading) {
      const length = Object.keys(this.props.images).length
      if (length >= 1) {
        images = this.props.images.map(image => {
          return (
            <AcuityImage
              key={image.id}
              src={`/api/get/thumb/${image.id}`}
              imgHref={`/browse/${image.id}`}
              tag1='test'
              tag2='test'
              tag3='tag4'
            />
          )
        })

        const remainder = length % 4
        if (remainder !== 0) {
          for (let i = 0; i < remainder; i++) {
            images.push(<div key={`fillerDiv-${i}`} className='small-6 medium-3 large-3 columns' />)
          }
        }
      } else {
        // In lack of better error handling, lets blame the unicorns
        images = <h1>Our unicorns ran our of images :(</h1>
      }
    }

    return (
      <div>
        <LayoutContainer>
          <LeftContainer>
            <div className='row'>
              {
                this.props.user
                  ? <User userName={this.props.user.login} quote='A Lovely user..' />
                : ''
              }
              <SearchBar />
              <Link to='/browse'>
                <Button
                  backgroundColor='#c62828'
                  color='white' height=''
                  gridSize='small-12 medium-12 large-4 columns'
                  text='Latest'
                />
              </Link>
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
            <section className='searchResults'>
              <div className='row'>
                {
                  this.state.loading
                  ? loading
                  : images
                }
              </div>
            </section>
          </RightContainer>
        </LayoutContainer>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.getIn(['auth', 'user']),
  images: state.getIn(['browse', 'images'])
})

const mapDispatchToProps = dispatch => ({
  browse: page => dispatch(browseAction(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Browse)
