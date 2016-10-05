// Libraries
import Koa from 'koa'
import Cors from 'kcors'
import Router from 'koa-router'
import Parser from 'koa-bodyparser'
import Morgan from 'koa-morgan'
import Convert from 'koa-convert'
import Session from 'koa-generic-session'
import Passport from 'koa-passport'

// Our modules
import { logger } from './util'
import { auth as authConfig } from '../config'
import setupAuthRoutes from './auth'

export default function Server () {
  // Setup app
  const app = new Koa()
  const router = new Router()
  // TODO: Find out if this is the session secret, or wtf it's used for
  app.keys = [authConfig.sessionSecret]

  // Setup logging
  app.use(Morgan(
    (process.env.NODE_ENV === 'production') ? 'combined' : 'dev',
    { stream: logger.stream }
  ))

  // Setup routes
  router.get('/', ctx => {
    ctx.body = 'I\'m mr. Meeseeks!'
  })

  setupAuthRoutes(router)

  // Setup middlewares
  app.use(Cors())
  app.use(Parser())
  app.use(Convert(
    Session({
      cookie: {
        path: '/',
        maxage: 2592000000, // 1 month
        secure: process.env.NODE_ENV === 'production',
        signed: true
      }
    })
  ))
  app.use(Passport.initialize())
  app.use(Passport.session())
  app.use(router.routes())
  app.use(router.allowedMethods())

  return app
}
