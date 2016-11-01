// Libraries
import { combineReducers } from 'redux-immutable'

// Reducers
import helloReducer from 'store/reducers/helloReducer'
import routerReducer from 'store/reducers/routerReducer'

export default combineReducers({
  hello: helloReducer,
  routing: routerReducer
})
