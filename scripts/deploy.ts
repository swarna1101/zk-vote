import { ethers } from "hardhat";
import * as dotenv from "dotenv";

dotenv.config();

async function main() {
  const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;

  if (!privateKey) {
    throw new Error("Private key not set in environment variables.");
  }

  // Connect to the local provider
  const provider = new ethers.providers.JsonRpcProvider(
    "https://rpc.hekla.taiko.xyz"
  );

  // Create a deployer wallet with the private key
  const deployer = new ethers.Wallet(privateKey, provider);

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // await run("compile");

  const VerifierContract = await ethers.getContractFactory(
    "VoteEvenOrOdd",
    deployer
  );
  const verifier = await VerifierContract.deploy();

  console.log("VoteEvenOrOdd deployed to:", verifier.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
