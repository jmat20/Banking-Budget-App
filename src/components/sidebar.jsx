import React from "react";

export let SideBar1 = ({
  setOverviewIsActive,
  overviewIsActive,
  setAddIsActive,
  addIsActive,
  setDepositIsActive,
  depositIsActive,
  setWithdrawIsActive,
  withdrawIsActive,
  setTransferIsActive,
  transferIsActive,
  Logout,
  setUser,
  setLogin,
}) => {
  let toggleOverview = () => {
    setOverviewIsActive(true);
    setAddIsActive(false);
    setDepositIsActive(false);
    setTransferIsActive(false);
    setWithdrawIsActive(false);
  };

  let toggleAdd = () => {
    setOverviewIsActive(false);
    setAddIsActive(true);
    setDepositIsActive(false);
    setTransferIsActive(false);
    setWithdrawIsActive(false);
  };

  let toggleDeposit = () => {
    setOverviewIsActive(false);
    setAddIsActive(false);
    setDepositIsActive(true);
    setTransferIsActive(false);
    setWithdrawIsActive(false);
  };

  let toggleWithdraw = () => {
    setOverviewIsActive(false);
    setAddIsActive(false);
    setDepositIsActive(false);
    setTransferIsActive(false);
    setWithdrawIsActive(true);
  };

  let toggleTransfer = () => {
    setOverviewIsActive(false);
    setAddIsActive(false);
    setDepositIsActive(false);
    setTransferIsActive(true);
    setWithdrawIsActive(false);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-item" onClick={() => toggleOverview()}>
        Overview
      </div>
      <div className="sidebar-item" onClick={() => toggleAdd()}>
        Create Account
      </div>
      <div className="sidebar-item" onClick={() => toggleDeposit()}>
        Deposit Funds
      </div>
      <div className="sidebar-item" onClick={() => toggleWithdraw()}>
        Withdraw Funds
      </div>
      <div className="sidebar-item" onClick={() => toggleTransfer()}>
        Transfer Funds
      </div>
      <div className="sidebar-item" onClick={() => Logout()}>
        Log out
      </div>
    </div>
  );
};

export let SideBar2 = ({
  setOverviewIsActive,
  overviewIsActive,
  setAddIsActive,
  addIsActive,
  setDepositIsActive,
  depositIsActive,
  setWithdrawIsActive,
  withdrawIsActive,
  setTransferIsActive,
  transferIsActive,
  Logout,
  setUser,
  setLogin,
}) => {
  let toggleOverview = () => {
    setOverviewIsActive(true);
    setAddIsActive(false);
    setDepositIsActive(false);
    setTransferIsActive(false);
    setWithdrawIsActive(false);
  };

  let toggleAdd = () => {
    setOverviewIsActive(false);
    setAddIsActive(true);
    setDepositIsActive(false);
    setTransferIsActive(false);
    setWithdrawIsActive(false);
  };

  let toggleDeposit = () => {
    setOverviewIsActive(false);
    setAddIsActive(false);
    setDepositIsActive(true);
    setTransferIsActive(false);
    setWithdrawIsActive(false);
  };

  let toggleWithdraw = () => {
    setOverviewIsActive(false);
    setAddIsActive(false);
    setDepositIsActive(false);
    setTransferIsActive(false);
    setWithdrawIsActive(true);
  };

  let toggleTransfer = () => {
    setOverviewIsActive(false);
    setAddIsActive(false);
    setDepositIsActive(false);
    setTransferIsActive(true);
    setWithdrawIsActive(false);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-item" onClick={() => toggleOverview()}>
        Overview
      </div>
      <div className="sidebar-item" onClick={() => toggleAdd()}>
        Add Expense
      </div>
      <div className="sidebar-item" onClick={() => toggleDeposit()}>
        Deposit Funds
      </div>
      <div className="sidebar-item" onClick={() => toggleWithdraw()}>
        Withdraw Funds
      </div>
      <div className="sidebar-item" onClick={() => toggleTransfer()}>
        Transfer Funds
      </div>
      <div className="sidebar-item" onClick={() => Logout()}>
        Logout
      </div>
    </div>
  );
};
