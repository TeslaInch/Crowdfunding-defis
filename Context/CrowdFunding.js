import React, { useState, useEffect } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

import { CrowdFundingABI, CrowdFundingAddress } from "./contants";

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(CrowdFundingAddress, CrowdFundingABI, signerOrProvider);

export const CrowdFundingContext = React.createContext();

export const CrowdFundingProvider = ({ children }) => {
  const titleData = "Crowd Funding Data";
  const [currentAccount, setCurrentAccount] = useState("");

  // ✅ Enforce MetaMask only
  const ensureMetaMask = async () => {
    if (typeof window === "undefined" || !window.ethereum || !window.ethereum.isMetaMask) {
      throw new Error("MetaMask is not installed or unavailable. Please install it to continue.");
    }

    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    if (!accounts || accounts.length === 0) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
    }
  };

  // ✅ Force Web3Modal to show MetaMask only
  const getWeb3Modal = () =>
    new Web3Modal({
      cacheProvider: false,
      providerOptions: {
        injected: {
          display: {
            name: "MetaMask",
            description: "Connect using MetaMask only",
          },
          package: null,
        },
      },
    });

  const createCampaign = async (campaign) => {
    try {
      await ensureMetaMask();
      const { title, description, amount, deadline } = campaign;

      const web3Modal = getWeb3Modal();
      await web3Modal.clearCachedProvider();
      const connection = await web3Modal.connect();

      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);

      const transaction = await contract.createCampaign(
        currentAccount,
        title,
        description,
        ethers.utils.parseUnits(amount, 18),
        new Date(deadline).getTime()
      );
      await transaction.wait();
      console.log("Contract call success", transaction);
    } catch (error) {
      console.error("Contract call failure", error);
      alert(error.message || "MetaMask connection failed");
    }
  };

  const getCampaigns = async () => {
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
    const contract = fetchContract(provider);
    const campaigns = await contract.getCampaigns();
    const parsedCampaigns = campaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
      pId: i,
    }));

    return parsedCampaigns;
  };

  const getUserCampaigns = async () => {
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
    const contract = fetchContract(provider);
    const allCampaigns = await contract.getCampaigns();
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    const currentUser = accounts[0];

    const filteredCampaigns = allCampaigns.filter(
      (campaign) => campaign.owner.toLowerCase() === currentUser.toLowerCase()
    );

    const userData = filteredCampaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
      pId: i,
    }));

    return userData;
  };

  const donate = async (pId, amount) => {
    try {
      await ensureMetaMask();
      const web3Modal = getWeb3Modal();
      await web3Modal.clearCachedProvider();
      const connection = await web3Modal.connect();

      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);

      const campaignData = await contract.donateToCampaign(pId, {
        value: ethers.utils.parseEther(amount),
      });
      await campaignData.wait();
      location.reload();
      return campaignData;
    } catch (error) {
      console.error("Donation failed", error);
      alert(error.message || "MetaMask connection failed");
    }
  };

  const getDonations = async (pId) => {
    const provider = new ethers.providers.JsonRpcProvider();
    const contract = fetchContract(provider);
    const donations = await contract.getDonators(pId);
    const numberOfDonations = donations[0].length;
    const parsedDonations = [];
    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString()),
      });
    }
    return parsedDonations;
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum || !window.ethereum.isMetaMask) {
        alert("Please install or enable MetaMask to continue.");
        return;
      }

      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No Account Found");
      }
    } catch (error) {
      console.log("Something went wrong while connecting to wallet", error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum || !window.ethereum.isMetaMask) {
        return alert("MetaMask not detected. Please install MetaMask.");
      }
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log("Error while connecting to wallet", error);
    }
  };

  useEffect(() => {
    if (!window.ethereum || !window.ethereum.isMetaMask) {
      alert("MetaMask is not installed. Please install it to use the app.");
    } else {
      checkIfWalletIsConnected();
    }
  }, []);

  return (
    <CrowdFundingContext.Provider
      value={{
        titleData,
        currentAccount,
        createCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
        connectWallet,
      }}
    >
      {children}
    </CrowdFundingContext.Provider>
  );
};
