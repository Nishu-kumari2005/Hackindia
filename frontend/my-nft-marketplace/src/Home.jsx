import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";  
import HowItWorks from "./HowItWorks";
import GenerateImg from "./pages/GenerateImg";

const nftImages = [
  "./assets/step1.png",
  "./assets/step2.png",
  "./assets/step3.png",
  "./assets/step4.png",
  "./assets/step5.png",
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(nftImages[0]);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * nftImages.length);
      setCurrentImage(nftImages[randomIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <video autoPlay loop muted className="background-video">
        <source src="https://videos.pexels.com/video-files/15832152/15832152-sd_640_360_30fps.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <div className="left-section">
          <h1>Discover, Collect, and Sell Extraordinary NFTs</h1>
          <p>Join the world's largest NFT marketplace.</p>
          <div className="buttons">
            <button className="btn create-btn" onClick={() => navigate("/createNFT")}>Create NFT</button>
            <button className="btn explore-btn">Explore Marketplace  →</button>
          </div>
        </div>
        <div className="right-section">
          <img src={currentImage}  className="nft-image" />
          <img src={currentImage}  className="nft-image" />
        </div>
      
      </div>
      <div className="HowItwork">
          <HowItWorks/>
        </div>
      {/* <HowItWorks/> */}
    </div>
    
    
    
  );
};

export default Home;
