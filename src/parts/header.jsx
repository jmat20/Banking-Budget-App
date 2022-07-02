import React from "react";
import "../assets/scss/styles.css";

let HeaderComponent = () => {
  return (
    <div className="header">
      <div className="bank-face">
        <img src="" className="header-logo" alt="logo" />
        <span className="header-text">PLACEHOLDER BANK</span>
      </div>
      <div className="header-input">
        <button type="button" className="header-button">
          Log-Out
        </button>
      </div>
    </div>
  );
};

export default HeaderComponent;
