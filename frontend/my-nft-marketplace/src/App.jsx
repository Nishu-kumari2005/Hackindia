import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Marketplace from "./pages/marketplace";
import MintNFTPage from "./pages/mint";
import CreateNFt from "./pages/GenerateImg";

function App() {
  const [count, setCount] = useState(0);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  return (
    <Router>
      <Navbar onSignupClick={() => setIsSignupOpen(true)} />
      {isSignupOpen && <Signup onClose={() => setIsSignupOpen(false)} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<MintNFTPage />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/GenerateImg" element={<CreateNFt />} />
      </Routes>
    </Router>
  );
}

export default App;
