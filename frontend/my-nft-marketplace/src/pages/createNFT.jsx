import React, { Component } from 'react';
import "./createNFT.css";

class CreateNFT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      nftName: '',
      description: '',
      ethPrice: ''
    };
  }

  handleFileChange = (e) => {
    this.setState({ file: e.target.files[0] });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { file, nftName, description, ethPrice } = this.state;

    if (!file || !nftName || !description || !ethPrice) {
      alert('Please fill in all fields and upload a file.');
      return;
    }

    const nftData = {
      id: Date.now(),
      name: nftName,
      description,
      price: ethPrice,
      image: URL.createObjectURL(file)
    };

    // Send NFT data to parent component
    this.props.onCreateNFT(nftData);

    alert('NFT Created Successfully!');
    this.setState({ file: null, nftName: '', description: '', ethPrice: '' });
  };

  render() {
    return (
      <div className="nft-container">
        <h2 className="nft-title">Create New NFT</h2>
        <form className="nft-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>NFT Name:</label>
            <input
              type="text"
              name="nftName"
              value={this.state.nftName}
              onChange={this.handleInputChange}
              className="input-field"
              required
            />
          </div>

          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
              className="input-field"
              required
            />
          </div>

          <div className="form-group">
            <label>Ethereum Price (ETH):</label>
            <input
              type="number"
              name="ethPrice"
              value={this.state.ethPrice}
              onChange={this.handleInputChange}
              className="input-field"
              required
            />
          </div>

          <div className="form-group">
            <label>Upload File:</label>
            <input
              type="file"
              onChange={this.handleFileChange}
              accept="image/*,video/*,audio/*"
              className="file-input"
              required
            />
          </div>

          <button type="submit" className="submit-btn">Create NFT</button>
        </form>
      </div>
    );
  }
}

export default CreateNFT;
