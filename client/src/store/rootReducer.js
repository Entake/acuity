// Libraries
import { combineReducers } from 'redux-immutable'

// Reducers
import reducers from 'store/reducers'

export default combineReducers({
  ...reducers
})
