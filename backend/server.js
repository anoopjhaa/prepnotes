const express = require('express')
const notes = require('./data/notes.js')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

const PORT = process.env.PORT || 5000

app.get('/api/notes', (req, res) => {
  res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
  const found = notes.some((note) => note._id == req.params.id)
  if (found) {
    const individual = notes.filter((note) => note._id == req.params.id)
    res.json(individual)
  } else {
    res.json([{ message: 'Id does not exist' }])
  }
})

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`)
})
