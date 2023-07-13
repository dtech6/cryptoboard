import React from "react";
import { CiSquareInfo } from "react-icons/ci";
import "./button.css"

const Button = () => {
  return <button className="btn">
    <CiSquareInfo/>
    <span>Guide</span>
  </button>
};

export default Button;
