import React from "react";

const Marketplace = ({ nfts }) => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h2 className="text-4xl font-bold text-center mb-8">NFT Marketplace</h2>
      {nfts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nfts.map((nft) => (
            <div key={nft.id} className="bg-gray-900 border border-gray-700 rounded-2xl p-4 shadow-lg">
              <img
                src={nft.image || "https://via.placeholder.com/300"}
                alt={nft.name || "NFT Image"}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-3">{nft.name || "Unnamed NFT"}</h3>
              <p className="text-gray-400">{nft.description}</p>
              <p className="text-lg font-bold mt-2 text-green-400">
                {nft.price ? `${nft.price} ETH` : "Not for Sale"}
              </p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400">No NFTs found.</p>
      )}
    </div>
  );
};

export default Marketplace;
