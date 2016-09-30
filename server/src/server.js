// Libraries
import Koa from 'koa'
import Router from 'koa-router'
import Parser from 'koa-bodyparser'
import Morgan from 'koa-morgan'
import Cors from 'kcors'

// Our modules
import { logger } from './util'

export default async function Server () {
  // Setup app
  const app = new Koa()
  const router = new Router()

  // Setup logging
  app.use(Morgan(
    process.env.NODE_ENV ? 'combined' : 'dev',
    { stream: logger.stream }
  ))

  // Setup routes
  router.get('/', ctx => {
    ctx.body = 'I\'m mr. Meeseeks!'
  })

  // Setup middlewares
  app.use(Cors())
  app.use(Parser())
  app.use(router.routes())
  app.use(router.allowedMethods())

  return app
}
