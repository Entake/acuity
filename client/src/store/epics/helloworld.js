// Our modules
import * as ActionTypes from '../actionTypes'

export const helloWorld = action$ => action$
  .ofType(ActionTypes.HELLO_WORLD)
  .delay(500)
  .mapTo({
    type: ActionTypes.HELLO_WORLD_END,
    payload: { world: 'Goodbye World' }
  })
