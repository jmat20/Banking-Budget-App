import React, { useState, useRef } from "react";

export let bankData = [{ accountNum: 1, name: "admin", balance: 50, username:'admin', password:'placeholderpass', type:'admin' }];
let userCount = 1000000;

function Bank() {
  const nameRef = useRef(null);
  const balRef = useRef(null);
  const depositRef = useRef(null);
  const depositAmountRef = useRef(null);
  const withdrawRef = useRef(null);
  const withdrawAmountRef = useRef(null);
  const sourceAccountRef = useRef(null);
  const destinationAccountRef = useRef(null);
  const transferAmountRef = useRef(null);
  const nameSearchRef = useRef(null)
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  const getBalRef = useRef(null);

  const [users, setUsers] = useState(bankData);
  const [searchTerm, setSearchTerm] = useState('')

  const filteredUsers = users.filter((x) => x.name.toLowerCase().includes(searchTerm.toLowerCase()))

  function handleAdd() {
    let name = nameRef.current.value
    let initialBal = balRef.current.value === "" ? 0 : balRef.current.value
    if (!bankData.some((e) => e.username === usernameRef.current.value)) {
      addUser(name, initialBal, usernameRef.current.value, passwordRef.current.value );
      console.log("added");
      setUsers((state) => {
        const newState = [...state, bankData[bankData.length - 1]];
        return [...newState];
      });
      clearInputs()
    } else {
      console.log('Username already exists')
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
      console.log("deposit success");
      console.log(bankData)
      setUsers((state) => {
        const newState = state;
        newState[depositAccountIdx] = depositAccount;
        return [...newState];
      });
      clearInputs()
    } else {
      console.log("Transaction Failed. Please re-check account details.");
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
        console.log("withdraw success");
        setUsers((state) => {
          const newState = state;
          newState[withdrawAccountIdx] = withdrawAccount;
          return [...newState];
        });
      } else {
        console.log("Not enough balance.");
      }
    } else {
      console.log("Transaction Failed. Please re-check account details.");
      return;
    }
    clearInputs()
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
        console.log("transfer success");
        setUsers((state) => {
          const newState = state;
          newState[sourceIdx] = source;
          newState[destinationIdx] = destination;
          return [...newState];
        });
      } else {
        console.log("Not enough balance.");
      }
    } else {
      console.log("Transaction Failed. Please re-check account details.");
      return;
    }
    clearInputs()
  };

  let handleSearch = (e) => {
    const x = e.target.value
    setSearchTerm(x)
  }

  

  let User = function (name, balance, username, password) {
    this.accountNum = userCount + 1;
    userCount++;
    this.name = name;
    this.balance = parseInt(balance);
    this.username = username
    this.password = password
    this.type = 'customer'
  };

  let addUser = (name, balance, username, password) => {
    console.log(name);
    let newUser = new User(name, balance, username, password);
    console.log(newUser);
    bankData = [...bankData, newUser];
    console.log(bankData);
  };

  let clearInputs = () => {
    nameRef.current.value =""
    balRef.current.value = ""
    depositRef.current.value = ""
    depositAmountRef.current.value = ""
    withdrawRef.current.value = ""
    withdrawAmountRef.current.value =""
    sourceAccountRef.current.value=""
    destinationAccountRef.current.value=""
    transferAmountRef.current.value=""
    usernameRef.current.value = ""
    passwordRef.current.value = ""
  }

  let userPriveledge = (user) => {
    if (user.type === 'customer') {
      return (<button type='button' onClick={() => handleDelete(user.username)}>Delete</button>)
    } else {return}
  }
  
  let handleDelete = (id) => {
    console.log(id)
    const newUsers = users.filter((x) => x.username !== id)
    console.log(newUsers)
    setUsers([...newUsers])
  }

  return (
    <div className="bank">
      <div className="createUser">
        <h3>Create</h3>
        <input ref={nameRef} type="text" placeholder="Account Name" required />
        <input ref={balRef} type="number" placeholder="Initial Balance" required />
        <input ref={usernameRef} type="text" placeholder="Login Username" required />
        <input ref={passwordRef} type="text" placeholder="Account Password" required />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>
      <div className="deposit">
        <h3>Deposit</h3>
        <input ref={depositRef} type="number" placeholder="Account Number" required />
        <input ref={depositAmountRef} type="number" placeholder="Deposit Amount" required />
        <button type="button" onClick={deposit}>
          deposit
        </button>
      </div>
      <div className="withdraw">
        <h3>withdraw</h3>
        <input ref={withdrawRef} type="number" placeholder="Account Number" required />
        <input ref={withdrawAmountRef} type="number" placeholder="Withdraw Amount" required />
        <button type="button" onClick={withdraw}>
          withdraw
        </button>
      </div>
      <div className="transfer">
        <h3>transfer</h3>
        <input ref={sourceAccountRef} type="number" placeholder="Transfer from?" required />
        <input ref={destinationAccountRef} type="number" placeholder="Transfer to?" required />
        <input ref={transferAmountRef} type="number" placeholder="Transfer Amount" required />
        <button type="button" onClick={transfer}>
          transfer
        </button>
      </div>
      <div className="bankDataDisp">
      <input ref={nameSearchRef} type="text" placeholder="Account Name Search" onChange={handleSearch} />
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.accountNum}>
              <span>Account: {user.accountNum} </span>
              <span>Name: {user.name} </span>
              <span>Balance: {user.balance} </span>
              <span>Username: {user.username} </span>
              <button type='button'>Edit</button>
              {userPriveledge(user)}
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Bank;
