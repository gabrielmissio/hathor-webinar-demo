const { generateImg } = require('./img-service')
const { createNFT } = require('./headless-wallet')
const { getFileBuffer, uploadFile } = require('./ipfs-helper')

async function mintNFT ({ metadata, ...payload } = {}) {
  const { fileUploadResult, metadataUploadResult } = await uploadMetadata(metadata)
  const requestConfig = {
    ...payload,
    changeAddress: process.env.MAIN_ADDRESS,
    xWalletId: process.env.APP_WALLET,
    data: `ipfs://ipfs/${metadataUploadResult.ipfs.Hash}`
  }

  const walletHeadlessResult = await createNFT(requestConfig)

  const result = {
    ...payload,
    metadata: {
      fileHash: fileUploadResult.ipfs.Hash,
      metadataHash: metadataUploadResult.ipfs.Hash,
      fileUrl: `https://ipfs.io/ipfs/${fileUploadResult.ipfs.Hash}`,
      metadataUrl: `https://ipfs.io/ipfs/${metadataUploadResult.ipfs.Hash}`
    },
    transaction: walletHeadlessResult
  }
  return result
}

async function uploadMetadata (metadata) {
  const { url: fileUrl } = await generateImg(metadata.description)
  console.log('fileUrl', fileUrl)

  const fileBuffer = await getFileBuffer(fileUrl)

  const fileIpfsUploadResult = await uploadFile(fileBuffer)

  const metadataContent = JSON.stringify({ file: `ipfs://ipfs/${fileIpfsUploadResult.Hash}`, ...metadata })

  const metadataIpfsUploadResult = await uploadFile(metadataContent)

  const result = {
    fileUploadResult: { ipfs: fileIpfsUploadResult },
    metadataUploadResult: { ipfs: metadataIpfsUploadResult }
  }
  return result
}

module.exports = { mintNFT }
