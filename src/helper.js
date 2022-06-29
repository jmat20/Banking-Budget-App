import React, { useState, useRef } from "react";

let bankData = [{ accountNum: 1, name: "admin", balance: 50 }];
let userCount = 1000000;

function Bank() {
  const nameRef = useRef(null);
  const balRef = useRef(0);
  const depositRef = useRef(0);
  const depositAmountRef = useRef(0);
  const withdrawRef = useRef(0);
  const withdrawAmountRef = useRef(0);
  const sourceAccountRef = useRef(0);
  const destinationAccountRef = useRef(0);
  const transferAmountRef = useRef(0);
  const getBalRef = useRef(0);

  const [users, setUsers] = useState(bankData);

  function updateDisplay() {
    setUsers(bankData);
  }

  function handleAdd() {
    addUser(nameRef.current.value, balRef.current.value);
    console.log("added");
    updateDisplay();
  }

  let deposit = () => {
    let depositAccount = bankData.find(
      (x) => x.accountNum == depositRef.current.value
    );
    console.log(depositRef.current.value);
    if (depositAccount !== undefined) {
      parseInt(depositAccount.balance);
      depositAccount.balance =
        parseInt(depositAccount.balance) +
        parseInt(depositAmountRef.current.value);
      console.log(depositAccount);
      console.log("deposit success");
      updateDisplay();
    } else {
      console.log("Transaction Failed. Please re-check account details.");
      return;
    }
  };

  let withdraw = () => {
    let withdrawAccount = bankData.find(
      (x) => x.accountNum == withdrawRef.current.value
    );
    if (withdrawAccount !== undefined) {
      if (withdrawAmountRef.current.value <= withdrawAccount.balance) {
        withdrawAccount.balance =
          parseInt(withdrawAccount.balance) -
          parseInt(withdrawAmountRef.current.value);
        console.log("withdraw success");
        updateDisplay();
      } else {
        console.log("Not enough balance.");
      }
    } else {
      console.log("Transaction Failed. Please re-check account details.");
      return;
    }
  };

  let transfer = () => {
    let source = bankData.find(
      (x) => x.accountNum == sourceAccountRef.current.value
    );
    let destination = bankData.find(
      (x) => x.accountNum == destinationAccountRef.current.value
    );
    if (source !== undefined || destination !== undefined) {
      if (transferAmountRef.current.value <= source.balance) {
        source.balance =
          parseInt(source.balance) - parseInt(transferAmountRef.current.value);
        destination.balance =
          parseInt(destination.balance) +
          parseInt(transferAmountRef.current.value);
        console.log("transfer success");
        updateDisplay();
      } else {
        console.log("Not enough balance.");
      }
    } else {
      console.log("Transaction Failed. Please re-check account details.");
      return;
    }
  };
  let User = function (name, balance = 0) {
    this.accountNum = userCount + 1;
    userCount++;
    this.name = name;
    this.balance = parseInt(balance);
  };

  let addUser = (name, balance = 0) => {
    console.log(name);
    let newUser = new User(name, balance);
    console.log(newUser);
    bankData = [...bankData, newUser];
    console.log(bankData);
  };

  let getBalance = (accountNum) => {
    let account = bankData.find((x) => x.accountNum == getBalRef.current.value);
    console.log(account.balance);
    return account.balance;
  };

  let listUsers = () => {
    console.log(bankData);
    return bankData;
  };

  return (
    <div className="bank">
      <div className="createUser">
        <h3>Create</h3>
        <input ref={nameRef} type="text" required />
        <input ref={balRef} type="number" required />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>
      <div className="deposit">
        <h3>Deposit</h3>
        <input ref={depositRef} type="number" required />
        <input ref={depositAmountRef} type="number" required />
        <button type="button" onClick={deposit}>
          deposit
        </button>
      </div>
      <div className="withdraw">
        <h3>withdraw</h3>
        <input ref={withdrawRef} type="number" required />
        <input ref={withdrawAmountRef} type="number" required />
        <button type="button" onClick={withdraw}>
          withdraw
        </button>
      </div>
      <div className="transfer">
        <h3>transfer</h3>
        <input ref={sourceAccountRef} type="number" required />
        <input ref={destinationAccountRef} type="number" required />
        <input ref={transferAmountRef} type="number" required />
        <button type="button" onClick={transfer}>
          transfer
        </button>
      </div>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.accountNum}>
              <span>Account: {user.accountNum} </span>
              <span>Name: {user.name} </span>
              <span>Balance: {user.balance} </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Bank;
