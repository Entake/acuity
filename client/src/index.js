// Libraries
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// Our modules
import App from 'app'

// Create render function
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('app')
  )
}

// Do initial render
render()

// Hot Module Replacement - Needs to point to root component
if (module.hot) {
  module.hot.accept(App, render)
}
