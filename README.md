# CED-DApp-API

API example for CED.

## 🛠 Built With

[![Node.js](https://img.shields.io/badge/node.js-olivedrab?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![Express](https://img.shields.io/badge/express-olivedrab?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Ethers](https://img.shields.io/badge/ethers-darkslategray?style=for-the-badge&logo=ethereum&logoColor=white)](https://docs.ethers.org/v6/)
[![Hardhat](https://img.shields.io/badge/hardhat-darkslategray?style=for-the-badge&logo=ethereum&logoColor=white)](https://hardhat.org/)
[![Solidity](https://img.shields.io/badge/solidity-sienna?style=for-the-badge&logo=solidity&logoColor=white)](https://soliditylang.org/)

## ⚙️ Run Locally

Clone the project

```bash
git clone https://github.com/Kerala-Blockchain-Academy/ced-dapp-api.git
cd ced-dapp-api
```

Install dependencies for hardhat

```bash
cd hardhat
npm install
```

Create a '.env' and add the following variables

```bash
CHAIN=sepolia
API_KEY=<your-alchemy-api-key>
PRIVATE_KEY=<your-ethereum-private-key>
```

Deploy the contract

```bash
npm run deploy:sepolia
```

Copy '.env' to api

```bash
cp .env ../api/
```

Install dependencies for api

```bash
cd .. && cd api/
npm install
```

Start the application

```bash
npm run dev
```

Issue a certificate (new terminal)

```bash
curl -X POST http://localhost:8080/issue -H "Content-Type: application/json" -d '{"id": 9, "name": "Langley", "course": "9th Agency", "grade": "S", "date": "N.F. 79"}'
```

Fetch a certificate

```bash
curl http://localhost:8080/fetch?id=9
```
