import React from "react";
import Logout from "../App";
import "../assets/scss/styles.css";

let HeaderComponent = () => {
  return (
    <div className="header">
      <div className="bank-face">
        <img src="" className="header-logo" alt="logo" />
        <span className="header-text">PLACEHOLDER BANK</span>
      </div>
      <div className="header-input">
        {user.username !== "" ? (
          <button type="button" className="header-button" onClick={Logout}>
            Log-Out
          </button>
        ) : (
          <div className="placeholder"></div>
        )}
      </div>
    </div>
  );
};

export default HeaderComponent;
