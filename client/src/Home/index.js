// Libraries
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Our actions
import { helloWorldAction } from 'store/actions'

// Our styles
import './index.css'

class Home extends Component {
  static propTypes = {
    world: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

  render () {
    return (
      <div>
        <h1 class='test'>What up my glib globs!</h1>
        <button type='button' class='success button' onClick={this.props.onClick}>
          Press me!
        </button>
        <h2>Output: {this.props.world}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  world: state.helloWorld.world
})

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(helloWorldAction)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
