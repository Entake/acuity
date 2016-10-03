// Our modules
import './passport'
import login from './login'
import register from './register'

export default router => {
  login(router)
  register(router)
}
