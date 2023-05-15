docker run \
  -it -p 8000:8000 \
  hathornetwork/hathor-wallet-headless \
  --seed_default '<24_words_seed_phrase_string>' \
  --network testnet \
  --server https://node1.testnet.hathor.network/v1a/