# intial Coin offerning rest-api


## Installation

```bash
  git clone https://github.com/0xVikasRushi/Initial-Coin-Offering-RestApi
  cd Initial-Coin-Offering-RestApi
  npm install
  npm run dev
```
## API Reference

#### Get all contracts

```http
  GET /api/v1/contracts/
```

#### Get contracts info 

```http
  GET /api/v1/contracts/getContractInfo?address=query
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `address`      | `string` | **Required**.|




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file (any rpc-provider works).

`MONGODB_URL`
`ETHERSCAN_API_KEY`
`ALCHEMY_RPC_URL`
`PORT`

