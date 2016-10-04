// Our modules
import { User } from '../db'
import { logger, hash, asyncRequest } from '../util'

export default router => {
  router.post('/api/register', asyncRequest(async (ctx, next) => {
    // Get user input
    const { login, password, passwordRepeat } = ctx.request.body
    logger.info(ctx.request.body)

    // Check if passwords match
    if (password !== passwordRepeat) {
      ctx.status = 400
      ctx.body = {error: 'Passwords do not match!'}
      return
    }

    // Hash password
    const hashedPassword = hash(password)

    // Create user
    const user = new User({
      login,
      password: hashedPassword
    })

    // Save user to DB
    await user.save()

    // If successful, respond with status 201 'Created'
    ctx.status = 201
  }))
}
