// Libraries
import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

// Our modules
import rootReducer from 'store/rootReducer'
import rootEpic from 'store/rootEpic'

// create epic middleware
const epicMiddleware = createEpicMiddleware(rootEpic)

let middlewares = [epicMiddleware]

// Create logger
if (process.env.NODE_ENV !== 'production') {
  const createLogger = require(`redux-logger`)
  const logger = createLogger()
  middlewares.push(logger)
}

// Only enable dev tools in development
const composeEnhancers = process.env.NODE_ENV !== 'production'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose

// create store
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...middlewares)
))

export default store
