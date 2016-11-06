// Libraries
import Koa from 'koa'
import Cors from 'kcors'
import Router from 'koa-router'
import Morgan from 'koa-morgan'
import Convert from 'koa-convert'
import Parser from 'koa-bodyparser'
import Passport from 'koa-passport'
import Session from 'koa-generic-session'

// Our modules
import setupUploadRoutes from './upload'
import { logger } from './util'
import setupAuthRoutes from './auth'
import { auth as authConfig } from '../config'

export default function Server () {
  // Setup app
  const app = new Koa()
  const router = new Router()
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
  setupUploadRoutes(router)

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
