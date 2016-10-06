// Libraries
import passport from 'passport'
import jwt from 'jsonwebtoken'

// Our modules
import {auth as authConfig} from '../../config'

export default router => {
  router.post('/api/login', passport.authenticate('local'), (ctx, next) => {
    if (ctx.req.user) {
      const token = jwt.sign(ctx.req.user, authConfig.jwtSecret)
      ctx.body = { user: ctx.req.user, token }
    } else {
      ctx.status = 401
      ctx.body = { error: 'Error loggin in!' }
    }
  })
}
