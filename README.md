
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

#### Get contracts info - sample examples

```http
  GET /api/v1/contracts/?tokenName=TEST&deployedOn=mumbai&sort=+decimal

  GET /api/v1/contracts/?sort=+decimal

  GET /api/v1/contracts/?company=gensis&deployedOn=polygon
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `tokenName`      | `string` | **match similar strings**|
| `Symbol`      | `string` | **match exact string**|
| `company`      | `string` | **match similar strings**|
| `contactAddress`      | `string` | **match exact string**|
| `deployedOn`      | `string` | **match exact string**|
| `sort`      | `string` |  **Required to give sign to sort + or -**|



#### Post Contract info


```http
  POST /api/v1/contracts/address=CONTRACTADRESS
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

