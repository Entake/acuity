// Libraries
import initThinky from 'thinky'

// DB config
import { db as dbConfig } from '../../config'

// Init thinky
const thinky = initThinky(dbConfig)
const { r } = thinky

export { thinky, r }
