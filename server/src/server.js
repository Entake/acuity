// Libraries
import Koa from 'koa'
import Route from 'koa-route'
import Logger from 'koa-logger'
import Cors from 'kcors'

export default async function Server () {
  // Setup app
  const app = new Koa()

  // Setup middlewares
  app.use(Logger())
  app.use(Cors())

  // Test request
  app.use(Route.get('/', ctx => {
    ctx.body = 'I\'m mr. Meeseeks!'
  }))

  return app
}
