import React, { useState } from "react";
import HeaderComponent from "./components/header";
import LogInForm from "./components/login-form";
import Bank from "./helper";

function App() {
  const adminUser = {
    name: "admin",
    username: "admin",
    password: "placeholderpass",
  };

  const [user, setUser] = useState({ name: "", username: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.username === adminUser.username &&
      details.password === adminUser.password
    ) {
      setUser({
        name: adminUser.name,
        username: adminUser.username,
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
        // if (user.username != "") {
        // if (user.username = adminUser.username) {
        // banking app
        // } else if (user.username = array.includes(bankdata.username or something idk)) {
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
      <HeaderComponent />
    </div>
  );
}

export default App;
