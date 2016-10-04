// Our modules
import createServer from './server'
import { logger } from './util'
import { thinky } from './db'

const PORT = 8080

// Wait for DB to initialize
thinky.dbReady().then(() => {
  logger.info('Database ready, starting server...')
  // Start server
  createServer().listen(PORT, () => {
    logger.info(`🌍  acuity-backend is listening at http://localhost:${PORT}`)
  })
}).catch(e => {
  logger.error(e)
})

// output all uncaught exceptions
process.on('uncaughtException', err => logger.error('uncaught exception:', err))
process.on('unhandledRejection', err => logger.error('unhandled rejection:', err))
