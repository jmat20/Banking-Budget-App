import React, { useState } from "react";
import HeaderComponent from "./components/header";
import LogInForm from "./components/login-form";

function App() {
  const adminUser = {
    username: "admin",
    password: "placeholderpass",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {};

  const Logout = () => {};

  return (
    <div className="app">
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button>Logout</button>
        </div>
      ) : (
        <LogInForm />
      )}

      <HeaderComponent />
    </div>
  );
}

export default App;
