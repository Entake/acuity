// Our modules
import upload from './upload'
import get from './get'

export default router => {
  upload(router)
  get(router)
}
