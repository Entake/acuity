// Libraries
import Path from 'path'

// Our modules
import { logger } from '../util'

// Filter image types
export default (req, file, cb) => {
  switch (Path.extname(file.originalname)) {
    case '.jpg':
    case '.jpeg':
    case '.png':
    case '.tiff':
    case '.gif':
      cb(null, true)
      break

    default:
      logger.info('Image rejected')
      cb(null, false)
  }
}
