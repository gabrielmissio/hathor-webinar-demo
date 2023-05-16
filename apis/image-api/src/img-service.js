const openai = require('./openai')

async function generateImg (prompt) {
  try {
    const { data } = await openai.createImage({
      prompt,
      size: '512x512'
    })

    return data.data[0]
  } catch (error) {
    if (error.response) {
      console.log(error.response.status)
      console.log(error.response.data)
    } else {
      console.log(error.message)
    }

    throw new Error('Error generating image')
  }
}

module.exports = { generateImg }
