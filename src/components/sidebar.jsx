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
    <div className="sideBarContent">
      <div>
        <div onClick={() => toggleOverview()}>Overview</div>
        <div onClick={() => toggleAdd()}>Create Account</div>
        <div onClick={() => toggleDeposit()}>Deposit Funds</div>
        <div onClick={() => toggleWithdraw()}>Withdraw Funds</div>
        <div onClick={() => toggleTransfer()}>Transfer Funds</div>
        <div onClick={() => Logout()}>Log out</div>
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
    <div className="sideBarContent">
      <div>
        <div onClick={() => toggleOverview()}>Overview</div>
        <div onClick={() => toggleAdd()}>Add Expense</div>
        <div onClick={() => toggleDeposit()}>Deposit Funds</div>
        <div onClick={() => toggleWithdraw()}>Withdraw Funds</div>
        <div onClick={() => toggleTransfer()}>Transfer Funds</div>
        <div onClick={() => Logout()}>Logout</div>
      </div>
    </div>
  );
};
