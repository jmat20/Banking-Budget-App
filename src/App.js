import React, { useState } from "react";
import HeaderComponent from "./components/header";
import LogInForm from "./components/login-form";
import Bank from "./components/bank";
import { bankData } from "./components/bank";
import Budget from "./components/budget";

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [users, setUsers] = useState(bankData);

  const Login = (details) => {
    console.log(details);
    let userIdx = users.findIndex((x) => x.username === details.username);
    if (
      details.username === users[userIdx].username &&
      details.password === users[userIdx].password
    ) {
      setUser(users[userIdx]);
    } else {
      setError("Details do not match!");
    }
  };

  const Logout = () => {
    setUser({ name: "", username: "" });
  };

  return (
    <div className="app">
      {user.username !== "" ? (
        // let userIdx = bankData.findIndex((x) => x.username === details.username)
        // let loginVerification = bankData[userIdx]
        // if (user.username != "") {
        // if (user.username = adminUser.username) {
        // banking app
        // } else if (details.username === loginVerification.username && details.password === loginVerification.password) {
        // setUser as loginVerficiation <- this will have all data of the specific customer
        // budgeting app
        // } else {
        // <LogInForm Login={Login} error={error} /> }
        // }

        //BELOW IS JUST PLACEHOLDER FOR THE CODE ABOVE TO BE IMPLEMENTED//
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LogInForm Login={Login} error={error} />
      )}
      <Bank users={users} setUsers={setUsers} />
      <Budget currentUser={user} />
    </div>
  );
}

export default App;
