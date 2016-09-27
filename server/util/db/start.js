/* eslint no-console: 0 */

// Libraries
const Exec = require('child_process').exec
const Path = require('path')

// Dir to store the data in
const dbPath = Path.join(__dirname, '..', '..', 'db')

// Docker run command
const cmd = `docker run -d -p 28015:28015 -p 8090:8080 -v ${dbPath}:/data --name tissdb rethinkdb`

// Execute command
const start = Exec(cmd)

// Remember if docker is installing image
let dbImage = false

// Runs when command writes to stdout
start.stdout.on('data', (data) => {
  if (data) {
    console.log('Sucessfully created tissdb\n')
  }
})

// Runs when command writes to stderr
start.stderr.on('data', (data) => {
  if (data === "Unable to find image 'rethinkdb:latest' locally\n" || dbImage) {
    console.log(data)
    dbImage = true
  } else {
    console.log('Error while creating tissdb:', data)
  }
})
