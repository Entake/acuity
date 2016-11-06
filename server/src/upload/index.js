// Libraries
import { promisify } from 'bluebird'
import passport from 'passport'
import Multer from 'koa-multer'
import Sharp from 'sharp'
import Path from 'path'
import UUID from 'uuid'
import FS from 'fs'

// Our modules
import { logger } from '../util'
import fileFilter from './fileFilter'

// Define storage paths
const PATHS = {
  srcDest: Path.join(__dirname, '..', '..', 'uploads', 'source'),
  thumbDest: Path.join(__dirname, '..', '..', 'uploads', 'thumb')
}

// Promisify FS.writeFile
const writeFile = promisify(FS.writeFile)

// Store images initially in memory, so that we can process them
const storage = Multer.memoryStorage()

// Init multer
const upload = new Multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10485760, // 10MB
    files: 1
  }
})

export default router => {
  router.post('/api/upload', passport.authenticate('jwt', { session: false }), upload.single('image'), async (ctx, next) => {
    const srcImg = ctx.req.file

    // If image is rejected, stop upload process
    if (!srcImg) {
      logger.info('Image rejected')
      ctx.status = 400
      return
    }

    // Save source image
    const srcFile = `${PATHS.srcDest}/acuity-source-${UUID.v4()}${Path.extname(srcImg.originalname)}`
    await writeFile(srcFile, Buffer.from(srcImg.buffer), (err) => {
      if (err) {
        logger.error(err)
        ctx.status = 500 // Return with Internal Server Error
      }
    })

    // Create thumbnail
    const thumbFile = `${PATHS.thumbDest}/acuity-thumb-${UUID.v4()}.jpeg`
    await Sharp(Buffer.from(srcImg.buffer))
      .resize(300, 200)
      .background('white') // TODO: Decide what to do when images don't fit the aspect ratio
      .embed()
      .jpeg()
      .toFile(thumbFile, (err, info) => {
        if (err) {
          logger.error(err)
          ctx.status = 500 // Return with Internal Server Error
        }
      })

    // OK (successful)
    ctx.status = 200
  })
}
