# CED-DApp-API

API example for CED.

## 🛠 Built With

[![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=for-the-badge)](https://nodejs.org/en/)
[![Express Badge](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=for-the-badge)](https://expressjs.com/)
[![Ethers Badge](https://img.shields.io/badge/Ethers-3C3C3D?logo=ethereum&logoColor=fff&style=for-the-badge)](https://docs.ethers.org/v6/)
[![Hardhat Badge](https://img.shields.io/badge/Hardhat-3C3C3D?logo=ethereum&logoColor=fff&style=for-the-badge)](https://hardhat.org/)
[![Solidity Badge](https://img.shields.io/badge/Solidity-363636?logo=solidity&logoColor=fff&style=for-the-badge)](https://soliditylang.org/)

## ⚙️ Run Locally

Clone the project

```bash
git clone https://github.com/Kerala-Blockchain-Academy/ced-dapp-api.git
cd ced-dapp-api
```

Install dependencies

```bash
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
