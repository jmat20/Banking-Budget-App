import React, { useState } from "react";
import HeaderComponent from "./components/header";
import LogInForm from "./components/login-form";

function App() {
  const adminUser = {
    username: "admin",
    password: "placeholderpass",
  };

  const [user, setUser] = useState({ name: "", username: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
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
