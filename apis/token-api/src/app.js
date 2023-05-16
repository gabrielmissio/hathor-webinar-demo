// Load environment variables from .env file
require('dotenv').config()
const express = require('express')
const { mintNFT } = require('./nft-service')

const app = express()
app.use(express.json())

const { PORT } = process.env

app.post('/create-nft', async (req, res) => {
  try {
    const { address, amount, symbol, name, metadata } = req.body
    if (!amount || !symbol || !name || !metadata) return res.status(400).json({ error: 'missing required fields' })

    const data = await mintNFT({ amount, symbol, name, metadata, address })

    return res.status(200).json(data)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error.message })
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
