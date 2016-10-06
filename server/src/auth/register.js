// Our modules
import { User } from '../db'
import { hash, asyncRequest } from '../util'

export const loginTaken = async (login) => {
  // check if login already taken
  const users = await User.filter({login}).run()
  return users.length > 0
}

export default router => {
  router.post('/api/register', asyncRequest(async (ctx, next) => {
    // Get user input
    const { login, password, passwordRepeat } = ctx.request.body

    // Check if passwords match
    if (password !== passwordRepeat) {
      ctx.status = 400
      ctx.body = {error: 'Passwords do not match!'}
      return
    }

    // Hash password
    const hashedPassword = hash(password)

    // check if login already taken
    const exists = await loginTaken(login)
    if (exists) {
      ctx.status = 403
      ctx.body = {error: 'User already exists!'}
      return
    }

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
