import React from "react";
export let overviewDisp, createUserDisp, depositDisp, withdrawDisp, transferDisp, editUserDisp



let sideBar = () => {
    
    return (<div className="sideBarContent">
        <ul>
            <li>Overview</li>
            <li>Create Account</li>
            <li>Deposit Funds</li>
            <li>Withdraw Funds</li>
            <li>Transfer Funds</li>
            <li>Edit Account Details</li>
        </ul>
        </div>)

}

export default sideBar