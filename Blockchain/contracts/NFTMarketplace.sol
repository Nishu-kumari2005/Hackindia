// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
 
contract NFTMarketplace is ERC721URIStorage, Ownable{
    uint256 private _tokenIds;
    mapping(uint256 => uint256) public prices;

    // ✅ Fixed: Pass required arguments to ERC721 constructor
    constructor() ERC721("NFT Marketplace", "NFTM") Ownable(msg.sender) {}

    function mintNFT(string memory tokenURI, uint256 price) public onlyOwner returns (uint256) {
        _tokenIds++;
        uint256 newItemId = _tokenIds;

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        prices[newItemId] = price;

        return newItemId;
    }
}
