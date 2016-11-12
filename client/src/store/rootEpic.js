// Libraries
import { combineEpics } from 'redux-observable'

// Our modules
import epics from 'epics'

export default combineEpics(...epics)
