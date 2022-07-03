import React, { useState } from "react";
import LogInForm from "./components/login-form";
import Bank from "./components/bank";
import { SideBar1 } from "./components/sidebar";
import { bankData } from "./components/bank";
import Budget from "./components/budget";

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [users, setUsers] = useState(bankData);
  const [login, setLogin] = useState(false);

  const Login = (details) => {
    console.log(details);
    let userIdx = users.findIndex((x) => x.username === details.username);
    if (
      details.username === users[userIdx].username &&
      details.password === users[userIdx].password
    ) {
      setUser(users[userIdx]);
      setLogin(true);
    } else {
      setError("Details do not match!");
    }
  };

  const Logout = () => {
    setUser({});
    setLogin(false);
  };

  return (
    <div className="app">
      {login === false && <LogInForm Login={Login} error={error} />}
      {user.type === "admin" && <Bank users={users} setUsers={setUsers} />}
      {user.type === "customer" && (
        <Budget
          user={user}
          setUser={setUser}
          users={users}
          setUsers={setUsers}
        />
      )}
      {
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
      }
    </div>
  );
}

export default App;
