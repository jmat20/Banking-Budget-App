import React, { useState, useRef } from "react";
import { SideBar2 } from "./sidebar";
import "../assets/scss/bank.css";
let expenseId = 100;
let expenseArray = [];

let Budget = ({ user, setUser, users, setUsers, Logout, setLogin }) => {
  const [overviewIsActive, setOverviewIsActive] = useState(true);
  const [addIsActive, setAddIsActive] = useState(false);
  const [depositIsActive, setDepositIsActive] = useState(false);
  const [withdrawIsActive, setWithdrawIsActive] = useState(false);
  const [transferIsActive, setTransferIsActive] = useState(false);

  const [expenseItems, setExpenseItems] = useState(expenseArray);
  const [remainingBudget, setRemainingBudget] = useState(user.balance);
  const filteredExpenseItems = expenseItems.filter((x) =>
    x.username.toLowerCase().includes(user.username.toLowerCase())
  );
  const nameRef = useRef(null);
  const costRef = useRef(null);
  const depositAmountRef = useRef(null);
  const withdrawAmountRef = useRef(null);
  const destinationAccountRef = useRef(null);
  const transferAmountRef = useRef(null);

  let Expense = function (item, cost, username) {
    this.id = expenseId + 1;
    expenseId++;
    this.item = item;
    this.cost = parseInt(cost);
    this.user = username;
  };

  let updateUsers = (user) => {
    let userIdx = users.findIndex((x) => x.username === user.username);
    setUsers((state) => {
      const newState = state;
      newState[userIdx] = user;
      return [...newState];
    });
    clearInputs();
  };

  let handleDelete = (id) => {
    console.log(id);
    const newItems = expenseItems.filter((x) => x.id !== id);
    setExpenseItems([...newItems]);
  };

  let handleAddExpense = () => {
    let item = nameRef.current.value;
    let cost = costRef.current.value;
    let username = user.username;
    addExpense(item, cost, username);
    console.log("added");
    setExpenseItems((state) => {
      const newState = [...state, expenseArray[expenseArray.length - 1]];
      return [...newState];
    });

    let ExpenseCosts = filteredExpenseItems.map((i) => i.cost);
    let totalExpenses = ExpenseCosts.reduce(function (a, b) {
      return a + b;
    });
    let remainingBudget = parseInt(user.balance) - parseInt(totalExpenses);
    setRemainingBudget(remainingBudget);
  };

  let addExpense = (item, cost, username) => {
    let newExpense = new Expense(item, cost, username);
    expenseArray = [...expenseArray, newExpense];
  };

  let deposit = () => {
    let depositAccount = user;
    if (parseInt(depositAmountRef.current.value) > 0) {
      parseInt(depositAccount.balance);
      depositAccount.balance =
        parseInt(depositAccount.balance) +
        parseInt(depositAmountRef.current.value);
      console.log("deposit success");
      setUser((state) => {
        let newState = state;
        newState = depositAccount;
        return [...newState];
      });
      updateUsers(user);
      clearInputs();
    } else {
      console.log("Transaction Failed. Please enter a valid amount.");
      return;
    }
  };

  let withdraw = () => {
    let withdrawAccount = user;
    if (parseInt(withdrawAmountRef.current.value) > 0) {
      if (withdrawAmountRef.current.value <= withdrawAccount.balance) {
        withdrawAccount.balance =
          parseInt(withdrawAccount.balance) -
          parseInt(withdrawAmountRef.current.value);
        console.log("withdraw success");
        setUser((state) => {
          let newState = state;
          newState = withdrawAccount;
          return [...newState];
        });
        updateUsers(user);
        clearInputs();
      } else {
        console.log("Not enough balance.");
      }
    } else {
      console.log("Transaction Failed. Please re-check account details.");
      return;
    }
  };

  let transfer = () => {
    let destinationIdx = users.findIndex(
      (x) => x.accountNum === parseInt(destinationAccountRef.current.value)
    );
    let source = user;
    let destination = users[destinationIdx];
    if (destination !== undefined) {
      if (transferAmountRef.current.value <= source.balance) {
        source.balance =
          parseInt(source.balance) - parseInt(transferAmountRef.current.value);
        destination.balance =
          parseInt(destination.balance) +
          parseInt(transferAmountRef.current.value);
        console.log("transfer success");
        setUser((state) => {
          let newState = state;
          newState = source;
          return [...newState];
        });
        updateUsers(user);
        setUsers((state) => {
          const newState = state;
          newState[destinationIdx] = destination;
          return [...newState];
        });
        clearInputs();
      } else {
        console.log("Not enough balance.");
      }
    } else {
      console.log("Transaction Failed. Please re-check account details.");
      return;
    }
  };

  let clearInputs = () => {
    nameRef.current.value = "";
    costRef.current.value = "";
    depositAmountRef.current.value = "";
    withdrawAmountRef.current.value = "";
    destinationAccountRef.current.value = "";
    transferAmountRef.current.value = "";
  };
  return (
    <div className="budgetWrapper">
      <SideBar2
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
      <div className={`overview ${overviewIsActive ? "" : "hidden"}`}>
        <div className="userStatus">
          <h3>Hi, {user.name}</h3>
          <p>{user.accountNum}</p>
          <h4>Balance: Php {user.balance}</h4>
          <h5>Budget Remaining: Php {remainingBudget}</h5>
        </div>
        <div className="expenses">
          <ul>
            {filteredExpenseItems.map((expense) => (
              <li key={expense.id}>
                <span>Item: {expense.item} </span>
                <span>Cost: Php {expense.cost} </span>
                <span>Balance: {user.balance} </span>
                <span>Username: {user.username} </span>
                <button type="button" onClick={() => handleDelete(expense.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`addExpense ${addIsActive ? "" : "hidden"}`}>
        <h3>Add an Expense</h3>
        <input ref={nameRef} type="text" placeholder="Expense Item" required />
        <input
          ref={costRef}
          type="number"
          placeholder="Expense Cost"
          required
        />
        <button type="button" onClick={handleAddExpense}>
          Add Expense
        </button>
      </div>
      <div className={`depost ${depositIsActive ? "" : "hidden"}`}>
        <h3>Deposit Funds</h3>
        <input
          ref={depositAmountRef}
          type="number"
          placeholder="Deposit Amount"
          required
        />
        <button type="button" onClick={deposit}>
          deposit
        </button>
      </div>
      <div className={`withdraw ${withdrawIsActive ? "" : "hidden"}`}>
        <h3>Withdraw Funds</h3>
        <input
          ref={withdrawAmountRef}
          type="number"
          placeholder="Withdraw Amount"
          required
        />
        <button type="button" onClick={withdraw}>
          Withdraw
        </button>
      </div>
      <div className={`transfer ${transferIsActive ? "" : "hidden"}`}>
        <h3>Transfer Funds</h3>
        <input
          ref={destinationAccountRef}
          type="number"
          placeholder="Transfer to?"
          required
        />
        <input
          ref={transferAmountRef}
          type="number"
          placeholder="Transfer Amount"
          required
        />
        <button type="button" onClick={transfer}>
          transfer
        </button>
      </div>
    </div>
  );
};

export default Budget;
