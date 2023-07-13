import React from "react";
import "./assets.css";
import Card from "../../components/Card/Card";
import { BsArrowRight } from "react-icons/bs";
import plus from "../../assets/Plus.png";

const Assets = () => {
  return (
    <section className="assets">
      <div className="header">
        <h1>Assets</h1>
        <p>
          More Assets <BsArrowRight />
        </p>
      </div>

      <div className="asset-stats">
        <span>
          <p>Bitcoin</p>
          <Card bgColor={true} />
        </span>
        <span>
          <p>Ethereum</p>
          <Card bgColor={false} />
        </span>
        <div className="new-asset">
            <img src={plus} alt="" height={36}/>
            <p>New Asset</p>
        </div>
      </div>
    </section>
  );
};

export default Assets;
