// Libraries
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'

// Our modules
import { User } from '../db'
import { hash } from '../util'
import { auth as authConfig } from '../../config'

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
  new LocalStrategy({usernameField: 'login'}, async (login, password, done) => {
    // Find all users with matching login
    let users = []
    try {
      users = await User.filter({login}).limit(1).run()
    } catch (e) {
      return done(e, false)
    }
    // Get the first match
    const user = users[0]
    // Check if exists
    if (!user) return done(null, false)
    // Compare password
    if (user.password !== hash(password)) return done(null, false)
    // Return user if successful
    delete user.password // Remove password from response
    return done(null, user)
  })
)

// Use JwtStrategy
const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromHeader('x-access-token'),
  secretOrKey: authConfig.jwtSecret
}
passport.use(
  new JwtStrategy(jwtOpts, async (payload, done) => {
    let user
    try {
      user = await User.get(payload.id)
        .without(['password'])
        .execute()
    } catch (e) {
      return done(e, false)
    }

    // Check if user exists
    if (!user) {
      return done(null, false)
    }

    // Return user if successful
    return done(null, user)
  })
)
