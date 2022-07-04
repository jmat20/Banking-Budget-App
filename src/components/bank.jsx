import React, { useState, useRef } from "react";
import "../assets/scss/bank.css";
import { SideBar1 } from "./sidebar";
export let bankData = [
  {
    accountNum: 1,
    name: "admin",
    balance: 50,
    username: "admin",
    password: "admin",
    type: "admin",
  },
  {
    accountNum: 2,
    name: "test",
    balance: 50000,
    username: "tester",
    password: "tester",
    type: "customer",
  },
];
let userCount = 1000000;
let editUser;

function Bank({ users, setUsers, Logout, setUser, setLogin }) {
  const nameRef = useRef(null);
  const balRef = useRef(null);
  const depositRef = useRef(null);
  const depositAmountRef = useRef(null);
  const withdrawRef = useRef(null);
  const withdrawAmountRef = useRef(null);
  const sourceAccountRef = useRef(null);
  const destinationAccountRef = useRef(null);
  const transferAmountRef = useRef(null);
  const nameSearchRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const editNameRef = useRef(null);
  const editUserNameRef = useRef(null);
  const editPasswordRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [overviewIsActive, setOverviewIsActive] = useState(true);
  const [addIsActive, setAddIsActive] = useState(false);
  const [depositIsActive, setDepositIsActive] = useState(false);
  const [withdrawIsActive, setWithdrawIsActive] = useState(false);
  const [transferIsActive, setTransferIsActive] = useState(false);
  const [editIsActive, setEditIsActive] = useState(false);

  const filteredUsers = users.filter((x) =>
    x.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleAdd() {
    let name = nameRef.current.value;
    let initialBal = balRef.current.value === "" ? 0 : balRef.current.value;
    if (!bankData.some((e) => e.username === usernameRef.current.value)) {
      addUser(
        name,
        initialBal,
        usernameRef.current.value,
        passwordRef.current.value
      );
      window.alert("Account Successfuly Created.");
      setUsers((state) => {
        const newState = [...state, bankData[bankData.length - 1]];
        return [...newState];
      });
      clearInputs();
    } else {
      window.alert("Username already exists!");
    }
  }

  let deposit = () => {
    let depositAccountIdx = users.findIndex(
      (x) => x.accountNum === parseInt(depositRef.current.value)
    );
    let depositAccount = users[depositAccountIdx];
    console.log(depositRef.current.value);
    if (depositAccount !== undefined) {
      parseInt(depositAccount.balance);
      depositAccount.balance =
        parseInt(depositAccount.balance) +
        parseInt(depositAmountRef.current.value);
      window.alert("Deposit Success.");
      console.log(bankData);
      setUsers((state) => {
        const newState = state;
        newState[depositAccountIdx] = depositAccount;
        return [...newState];
      });
      clearInputs();
    } else {
      window.alert("Transaction Failed. Please re-check account details.");
      return;
    }
  };

  let withdraw = () => {
    let withdrawAccountIdx = users.findIndex(
      (x) => x.accountNum === parseInt(withdrawRef.current.value)
    );
    let withdrawAccount = users[withdrawAccountIdx];
    if (withdrawAccount !== undefined) {
      if (withdrawAmountRef.current.value <= withdrawAccount.balance) {
        withdrawAccount.balance =
          parseInt(withdrawAccount.balance) -
          parseInt(withdrawAmountRef.current.value);
        window.alert("Withdrawal Success.");
        setUsers((state) => {
          const newState = state;
          newState[withdrawAccountIdx] = withdrawAccount;
          return [...newState];
        });
      } else {
        window.alert("Not enough balance.");
      }
    } else {
      window.alert("Transaction Failed. Please re-check account details.");
      return;
    }
    clearInputs();
  };

  let transfer = () => {
    let sourceIdx = users.findIndex(
      (x) => x.accountNum === parseInt(sourceAccountRef.current.value)
    );
    let destinationIdx = users.findIndex(
      (x) => x.accountNum === parseInt(destinationAccountRef.current.value)
    );
    let source = users[sourceIdx];
    let destination = users[destinationIdx];
    if (source !== undefined && destination !== undefined) {
      if (transferAmountRef.current.value <= source.balance) {
        source.balance =
          parseInt(source.balance) - parseInt(transferAmountRef.current.value);
        destination.balance =
          parseInt(destination.balance) +
          parseInt(transferAmountRef.current.value);
        window.alert("Fund Transfer Success.");
        setUsers((state) => {
          const newState = state;
          newState[sourceIdx] = source;
          newState[destinationIdx] = destination;
          return [...newState];
        });
      } else {
        window.alert("Not enough balance.");
      }
    } else {
      window.alert("Transaction Failed. Please re-check account details.");
      return;
    }
    clearInputs();
  };

  let handleSearch = (e) => {
    const x = e.target.value;
    setSearchTerm(x);
  };

  let User = function (name, balance, username, password) {
    this.accountNum = userCount + 1;
    userCount++;
    this.name = name;
    this.balance = parseInt(balance);
    this.username = username;
    this.password = password;
    this.type = "customer";
  };

  let addUser = (name, balance, username, password) => {
    let newUser = new User(name, balance, username, password);
    console.log(newUser);
    bankData = [...bankData, newUser];
    console.log(bankData);
  };

  let clearInputs = () => {
    nameRef.current.value = "";
    balRef.current.value = "";
    depositRef.current.value = "";
    depositAmountRef.current.value = "";
    withdrawRef.current.value = "";
    withdrawAmountRef.current.value = "";
    sourceAccountRef.current.value = "";
    destinationAccountRef.current.value = "";
    transferAmountRef.current.value = "";
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };

  let userPriveledge = (user) => {
    if (user.type === "customer") {
      return (
        <button type="button" onClick={() => handleDelete(user.username)}>
          Delete
        </button>
      );
    } else {
      return;
    }
  };

  let handleDelete = (id) => {
    console.log(id);
    const newUsers = bankData.filter((x) => x.username !== id);
    console.log(newUsers);
    bankData = [...newUsers];
    console.log(bankData);
    setUsers([...newUsers]);
  };

  let handleEdit = (id) => {
    setOverviewIsActive(true);
    setAddIsActive(false);
    setDepositIsActive(false);
    setTransferIsActive(false);
    setWithdrawIsActive(false);
    setEditIsActive(true);
    editUser = users.find((x) => x.username === id);
    console.log(editUser);
    editNameRef.current.value = editUser.name;
    editUserNameRef.current.value = editUser.username;
    editPasswordRef.current.value = editUser.password;

    console.log(editUser);
  };

  let handleSave = () => {
    let editAccountIdx = users.findIndex(
      (x) => x.accountNum === parseInt(editUser.accountNum)
    );
    let editAccount = users[editAccountIdx];
    console.log(editAccount);
    editAccount.name = editNameRef.current.value;
    editAccount.username = editUserNameRef.current.value;
    editAccount.password = editPasswordRef.current.value;

    bankData[editAccountIdx] = editAccount;
    setUsers([...bankData]);
    editNameRef.current.value = "";
    editUserNameRef.current.value = "";
    editPasswordRef.current.value = "";
    editAccount = "";
    setEditIsActive(false);
    window.alert("Changes Saved.");
  };

  return (
    <div className="bank">
      <SideBar1
        setOverviewIsActive={setOverviewIsActive}
        overviewIsActive={overviewIsActive}
        setAddIsActive={setAddIsActive}
        addIsActive={addIsActive}
        setDepositIsActive={setDepositIsActive}
        depositIsActive={depositIsActive}
        setWithdrawIsActive={setWithdrawIsActive}
        withdrawIsActive={withdrawIsActive}
        setTransferIsActive={setTransferIsActive}
        transferIsActive={transferIsActive}
        Logout={Logout}
        setUser={setUser}
        setLogin={setLogin}
      />


      <section className="body">
        <SideBar1
          setOverviewIsActive={setOverviewIsActive}
          overviewIsActive={overviewIsActive}
          setAddIsActive={setAddIsActive}
          addIsActive={addIsActive}
          setDepositIsActive={setDepositIsActive}
          depositIsActive={depositIsActive}
          setWithdrawIsActive={setWithdrawIsActive}
          withdrawIsActive={withdrawIsActive}
          setTransferIsActive={setTransferIsActive}
          transferIsActive={transferIsActive}
          Logout={Logout}
          setUser={setUser}
          setLogin={setLogin}
        />
        <input
          ref={usernameRef}
          type="text"
          placeholder="Login Username"
          required
        />
        <input
          ref={passwordRef}
          type="text"
          placeholder="Account Password"
          required
        />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>


        <div className="bank-main">
          <div
            className={`
            component-container 
            addUser ${addIsActive ? "" : "hidden"}
            `}
          >
            <h3 className="component-heading">Create Account</h3>
            <div className="component-input-container">
              <div className="component-group">
                <label htmlFor="name" className="component-label">
                  Account Name:
                </label>
                <br />
                <input
                  ref={nameRef}
                  name="name"
                  type="text"
                  placeholder="Account Name"
                  className="component-input"
                  required
                />
              </div>
              <div className="component-group">
                <label htmlFor="balance" className="component-label">
                  Initial Balance:
                </label>
                <br />
                <input
                  ref={balRef}
                  name="balance"
                  type="number"
                  min="0"
                  placeholder="Initial Balance"
                  className="component-input"
                  required
                />
              </div>
              <div className="component-group">
                <label htmlFor="balance" className="component-label">
                  Username:
                </label>
                <br />
                <input
                  ref={usernameRef}
                  name="username"
                  type="text"
                  placeholder="Login Username"
                  className="component-input"
                  required
                />
              </div>
              <div className="component-group">
                <label htmlFor="balance" className="component-label">
                  Password:
                </label>
                <br />
                <input
                  ref={passwordRef}
                  name="password"
                  type="password"
                  placeholder="Account Password"
                  className="component-input"
                  required
                />
              </div>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="component-submit"
            >
              Add
            </button>
          </div>

          <div
            className={`
            component-container 
            deposit 
            ${depositIsActive ? "" : "hidden"}
            `}
          >
            <h3 className="component-heading">Deposit Funds</h3>
            <div className="component-input-container">
              <div className="component-group">
                <label htmlFor="account number" className="component-label">
                  Account Number:
                </label>
                <br />
                <input
                  ref={depositRef}
                  name="account number"
                  type="number"
                  placeholder="Account Number"
                  className="component-input"
                  required
                />
              </div>

              <div className="component-group">
                <label htmlFor="deposit amount" className="component-label">
                  Deposit Amount:
                </label>
                <br />
                <input
                  ref={depositAmountRef}
                  name="deposit amount"
                  type="number"
                  placeholder="Deposit Amount"
                  className="component-input"
                  required
                />
              </div>
            </div>

            <button
              className="component-submit"
              type="button"
              onClick={deposit}
            >
              Deposit
            </button>
          </div>

          <div
            className={`
            component-container 
            withdraw 
            ${withdrawIsActive ? "" : "hidden"}
            `}
          >
            <h3 className="component-heading">Withdraw Funds</h3>
            <div className="component-input-container">
              <div className="component-group">
                <label htmlFor="account number" className="component-label">
                  Account Number:
                </label>
                <br />
                <input
                  ref={withdrawRef}
                  name="account number"
                  type="number"
                  placeholder="Account Number"
                  className="component-input"
                  required
                />
              </div>

              <div className="component-group">
                <label htmlFor="withdraw amount" className="component-label">
                  Withdraw Amount:
                </label>
                <br />
                <input
                  ref={withdrawAmountRef}
                  name="withdraw amount"
                  type="number"
                  placeholder="Withdraw Amount"
                  className="component-input"
                  required
                />
              </div>
            </div>

            <button
              className="component-submit"
              type="button"
              onClick={withdraw}
            >
              Withdraw
            </button>
          </div>

          <div
            className={`
            component-container 
            transfer 
            ${transferIsActive ? "" : "hidden"}`}
          >
            <h3 className="component-heading">Transfer Funds</h3>
            <div className="component-input-container">
              <div className="component-group">
                <label htmlFor="source" className="component-label">
                  Transfer from:
                </label>
                <br />
                <input
                  ref={sourceAccountRef}
                  name="source"
                  type="number"
                  placeholder="Transfer from?"
                  className="component-input"
                  required
                />
              </div>

              <div className="component-group">
                <label htmlFor="destination" className="component-label">
                  Transfer to:
                </label>
                <br />
                <input
                  ref={destinationAccountRef}
                  name="destination"
                  type="number"
                  placeholder="Transfer to?"
                  className="component-input"
                  required
                />
              </div>

              <div className="component-group">
                <label htmlFor="transfer amount" className="component-label">
                  Transfer Amount:
                </label>
                <br />
                <input
                  ref={transferAmountRef}
                  name="transfer amount"
                  type="number"
                  placeholder="Transfer Amount"
                  className="component-input"
                  required
                />
              </div>
            </div>

            <button
              className="component-submit"
              type="button"
              onClick={transfer}
            >
              transfer
            </button>
          </div>

          <div
            className={`
            component-container 
            overview 
            ${overviewIsActive ? "" : "hidden"}
            `}
          >
            <h3 className="component-heading">Admin Overview</h3>
            <div className="component-input-container">
              <div className="component-group">
                <label htmlFor="account search" className="component-label">
                  Account Search:
                </label>
                <br />
                <input
                  ref={nameSearchRef}
                  name="account search"
                  type="text"
                  placeholder="Account Name Search"
                  className="component-input"
                  onChange={handleSearch}
                />
              </div>
            </div>

            <h3 className="component-heading">List of Accounts</h3>
            <div className="component-input-container">
              <ul>
                {filteredUsers.map((user) => (
                  <li key={user.accountNum}>
                    <span>Account: {user.accountNum} </span>
                    <span></span>
                    <span>Name: {user.name} </span>
                    <span></span>
                    <span>Balance: {user.balance} </span>
                    <span></span>
                    <span>Username: {user.username} </span>
                    <span></span>
                    <button
                      type="button"
                      onClick={() => handleEdit(user.username)}
                    >
                      Edit
                    </button>
                    {userPriveledge(user)}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={` 
            
            editUser 
            ${editIsActive ? "" : "hidden"}
            `}
            >
              <h5 className="component-heading">Edit Account</h5>
              <div className="component-input-container">
                <div className="component-group">
                  <label htmlFor="edit name" className="component-label">
                    Edit Name:
                  </label>
                  <br />
                  <input
                    ref={editNameRef}
                    name="edit name"
                    type="text"
                    className="component-input"
                  />
                </div>

                <div className="component-group">
                  <label htmlFor="edit username" className="component-label">
                    Edit Username:
                  </label>
                  <br />
                  <input
                    ref={editUserNameRef}
                    name="edit username"
                    type="text"
                    className="component-input"
                  />
                </div>

                <div className="component-group">
                  <label htmlFor="edit username" className="component-label">
                    Edit Password:
                  </label>
                  <br />
                  <input
                    ref={editPasswordRef}
                    type="password"
                    className="component-input"
                  />
                </div>
              </div>
              <button
                className="component-submit"
                type="button"
                onClick={() => handleSave()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Bank;
