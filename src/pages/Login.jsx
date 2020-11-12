import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import {
  FormControl,
  Input,
  FormHelperText,
  InputLabel,
} from "@material-ui/core";
import { AuthContext } from "../components/contexts/AuthContext";

const Login = () => {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userInfo, setUserInfo] = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [authServerDown, setAuthServerDown] = useState(false);

  const handlePost = async (event) => {
    event.preventDefault();

    const baseURL = `http://localhost:5000/auth/login`;
    axios
      .post(
        baseURL,
        {
          email: userEmail,
          password: userPassword,
        },
        { headers: {} }
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("roles", res.data.roles);
        localStorage.setItem("userEmail", res.data.userEmail);
        let path = `/`;
        history.push(path);
        window.location.reload();
        console.log(res);
      })
      .catch((err) => {
        if (err.response) {
          setError(true);
        } else if (err.request) {
          setAuthServerDown(true);
        } else {
          // anything else
        }
      });
  };

  function validateForm() {
    const emailRegex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
    if (userEmail.match(emailRegex)) {
      return userEmail.length > 0 && userPassword.length > 8;
    }
  }

  const handleEmail = (e) => {
    setUserEmail(e.target.value);
  };

  //   const handleUserName = (e) => {
  //     setUserName(e.target.value);
  //   };

  const handlePassword = (e) => {
    setUserPassword(e.target.value);
  };
  return (
    <div>
      {error ? <h1>Username/email is incorrect!</h1> : <h1>Sign in!</h1>}
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input
            id="email"
            aria-describedby="my-helper-text"
            onChange={handleEmail}
          />
        </FormControl>
        {/* <FormControl>
          <InputLabel htmlFor="my-input">User name</InputLabel>
          <Input
            id="user-name"
            aria-describedby="my-helper-text"
            onChange={handleUserName}
          />
        </FormControl> */}
        <FormControl>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input
            id="password"
            aria-describedby="my-helper-text"
            onChange={handlePassword}
          />
        </FormControl>
        <Input
          type="submit"
          value="submit"
          onClick={handlePost}
          disabled={!validateForm()}
        />
      </form>
    </div>
  );
};

export default Login;
