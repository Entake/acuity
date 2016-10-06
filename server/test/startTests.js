// Libraries
import test from 'tape'
import supertest from 'supertest'

// Our modules
import { db as dbConfig } from '../config'
import { thinky, r } from '../src/db'
import createServer from '../src/server'

// Our tests
import core from './core'
import { register, login } from './auth'

export default (reqlite) => {
  thinky.dbReady().then(() => {
    // Prepare DB and supertest for tests
    const server = createServer().listen()
    const request = supertest(server)
    test('Prepare DB', async (t) => {
      // Clean DB
      await r.db(dbConfig.db).table('User').delete()
      t.end()
    })

    // Run our tests
    core(test, request)
    register(test, request)
    login(test, request)

    // Close server and DB Connections
    test('Close DB', (t) => {
      server.close()
      setImmediate(() => r.getPoolMaster().drain())
      reqlite.stop()
      t.end()
    })
  })
}
