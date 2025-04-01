import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Marketplace from "./pages/marketplace";
import MintNFTPage from "./pages/mint";
import CreateNFT from "./pages/createNft";

function App() {
  const [nfts, setNfts] = useState([]);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleCreateNFT = (newNFT) => {
    setNfts((prevNFTs) => [...prevNFTs, newNFT]);
  };

  return (
    <Router>
      <Navbar onSignupClick={() => setIsSignupOpen(true)} />
      {isSignupOpen && <Signup onClose={() => setIsSignupOpen(false)} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<MintNFTPage />} />
        <Route path="/marketplace" element={<Marketplace nfts={nfts} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/createNFT" element={<CreateNFT onCreateNFT={handleCreateNFT} />} />
      </Routes>
    </Router>
  );
}

export default App;
