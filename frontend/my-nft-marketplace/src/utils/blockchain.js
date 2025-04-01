import { ethers } from "ethers";
import NFTMarketplaceABI from "../contracts/NFTMarketplace.json"; // Ensure this is correct

const CONTRACT_ADDRESS = "your_smart_contract_address_here"; // Replace with your deployed contract address

export const getEthereumContract = () => {
  if (!window.ethereum) {
    alert("MetaMask is not installed!");
    return null;
  }
  
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(CONTRACT_ADDRESS, NFTMarketplaceABI.abi, signer);
};

export const connectWallet = async () => {
  if (!window.ethereum) {
    alert("MetaMask is not installed!");
    return null;
  }
}

export const mintNFT = async (tokenURI) => {
  try {
    const contract = getEthereumContract();
    if (!contract) return;

    const transaction = await contract.createToken(tokenURI);
    await transaction.wait();
    alert("NFT Minted Successfully!");
  } catch (error) {
    console.error("Minting error:", error);
  }
};

export const fetchNFTs = async () => {
  try {
    const contract = getEthereumContract();
    if (!contract) return;

    const items = await contract.fetchMarketItems();
    console.log("NFTs:", items);
    return items;
  } catch (error) {
    console.error("Error fetching NFTs:", error);
    return [];
  }
};
