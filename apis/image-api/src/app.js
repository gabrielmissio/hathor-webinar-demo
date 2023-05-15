// Load environment variables from .env file
require('dotenv').config()
const express = require('express')
const { generateImg } = require('./img-service')

const app = express()
app.use(express.json())

const { PORT } = process.env

app.post('/generate-image', async (req, res) => {
  try {
    const { prompt } = req.body
    if (!prompt) return res.status(400).json({ error: 'prompt is required' })

    const data = await generateImg(prompt)
    return res.status(200).json(data)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error.message })
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
