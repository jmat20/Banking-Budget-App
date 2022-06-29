import React, { useState } from "react";

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
    <form onSubmit={submitHandler}>
      <div className="form-container">
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
      </div>
    </form>
  );
}

export default LogInForm;
