import createServer from './server'

const PORT = 8080

// Start server
createServer().then(app => {
  app.listen(PORT, () => {
    console.log(`🌍  acuity-backend is listening at http://localhost:${PORT}`)
  })
})
