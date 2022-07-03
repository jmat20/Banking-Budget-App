import React, { useState } from "react";
import HeaderComponent from "./parts/header";
import LogInForm from "./components/login-form";
import Bank from "./components/bank";
import SideBar from "./components/sidebar";
import { bankData } from "./components/bank";

function App() {
  const [user, setUser] = useState({ name: "", username: "" });
  const [error, setError] = useState("");
  let currentUser = {};

  const Login = (details) => {
    console.log(details);
    let userIdx = bankData.findIndex((x) => x.username === details.username);
    if (
      details.username === bankData[userIdx].username &&
      details.password === bankData[userIdx].password
    ) {
      currentUser = bankData[userIdx];
      setUser({
        name: bankData[userIdx].name,
        username: bankData[userIdx].username,
      });
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
        <Bank />
      ) : (
        <LogInForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
