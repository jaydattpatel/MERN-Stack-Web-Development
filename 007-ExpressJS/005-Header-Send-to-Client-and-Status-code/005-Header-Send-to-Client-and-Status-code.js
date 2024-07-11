/*
author : Jaydatt Patel

Send Header Data to client
*/
const express = require('express')

// Create a server.

const server = express()

//GET request
server.get('/', (req, res) => {

  //sending header details
  res.set("Conteny-Type", "text/plain")
  res.set("My-Type", "MyData")

  // sending response with status code.
  res.status(201).send('Hello world! This is Express server')
})

// Assign port
server.listen(3100, () => {
  console.log(`Server running at port 3100.......`)
})
