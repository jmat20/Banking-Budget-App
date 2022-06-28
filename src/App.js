import React, { useState } from "react";
import HeaderComponent from "./components/header";
import LogIn from "./components/login-form";

function App() {
  const adminUser = {
    username: "admin",
    password: "placeholderpass",
  };

  const [user, setUser] = useState({ name: "", email: "" });

  return <HeaderComponent />;
}

export default App;
