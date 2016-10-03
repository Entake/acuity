// Our modules
import { db as dbConfig } from '../config'
import { thinky, r } from 'db'

// Tests
import core from './core'
//import { login, register } from './auth'

thinky.dbReady().then(async () => {
  // Prepare DB for tests
  describe('Prepare for tests', () => {
    it('Should clean the database', async () => {
      await r.db(dbConfig.db).table('User').delete()
    })
  })

  // Execute tests
  core()
  //register()
  // login()

  // Close DB connections
  describe('Cleanup after tests', () => {
    it('Should close all db connections', () => {
      setImmediate(() => r.getPoolMaster().drain())
      reqlite.kill()
    })
  })
})
