import React from "react";
import "./Navbar.css"; // Import CSS for styling
import { useNavigate, Link } from "react-router-dom"; 
import WalletConnect from "./walletConnect";


const Navbar = ({ onSignupClick }) => {
  const navigate = useNavigate();  
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>NFTVerse</h2>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">Create</Link></li>
        <li><Link to="/marketplace">Marketplace</Link></li>
        <li><Link to="/collection">Collection</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        {/* <li><Link to="/login">Login</Link></li> */}
      </ul>
      <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
      {/* <button className="signup-btn" onClick={onSignupClick}>Signup</button> */}

      <WalletConnect/>
    </nav>
  );
};

export default Navbar;
