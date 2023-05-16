const fetch = require('cross-fetch')

const { HEADLESS_WALLET_API_URL, X_WALLET_ID } = process.env

async function createNFT (payload) {
  try {
    const requestUrl = `${HEADLESS_WALLET_API_URL}/wallet/create-nft`
    const config = {
      method: 'POST',
      headers: { 'x-Wallet-id': X_WALLET_ID, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }

    const response = await fetch(requestUrl, config)
    const result = await response.json()

    return result
  } catch (error) {
    console.error(error)
    throw new Error('Error creating NFT')
  }
}

module.exports = { createNFT }
