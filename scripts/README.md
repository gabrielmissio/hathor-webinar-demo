# Scripts

The `scripts` folder contains useful scripts for setting up and running the Hathor Wallet Headless using Docker.

## Script Descriptions

### 01-generate-words.sh

This script is responsible for generating a seed (mnemonic phrase) for the wallet.

To run the script, use the following command:

```bash
./01-generate-words.sh
```

### 02-start-headless-wallet.sh

This script starts the Hathor Wallet Headless API in a Docker container. It requires a 24-words seed phrase as a parameter.

Open the 02-start-headless-wallet.sh file and replace `<24_words_seed_phrase_string>` with the generated seed or an existing seed.

To start the Headless Hathor Wallet API, use the following command:

```bash
./02-start-headless-wallet
```

Please note that the `02-start-headless-wallet.sh` script is pre-configured to work on the Hathor testnet. If you intend to use a different network, make the necessary modifications within the script.

## Getting Started 

Once the Headless Hathor Wallet is up and running, you can interact with it using the provided Postman collection.

1. Open the Postman application.
2. Import the Postman collection from the collections folder.
3. Locate the "headless-hathor-wallet/start" request within the collection.
