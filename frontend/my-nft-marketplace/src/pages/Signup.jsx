import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./modal.css";
import { Link } from "react-router-dom";

const Signup = ({ onClose }) => {
  // Accept onClose as a prop
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        username,
        email,
        password,
      });

      alert("Signup successful! You can now log in.");
      onClose(); // Close the modal
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      alert(
        "Signup failed: " +
          (error.response?.data?.message || "Something went wrong")
      );
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Signup</button>
        </form>
        {/* <button className="close-btn" onClick={onClose}>Close</button> */}
        {/* <button className="login-btn" onClick={() => navigate("/login")}>Login</button> */}
      </div>
    </div>
  );
};

export default Signup;
