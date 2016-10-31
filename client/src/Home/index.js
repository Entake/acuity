// Libraries
import { connect } from 'react-redux'
import React, { PropTypes } from 'react'

// Our actions
import { helloWorldAction } from 'store/actions'
import PureComponent from 'shared/PureComponent'

// Our styles
import './index.css'

class Home extends PureComponent {
  static propTypes = {
    hello: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
  }

  render () {
    console.log(this.props.hello.get('world'))
    return (
      <div>
        <h1 class='test'>What up my glib globs!</h1>
        <button type='button' class='success button' onClick={this.props.onClick}>
          Press me!
        </button>
        <h2>Output: {this.props.hello.get('world')}</h2>
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
