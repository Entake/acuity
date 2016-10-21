// Libraries
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import { Router, Route, browserHistory } from 'react-router'

class App extends Component {
  render () {
    return (
      <h1>Hello world!</h1>
    )
  }
}

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
}

render()

// Hot Module Replacement - Needs to point to root component
if (module.hot) {
  module.hot.accept(App, render)
}
