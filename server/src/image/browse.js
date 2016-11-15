// Our modules
import { asyncRequest, logger } from '../util'
import { Image, User } from '../db'

export default router => {
  router.post('/api/browse', asyncRequest(async (ctx, next) => {
    let { page } = ctx.request.body

    if (!page || page <= 0) page = 1

    const images = await Image.filter({})

    ctx.body = images
  }))

  router.post('/api/imageInfo', asyncRequest(async (ctx, next) => {
    const { id } = ctx.request.body

    if (!id) {
      ctx.status = 400
      ctx.body = { error: 'Error: did not receive ID' }
      return
    }

    const image = await Image.get(id).catch(e => logger.info(e))

    // If image doesn't exist
    if (!image) {
      ctx.status = 400
      ctx.body = { error: 'Error: Bad ID' }
      return
    }

    // Only get user, once we know that the image ID is valid
    const user = await User.get(image.owner)

    ctx.body = { image: image, user: user }
  }))
}
