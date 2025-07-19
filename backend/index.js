const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')




const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/NotesMiniProject')
    console.log('MongoDB connected successfully')
  } catch (error) {
    console.error('MongoDB connection error:', error)
  }
}

connectDB()

app.get('/', (req, res) => {
  res.send('Starting the Notes Mini Project')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
