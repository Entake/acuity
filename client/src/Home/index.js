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
import UploadButton from 'shared/UploadButtonComponent'

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
              <a href='http://imgur.com'>
                <Button
                  backgroundColor='#c62828'
                  color='white' height='48px'
                  gridSize='small-3 medium-3 large-3 columns'
                  text='Latest'
                />
              </a>
              <a href='http://imgur.com'>
                <Button
                  backgroundColor='#d84315'
                  color='white' height='48px'
                  gridSize='small-3 medium-3 large-3 columns'
                  text='Popular'
                />
              </a>
              <a href='http://imgur.com'>
                <Button
                  backgroundColor='#00695c'
                  color='white' height='48px'
                  gridSize='small-3 medium-3 large-3 columns'
                  text='Random'
                />
              </a>
            </div>
            {/* <div>
              <h1 className='test'>What up my glib globs!</h1>
              <button type='button' className='success button' onClick={this.props.onClick}>
                Press me!
              </button>
              <h2>Output: {this.props.hello.get('world')}</h2>
            </div> */}
          </LeftContainer>
          <RightContainer>
            <UploadButton text='Upload' />
          </RightContainer>
        </LayoutContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
