// Our modules
import createServer from './server'
import { logger } from './util'
import { thinky } from './db'

const PORT = 8080

// Wait for DB to initialize
thinky.dbReady().then(() => {
  logger.info('Database ready, starting server...')
  // Start server
  createServer().then(app => {
    app.listen(PORT, () => {
      logger.info(`🌍  acuity-backend is listening at http://localhost:${PORT}`)
    })

    // catch errors
  }).catch(e => {
    logger.error(e)
    process.exit()
  })
}).catch(e => {
  logger.error(e)
})
