// Libraries
import { promisify } from 'bluebird'
import Passport from 'passport'
import Multer from 'koa-multer'
import sizeOf from 'image-size'
import Sharp from 'sharp'
import Path from 'path'
import UUID from 'uuid'
import FS from 'fs'

// Our modules
import { Image } from '../db'
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
    fileSize: 10000000, // 10MB
    files: 1
  }
})

export default router => {
  router.post('/api/upload', Passport.authenticate('jwt', { session: false }), upload.single('image'), async (ctx, next) => {
    const srcImg = ctx.req.file

    // Get user input
    const { title, description } = ctx.req.body

    // If image is rejected, stop upload process
    if (!srcImg) {
      logger.info('No image received')
      ctx.status = 400
      ctx.body = {
        error: 'Error when receiving image, maybe the image doesn\'t fit the requirements?'
      }
      return
    }

    // Make sure title is not empty
    if (!title || !title.length) {
      ctx.status = 400
      ctx.body = { error: 'Title is required' }
      return
    }

    // Save source image
    const srcFile = `acuity-source-${UUID.v4()}${Path.extname(srcImg.originalname)}`
    await writeFile(`${PATHS.srcDest}/${srcFile}`, Buffer.from(srcImg.buffer), (err) => {
      if (err) {
        logger.error(err)
        ctx.status = 500 // Return with Internal Server Error
        ctx.body = { error: 'Failed while saving source file' }
        return
      }
    })

    // Create thumbnail
    const thumbFile = `acuity-thumb-${UUID.v4()}.jpeg`
    await Sharp(Buffer.from(srcImg.buffer))
      .resize(300, 200)
      .background('white') // TODO: Decide what to do when images don't fit the aspect ratio
      .embed()
      .jpeg()
      .toFile(`${PATHS.thumbDest}/${thumbFile}`, (err, info) => {
        if (err) {
          logger.error(err)
          ctx.status = 500 // Return with Internal Server Error
          ctx.body = { error: 'Failed while generating thumbnail' }
          return
        }
      })

    // Create db entry
    const dimensions = sizeOf(`${PATHS.srcDest}/${srcFile}`)
    const entry = {
      title: title,
      description: description,

      size: srcImg.size,
      height: dimensions.height,
      width: dimensions.width,

      img: srcFile,
      thumb: thumbFile,

      owner: ctx.req.user.id
    }

    // Remove description if user did not supply it
    if (!description || !description.length) delete entry.description

    // Save image in db
    const image = new Image(entry)
    await image.save()

    // OK (successful)
    ctx.status = 200
  })
}
