// Libraries
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

// Our modules
import { User } from '../db'
import { hash } from '../util'

// Define serialize and deserialize functions
passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser(async (id, done) => {
  let user = null
  try {
    user = await User.get(id).run()
  } catch (e) {
    done(e, false)
    return
  }

  done(null, user)
})

// Use LocalStrategy
passport.use(
  new LocalStrategy(async (login, password, done) => {
    // Find all users with matching login
    const users = await User.filter({login}).limit(1).run()
    // Get the first match
    const user = users[0]
    // Check if exists
    if (!user) return done(null, false)
    // Compare password
    if (user.password !== hash(password)) return done(null, false)
    // Return user if successful
    return done(null, user)
  })
)
