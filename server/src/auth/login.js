//
import passport from 'passport'

export default router => {
  router.post('/api/login', passport.authenticate('local'), (ctx, next) => {
    ctx.body(ctx.request.user)
  })
}
