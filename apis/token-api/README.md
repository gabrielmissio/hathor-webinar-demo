# Token API

The Token API exposes an endpoint for creating NFTs. It follows a multi-step process, including generating an image from the metadata description using the Image API, uploading the image to IPFS using the Infura IPFS API, and finally, creating a new NFT using the Hathor Headless Wallet API.


## Setup

To set up the Token API, follow the instructions below:

1. Create a `.env` file:
   - Make a copy of the `.demo.env` file in the `apis/token-api` directory and rename it to `.env`.
   - Open the `.env` file and replace the placeholders with the necessary values.

2. Install dependencies:
   - Run the following command to install the required dependencies:
     ```
     npm install
     ```

3. Start the Token API:
   - Run the following command to start the Token API:
     ```
     npm start
     ```

## Example Request

For an example request to the Token API, please refer to the Postman collection provided in the `collections` folder. The collection includes sample requests and demonstrates how to interact with the API to create NFTs.
