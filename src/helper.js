let bankData = [];
let userCount = 1000000;

let User = function (name, balance = 0) {
  this.accountNum = userCount + 1;
  userCount++;
  this.name = name;
  this.balance = balance;

  this.deposit = (accountNum, amount) => {
    let depositAccount = bankData.find((x) => x.accountNum === accountNum);
    if (depositAccount !== undefined) {
      depositAccount.balance = depositAccount.balance + amount;
      console.log("deposit success");
    } else {
      console.log("Transaction Failed. Please re-check account details.");
      return;
    }
  };

  this.withdraw = (accountNum, amount) => {
    let withdrawAccount = bankData.find((x) => x.accountNum === accountNum);
    if (withdrawAccount !== undefined) {
      if (amount <= withdrawAccount.balance) {
        withdrawAccount.balance = withdrawAccount.balance - amount;
        console.log("withdraw success");
      } else {
        console.log("Not enough balance.");
      }
    } else {
      console.log("Transaction Failed. Please re-check account details.");
      return;
    }
  };

  this.transfer = (sourceAccount, destinationAccount, amount) => {
    let source = bankData.find((x) => x.accountNum === sourceAccount);
    let destination = bankData.find((x) => x.accountNum === destinationAccount);
    if (source !== undefined || destination !== undefined) {
      if (amount <= source.balance) {
        source.balance = source.balance - amount;
        destination.balance = destination.balance + amount;
        console.log("transfer success");
      } else {
        console.log("Not enough balance.");
      }
    } else {
      console.log("Transaction Failed. Please re-check account details.");
      return;
    }
  };

  this.getBalance = (accountNum) => {
    let account = bankData.find((x) => x.accountNum === accountNum);
    console.log(account.balance);
    return account.balance;
  };

  this.listUsers = () => {
    console.log(bankData);
    return bankData;
  };
};

let addUser = (name, balance) => {
  let newUser = new User(name, balance);
  bankData.push(newUser);
};
