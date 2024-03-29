import { Contract, JsonRpcProvider, Wallet } from "ethers";
import details from "../artifacts/details.json" assert { type: "json" };
import Cert from "../artifacts/contracts/Cert.sol/Cert.json" assert { type: "json" };

let instance;

if (process.env.CHAIN === "sepolia") {
  const provider = new JsonRpcProvider(
    `https://eth-sepolia.g.alchemy.com/v2/${process.env.API_KEY}`,
  );
  const wallet = new Wallet(process.env.PRIVATE_KEY, provider);

  instance = new Contract(details.contract, Cert.abi, wallet);
} else {
  const provider = new JsonRpcProvider("http://127.0.0.1:8545");
  const signer = await provider.getSigner(details.deployer);

  instance = new Contract(details.contract, Cert.abi, signer);
}

export default instance;
