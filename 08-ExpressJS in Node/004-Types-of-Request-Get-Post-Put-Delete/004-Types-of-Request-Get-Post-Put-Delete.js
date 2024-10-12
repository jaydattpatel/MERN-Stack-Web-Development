/*
author : Jaydatt Patel

Different types of request:
GET, POST, PUT, DELETE, HEAD, PATCH, OPTIONS

*/

const express = require('express')

// Create a server.
const server = express()

// Get default request
server.get('', (req, res) => {
    res.send('Welcome to Express JS')
  })

//GET request
server.get('/', (req, res) => {
  res.send('Hello world! This is Express server')
})

//POST request
server.post('/', (req, res) => {
  res.send('Post request received')
})

//PUT request
server.put('/', (req, res) => {
  res.send('Put request received')
})

//DELETE request
server.delete('/', (req, res) => {
  res.send('Delete request received')
})

// Assign port
server.listen(3100, () => {
  console.log(`Server running at http://localhost:3100`)
})
