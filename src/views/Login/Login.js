import "./Login.css";
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

async function loginUser(credentials) {
  return fetch(process.env.REACT_APP_API_URL + "login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function Login({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email: email,
      password: password,
    });
    console.log(token);
    if (!token.token) {
      setError(token.err ? token.err : "An error ocurred");
    } else {
      setToken(token);
    }
  };

  return (
    <div className="Login">
      <div>
        <h2>Rick & Morty APP</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Log In</button>
          <div className="Login-error">{error}</div>
        </form>
      </div>
    </div>
  );
}

export default Login;

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
