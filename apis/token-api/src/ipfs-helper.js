const fetch = require('cross-fetch')
const FormData = require('form-data')

const { INFURA_PROJECT_ID, INFURA_API_URL, INFURA_API_KEY } = process.env

async function uploadFile (file) {
  try {
    const formData = new FormData()
    formData.append('file', file)

    const requestUrl = `${INFURA_API_URL}/api/v0/add`
    const config = {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + Buffer.from(INFURA_PROJECT_ID + ':' + INFURA_API_KEY).toString('base64')
      },
      body: formData
    }

    const response = await fetch(requestUrl, config)

    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
    throw new Error('Error uploading file')
  }
}

async function getFileBuffer (url) {
  try {
    const config = { method: 'GET' }
    const file = await fetch(url, config)

    const result = Buffer.from(await file.arrayBuffer())
    return result
  } catch (error) {
    console.error(error)
    throw new Error('Error getting file buffer')
  }
}

module.exports = { uploadFile, getFileBuffer }
