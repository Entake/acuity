// Our modules
import { thinky } from './thinky'

export const Image = thinky.createModel('Image', {
  title: thinky.type.string().required(),
  description: thinky.type.string(),
  creationDate: thinky.type.date().default(thinky.r.now()),

  size: thinky.type.number().required(),
  height: thinky.type.number().required(),
  width: thinky.type.number().required(),

  imgPath: thinky.type.string().required(),
  thumbPath: thinky.type.string().required(),

  views: thinky.type.number().required().default(0),
  tags: thinky.type.array().schema(
    thinky.type.string().required()
  ).default([]),

  owner: thinky.type.string().required()
})
