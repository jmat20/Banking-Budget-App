import React, { useState, useRef, useEffect } from "react";
import { SideBar2 } from "./sidebar";
import "../assets/scss/styles.css";

let expenseId = 100;
export let expenseArray = [{ id: 1, item: "test", cost: 100, user: "admin" }];

let Budget = ({
  user,
  setUser,
  users,
  setUsers,
  expenseItems,
  setExpenseItems,
  Logout,
  setLogin,
}) => {
  const [overviewIsActive, setOverviewIsActive] = useState(true);
  const [addIsActive, setAddIsActive] = useState(false);
  const [depositIsActive, setDepositIsActive] = useState(false);
  const [withdrawIsActive, setWithdrawIsActive] = useState(false);
  const [transferIsActive, setTransferIsActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState(user.username);
  const [remainingBudget, setRemainingBudget] = useState(user.balance);

  const nameRef = useRef(null);
  const costRef = useRef(null);
  const depositAmountRef = useRef(null);
  const withdrawAmountRef = useRef(null);
  const destinationAccountRef = useRef(null);
  const transferAmountRef = useRef(null);

  const filteredExpenseItems = expenseItems.filter((x) =>
    x.user.toLowerCase().includes(searchTerm.toLowerCase())
  );
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
    setExpenseItems((state) => {
      const newState = [...state, expenseArray[expenseArray.length - 1]];
      console.log(newState);
      return [...newState];
    });
    console.log(expenseItems);
  };

  let addExpense = (item, cost, username) => {
    let newExpense = new Expense(item, cost, username);
    expenseArray = [...expenseArray, newExpense];
    window.alert("Expense Added.");
  };

  let calcBalance = () => {
    let expenseCosts = filteredExpenseItems.map((i) => i.cost);
    console.log(filteredExpenseItems);
    console.log(expenseCosts);
    let totalExpenses = expenseCosts.reduce((a, b) => a + b, 0);

    console.log(user.username);
    console.log(totalExpenses);
    let remaining = parseInt(user.balance) - parseInt(totalExpenses);
    console.log(remaining);
    setRemainingBudget(0);
    setRemainingBudget(remaining);
  };

  let deposit = () => {
    let depositAccount = user;
    if (parseInt(depositAmountRef.current.value) > 0) {
      parseInt(depositAccount.balance);
      depositAccount.balance =
        parseInt(depositAccount.balance) +
        parseInt(depositAmountRef.current.value);
      window.alert("Deposit Success.");
      setUser((state) => {
        let newState = state;
        newState = depositAccount;
        return { ...newState };
      });
      updateUsers(user);
      clearInputs();
    } else {
      window.alert("Transaction Failed. Please enter a valid amount.");
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
        window.alert("Withdrawal Success.");
        setUser((state) => {
          let newState = state;
          newState = withdrawAccount;
          return { ...newState };
        });
        updateUsers(user);
        clearInputs();
      } else {
        window.alert("Not enough balance.");
      }
    } else {
      window.alert("Transaction Failed. Please re-check account details.");
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
        window.alert("Fund Transfer Success.");
        setUser((state) => {
          let newState = state;
          newState = source;
          return { ...newState };
        });
        updateUsers(user);
        setUsers((state) => {
          const newState = state;
          newState[destinationIdx] = destination;
          return [...newState];
        });
        clearInputs();
      } else {
        window.alert("Not enough balance.");
      }
    } else {
      window.alert("Transaction Failed. Please re-check account details.");
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

  useEffect(() => {
    calcBalance();
  }, [expenseItems, user]);

  return (
    <div className="budget-container">
      <header className="header"></header>

      <section className="body">
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

        <div className="budget-main">
          <div
            className={`component-container overview ${
              overviewIsActive ? "" : "hidden"
            }`}
          >
            <h3 className="component-heading">Hi, {user.name}</h3>
            <div className="component-input-container">
              <div className="component-group">
                <h4 className="component-balance">
                  Balance: PHP {user.balance}
                </h4>
                <label htmlFor="account number" className="component-label">
                  Account Number: {user.accountNum}
                </label>
                <br />
                <label htmlFor="account number" className="component-label">
                  Budget Remaining: PHP {remainingBudget}
                </label>
              </div>
            </div>

            <h3 className="component-heading">List of Expenses</h3>
            <div className="component-input-container too-long">
              <ul className="component-list">
                {filteredExpenseItems.map((expense) => (
                  <li className="component-item" key={expense.id}>
                    <span className="item-type">
                      Item: <span className="item-value">{expense.item}</span>
                    </span>
                    <span className="item-type">
                      Cost:{" "}
                      <span className="item-value">PHP {expense.cost} </span>
                    </span>
                    <button
                      type="button"
                      className="component-button"
                      onClick={() => handleDelete(expense.id)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className={`component-container addExpense ${
              addIsActive ? "" : "hidden"
            }`}
          >
            <h3 className="component-heading">Add an Expense</h3>
            <div className="component-input-container">
              <div className="component-group">
                <label htmlFor="expense item" className="component-label">
                  Expense Item:
                </label>
                <br />
                <input
                  ref={nameRef}
                  name="expense item"
                  type="text"
                  placeholder="Expense Item"
                  className="component-input"
                  required
                />
              </div>

              <div className="component-group">
                <label htmlFor="expense cost" className="component-label">
                  Expense Cost:
                </label>
                <br />
                <input
                  ref={costRef}
                  name="expense cost"
                  type="number"
                  placeholder="Expense Cost"
                  className="component-input"
                  required
                />
              </div>
            </div>
            <button
              className="component-submit"
              type="button"
              onClick={handleAddExpense}
            >
              Add Expense
            </button>
          </div>

          <div
            className={`component-container deposit ${
              depositIsActive ? "" : "hidden"
            }`}
          >
            <h3 className="component-heading">Deposit Funds</h3>
            <div className="component-input-container">
              <div className="component-group">
                <label htmlFor="deposit" className="component-label">
                  Deposit Amount:
                </label>
                <br />
                <input
                  ref={depositAmountRef}
                  name="deposit"
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
            className={`component-container withdraw ${
              withdrawIsActive ? "" : "hidden"
            }`}
          >
            <h3 className="component-heading">Withdraw Funds</h3>
            <div className="component-input-container">
              <div className="component-group">
                <label htmlFor="withdraw" className="component-label">
                  Withdraw Amount:
                </label>
                <br />
                <input
                  ref={withdrawAmountRef}
                  name="withdraw"
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
            className={`component-container transfer ${
              transferIsActive ? "" : "hidden"
            }`}
          >
            <h3 className="component-heading">Transfer Funds</h3>
            <div className="component-input-container">
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
                <label htmlFor="amount" className="component-label">
                  Transfer Amount:
                </label>
                <br />
                <input
                  ref={transferAmountRef}
                  name="amount"
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
              Transfer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Budget;
