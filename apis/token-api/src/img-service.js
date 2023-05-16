const fetch = require('cross-fetch')

const { IMAGE_API_URL } = process.env

async function generateImg (prompt) {
  try {
    const requestUrl = `${IMAGE_API_URL}/generate-image`
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    }

    const response = await fetch(requestUrl, config)
    const result = await response.json()

    return result
  } catch (error) {
    console.error(error)
    throw new Error('Error generating image')
  }
}
module.exports = { generateImg }
