require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Load environment variables from .env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    // Ethereum Sepolia testnet
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/aDuEJGbVAA-ZzbjDYGS-S",
      accounts: [process.env.PRIVATE_KEY]
    },

    // Base Sepolia testnet
    baseSepolia: {
      url: "https://sepolia.base.org",
      accounts: [process.env.PRIVATE_KEY]
    },

    // Base mainnet
    base: {
      url: "https://mainnet.base.org",
      accounts: [process.env.PRIVATE_KEY]
    },

    // Ethereum mainnet (when you're ready to go live)
    mainnet: {
      url: "https://rpc.ankr.com/eth",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
