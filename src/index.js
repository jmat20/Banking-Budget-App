import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import App from "./App";
=======
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./header.css";
import LogInPage from "./login-form";
import HeaderComponent from "./header";
>>>>>>> df102c44bd8dd0219c72503acf581f6491954e09

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HeaderComponent />
    <LogInPage />
  </React.StrictMode>
);
