// Our modules
import upload from './upload'
import get from './get'
import browse from './browse'

export default router => {
  upload(router)
  get(router)
  browse(router)
}
