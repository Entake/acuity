// Libraries
import test from 'tape'
// import supertest from 'supertest'

// Our modules
import { db as dbConfig } from '../config'
import { thinky, r } from '../src/db'
// import server from '../src/server'

// Our tests
import core from './core'
// import { login, register } from './auth'

export default (reqlite) => {
  thinky.dbReady().then(() => {
    // Prepare DB for tests
    test(async (t) => {
      // Clean DB
      await r.db(dbConfig.db).table('User').delete()
      t.end()
    })

    // Run our tests
    core(test)

    // Close DB Connections
    test((t) => {
      setImmediate(() => r.getPoolMaster().drain())
      reqlite.stop()
      t.end()
    })
  })
}
