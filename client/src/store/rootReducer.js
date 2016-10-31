// Libraries
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// Our modules
import * as ActionTypes from './actionTypes'

// Set initial state
const initialState = {
  world: 'Goodbye World'
}

const helloWorld = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.HELLO_WORLD:
      return {
        world: 'Hello World'
      }
    case ActionTypes.HELLO_WORLD_END:
      return {
        world: action.payload.world
      }
    default:
      return state
  }
}

export default combineReducers({
  helloWorld,
  routing: routerReducer
})
