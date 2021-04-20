import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  FormControl,
  Input,
  InputLabel,
} from "@material-ui/core";
import { AuthContext } from "../components/contexts/AuthContext";


const Login = () => {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [user, setUser] = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [authServerDown, setAuthServerDown] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    const method = `/login`
    const baseURL = `${process.env.REACT_APP_BACKEND_AUTH}${method}`;
    axios
      .post(
        baseURL,
        {
          email: userEmail,
          password: userPassword,
        },
        {withCredentials: true}
      )
      .then((res) => {
        setUser({
          roles: res.data.roles,
          userEmail: res.data.userEmail,
          userName: res.data.userName
        });
        console.log(user);
        history.push("/profile")
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

  const handlePassword = (e) => {
    setUserPassword(e.target.value);
  };
  return (
    <div>
      {error ? <h1>Username/email is incorrect!</h1> : <h1>Sign in!</h1>}
      <form>
        <div className={"forms"}>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input
              id="email"
              aria-describedby="my-helper-text"
              onChange={handleEmail}
            />
          </FormControl>
        </div>
        <div className={"forms"}>
          <FormControl>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input
              id="password"
              aria-describedby="my-helper-text"
              onChange={handlePassword}
              type="password"
            />
          </FormControl>
        </div>
        <div className={"forms"}>
          <Input
            type="submit"
            value="submit"
            onClick={handleLogin}
            disabled={!validateForm()}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
