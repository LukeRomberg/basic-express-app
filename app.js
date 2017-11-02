const express = require('express');
const app = express()

app.listen(3000, (req, res) => {
  console.log('You\'re doing great!')
})

app.get('/', (req, res) => {
  res.send('Helloooo!')
})
