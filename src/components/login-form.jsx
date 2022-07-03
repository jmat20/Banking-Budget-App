import React, { useState } from "react";
import "../assets/scss/styles.css";

function LogInForm({ Login, error }) {
  const [details, setDetails] = useState({
    name: "",
    username: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <div className="loginpage-container">
      <header className="header"></header>

      <section className="body-container">
        <div>
          <h1>panget</h1>
        </div>
        <div className="form-container">
          <form onSubmit={submitHandler}>
            <h1>Log in to your account</h1>

            <div className="form-group">
              <label htmlFor="name">Username:</label>
              <input
                type="text"
                autoComplete="off"
                name="username"
                id="username"
                onChange={(e) =>
                  setDetails({ ...details, username: e.target.value })
                }
                value={details.username}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
            </div>

            <input type="submit" value="log-in" />

            {error !== "" ? <div className="error">{error}</div> : ""}
          </form>
        </div>
      </section>
    </div>
  );
}

export default LogInForm;
