import React, { useState } from "react";
import Button from "../components/Button";
import TaskCard from "../components/TaskCard";
import axios from "axios";
import styled from "styled-components";

import { BASE_URL, AUTH_URL } from "../constants/constants";

const LoginCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin-top: -16px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ColouredSpan = styled.span``;
function Login({ updateErrors, updateLoginStatus }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(BASE_URL + AUTH_URL, {
        identifier: username,
        password: password
      })
      .then(response => {
        sessionStorage.setItem("JWT", response.data.jwt);
        sessionStorage.setItem("User", JSON.stringify(response.data.user));
        updateLoginStatus();
      })
      .catch(() => {
        updateErrors();
      });
  };

  const handleChange = input => {
    let name = input.target.name.toLowerCase();
    let value = input.target.value;
    name === "username" ? setUsername(value) : setPassword(value);
  };

  return (
    <LoginCont>
      <h1>InToWin</h1>
      <span>The more you in, the more you win.</span>
      <div>
        <Form onSubmit={handleSubmit}>
          <h2>Username</h2>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            className=""
          />
          <h2>Password</h2>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className=""
          />
          <Button
            as="input"
            primary
            wide
            type="submit"
            name="submit"
            value="Log in"
          />
        </Form>
      </div>
    </LoginCont>
  );
}

export default Login;
