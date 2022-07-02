import React from "react";



let SideBar = ({ setOverviewIsActive , overviewIsActive, setAddIsActive, addIsActive, setDepositIsActive, depositIsActive, setWithdrawIsActive, withdrawIsActive, setTransferIsActive, transferIsActive }) => {
    
    let toggleOverview =() => {
        setOverviewIsActive(true);
        setAddIsActive(false);
        setDepositIsActive(false)
        setTransferIsActive(false)
        setWithdrawIsActive(false)
        
    }

    let toggleAdd =() => {
        setOverviewIsActive(false);
        setAddIsActive(true);
        setDepositIsActive(false)
        setTransferIsActive(false)
        setWithdrawIsActive(false)
        
    }

    let toggleDeposit =() => {
        setOverviewIsActive(false);
        setAddIsActive(false);
        setDepositIsActive(true)
        setTransferIsActive(false)
        setWithdrawIsActive(false)
        
    }

    let toggleWithdraw =() => {
        setOverviewIsActive(false);
        setAddIsActive(false);
        setDepositIsActive(false)
        setTransferIsActive(false)
        setWithdrawIsActive(true)
        
    }

    let toggleTransfer =() => {
        setOverviewIsActive(false);
        setAddIsActive(false);
        setDepositIsActive(false)
        setTransferIsActive(true)
        setWithdrawIsActive(false)
        
    }

    return (<div className="sideBarContent">
        <div>
            <div onClick={() => toggleOverview()}>Overview</div>
            <div onClick={() => toggleAdd()}>Create Account</div>
            <div onClick={() => toggleDeposit()}>Deposit Funds</div>
            <div onClick={() => toggleWithdraw()}>Withdraw Funds</div>
            <div onClick={() => toggleTransfer()}>Transfer Funds</div>
        </div>
        </div>)

}

export default SideBar