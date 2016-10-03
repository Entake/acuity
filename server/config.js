exports.db = {
  host: process.env.ACUITY_DB_URL || 'localhost',
  port: process.env.ACUITY_DB_PORT || 28015,
  db: 'acuitydb'
}

exports.auth = {
  passwordSalt: process.env.ACUITY_PASSWORD_SALT || 'unicornLlamas',
  sessionSecret: process.env.ACUITY_SESSION_SECRET || 'spaceMonkeys'
}
