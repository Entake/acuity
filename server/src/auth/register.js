// Our modules
import { User } from '../db'
import { logger, hash, asyncRequest } from '../util'

export default router => {
  router.post('/api/register', asyncRequest(async (ctx, next) => {
    // Get user input
    const { login, password, passwordRepeat } = ctx.body
    logger.info(ctx.body)

    if (password !== passwordRepeat) {
      ctx.status(400).body({error: 'Passwords do not match!'})
      return
    }

    const hashedPassword = hash(password)

    const user = new User({
      login,
      password: hashedPassword
    })
    await user.save()

    ctx.status(201)
  }))
}
