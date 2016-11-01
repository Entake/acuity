// Libraries
import { Map } from 'immutable'

// Our modules
import * as ActionTypes from 'store/actionTypes'

// Set initial state
const initialState = Map({
  world: 'Goodbye World'
})

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.HELLO_WORLD:
      return state.set('world', 'Hello World')
    case ActionTypes.HELLO_WORLD_END:
      return state.set('world', action.payload.world)
    default:
      return state
  }
}
