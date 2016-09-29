// Libraries
import Koa from 'koa'
import Route from 'koa-route'
import Morgan from 'koa-morgan'
import Cors from 'kcors'

// Our modules
import { logger } from './util'

export default async function Server () {
  // Setup app
  const app = new Koa()

  // Setup logging
  app.use(Morgan(
    process.env.NODE_ENV ? 'combined' : 'dev',
    { stream: logger.stream }
  ))

  // Setup middlewares
  app.use(Cors())

  // Test request
  app.use(Route.get('/', ctx => {
    ctx.body = 'I\'m mr. Meeseeks!'
  }))

  return app
}
