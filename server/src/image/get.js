// Libraries
import Path from 'path'
import FS from 'fs'
import MIME from 'mime-types'

// Our modules
import { asyncRequest } from '../util'
import { Image } from '../db'

// Image paths
const thumbDir = Path.join(__dirname, '..', '..', 'uploads', 'thumb')
const imgDir = Path.join(__dirname, '..', '..', 'uploads', 'source')

export default router => {
  router.get('/api/get/thumb/:id', asyncRequest(async (ctx, next) => {
    const { id } = ctx.request.ctx.params

    // Get image from db
    const image = await Image.get(id)
    const thumb = `${thumbDir}/${image.thumb}`

    ctx.set('Content-Type', MIME.lookup(thumb))
    ctx.body = FS.createReadStream(thumb)
  }))

  router.get('/api/get/image/:id', asyncRequest(async (ctx, next) => {
    const { id } = ctx.request.ctx.params

    // Get image from db
    const image = await Image.get(id)
    const img = `${imgDir}/${image.img}`

    ctx.set('Content-Type', MIME.lookup(img))
    ctx.body = FS.createReadStream(img)
  }))
}
