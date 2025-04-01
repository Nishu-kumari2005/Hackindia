import React, { useState } from "react";
import { mintNFT } from "../utils/blockchain"; // Import functions

const MintNFTPage = () => {
  const [tokenURI, setTokenURI] = useState("");

  const handleMint = async () => {
    if (!tokenURI) return alert("Please enter a valid token URI!");
    await mintNFT(tokenURI);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h2 className="text-4xl font-bold mb-6">Mint Your NFT</h2>
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg w-full max-w-md">
        <input
          type="text"
          placeholder="Enter Token URI"
          value={tokenURI}
          onChange={(e) => setTokenURI(e.target.value)}
          className="w-full p-3 mb-4 text-black rounded-lg outline-none border border-gray-700 focus:border-blue-500"
        />
        <button
          onClick={handleMint}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition duration-300 mb-3"
        >
          Mint NFT
        </button>
      </div>
    </div>
  );
};

export default MintNFTPage;
