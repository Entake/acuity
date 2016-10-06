// Set NODE_ENV to testing
process.env.NODE_ENV = 'testing'

// Require babel hook
require('babel-core/register')

// Create Reqlite instance
const ReqliteServer = require('reqlite')
const reqlite = new ReqliteServer({silent: true})

// Require and start our tests
const startTests = require('./startTests').default
startTests(reqlite)
