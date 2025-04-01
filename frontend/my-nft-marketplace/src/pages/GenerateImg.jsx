import React, { useState } from "react";
import axios from "axios";

const GenerateImg = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt");
      return;
    }

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // ⏳ Wait 3 seconds before sending a request

      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

      const response = await axios.post(
        "https://api.openai.com/v1/images/generations",
        {
          prompt,
          n: 1,
          size: "1024x1024",
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      setImageUrl(response.data.data[0].url);
    } catch (error) {
      console.error(
        "Error generating image:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Generate NFT Image</h1>
      <input
        type="text"
        placeholder="Enter your prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateImage} disabled={loading}>
        {loading ? "Generating..." : "Generate Image"}
      </button>
      {imageUrl && <img src={imageUrl} alt="Generated NFT" />}
    </div>
  );
};

export default GenerateImg;
