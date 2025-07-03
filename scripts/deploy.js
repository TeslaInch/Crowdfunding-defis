const hre = require("hardhat");
//0x5FbDB2315678afecb367f032d93F642f64180aa3
async function main() {
  const CrowFunding = await hre.ethers.getContractFactory("CrowFunding"); 
  const crowFunding = await CrowFunding.deploy();

  await crowFunding.deployed();

  console.log(`crowdFunding deployed to ${crowFunding.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
