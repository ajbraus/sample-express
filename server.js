// INSTANTIATING PACKAGES/LIBRARIES
const express = require('express')
const app = express()
const port = 3000

// INITIALIZATIONS


// ROUTES
app.get('/', (req, res) => {
  res.send('Raw text!')
})


// SERVER
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
