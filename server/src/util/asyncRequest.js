// Our modules
import { logger } from './logger'

export const asyncRequest = (handler) =>
  (ctx, next) =>
    handler(ctx, next).catch(e => logger.error('Error during request:', e))
