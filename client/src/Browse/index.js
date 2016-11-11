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
import Footer from 'shared/FooterComponent'
import SearchBar from 'shared/SearchBarComponent'
import User from 'shared/UserComponent'
import AcuityImage from 'shared/AcuityImageComponent'

// Our styles
import './index.css'

class Browse extends PureComponent {
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

const mapStateToProps = (state) => ({
  hello: state.get('hello')
})

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(helloWorldAction)
})

export default connect(mapStateToProps, mapDispatchToProps)(Browse)
