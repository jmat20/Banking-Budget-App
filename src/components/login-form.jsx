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
        <div className="intro-container">
          <h1>Kwarta.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            commodo ac velit vel malesuada. Aenean tincidunt, tortor a egestas
            mollis, arcu sapien congue ex, id tempor eros metus vel nisl.
          </p>
        </div>

        <div className="form-container">
          <form onSubmit={submitHandler}>
            <h1>Log in to your account</h1>

            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Username:
              </label>
              <br />
              <input
                type="text"
                autoComplete="off"
                name="username"
                id="username"
                className="form-input"
                onChange={(e) =>
                  setDetails({ ...details, username: e.target.value })
                }
                value={details.username}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                className="form-input"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
            </div>

            <input type="submit" className="form-submit" value="log-in" />

            <div className="form-register">
              {error !== "" ? <p className="error">{error}</p> : ""}
              <p>
                To register, have an administrator open an account at any Kwarta
                branch to gain access to the online banking experience!
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default LogInForm;
