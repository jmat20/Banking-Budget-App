import React, { useState } from "react";
import HeaderComponent from "./components/header";
import LogInForm from "./components/login-form";

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
      details.username == adminUser.username &&
      details.password == adminUser.password
    ) {
      console.log("admin logged in");
    } else {
      console.log("details do not match");
    }
  };

  const Logout = () => {};

  return (
    <div className="app">
      {user.username != "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button>Logout</button>
        </div>
      ) : (
        <LogInForm Login={Login} error={error} />
      )}

      <HeaderComponent />
    </div>
  );
}

export default App;
