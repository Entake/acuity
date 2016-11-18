// Libraries
const Path = require('path')

exports.db = {
  host: process.env.ACUITY_DB_URL || 'localhost',
  port: process.env.ACUITY_DB_PORT || 28015,
  db: process.env.ACUITY_DB_NAME || 'acuitydb'
}

exports.auth = {
  passwordSalt: process.env.ACUITY_PASSWORD_SALT || 'unicornLlamas',
  sessionSecret: process.env.ACUITY_SESSION_SECRET || 'spaceMonkeys',
  jwtSecret: process.env.ACUITY_JWT_SECRET || 'tinyRick'
}

exports.vision = {
  key: process.env.ACUITY_VISION_API_KEY || Path.join(__dirname, 'key.json')
}
