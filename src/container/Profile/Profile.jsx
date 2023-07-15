import React from "react";
import profile from "../../assets/profile.png";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <p className="title">Trader Profile</p>
      <img src={profile} alt="" />
      <p className="name">Han Ji Pyeong</p>
      <p className="edit">Edit Profile</p>

      <div className="account">
        <p>Account</p>
        <p className="joined">Joined <span>June 22, 2020</span></p>
        <p className="asset-value">Assets Value <span>$1,328,240.00</span></p>
      </div>

      <div className="profile-asset">
        <p>Account</p>
        <p className="joined">Bitcoin <span>23.5 BTC</span></p>
        <p className="asset-value">Ethereum Value <span>190.45 ETH</span></p>
      </div>
      <p className="more-assets">More Assets...</p>
    </div>
  );
};

export default Profile;
