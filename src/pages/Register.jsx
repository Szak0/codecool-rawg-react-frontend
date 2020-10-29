import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FormControl,
  Input,
  FormHelperText,
  InputLabel,
} from "@material-ui/core";

const bcrypt = require("bcryptjs");
const saltRounds = 10;


const Register = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState(false);
  const [authServerDown, setAuthServerDown] = useState(false);

  const passwordHasing = async (plainPassword) => {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) {
        throw err;
      } else {
        bcrypt.hash(plainPassword, salt, function (err, hash) {
          if (err) {
            throw err;
          } else {
            sendRequest(hash);
          }
        });
      }
    });
  };

  const sendRequest = (hash) => {
    axios.post(`http://localhost:8080/api/register`, {
      userName: userName,
      email: userEmail,
      password: hash
    }).then(res => {
      console.log("Ok");
    })
      .catch(err => {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          console.log("error");
          setError(true);
        } else if (err.request) {
          // client never received a response, or request never left
          setAuthServerDown(true)
        } else {
          // anything else
        }
      })
  }

  const handlePost = (event) => {
    event.preventDefault();
    if (validateForm()) {
      passwordHasing(userPassword)
    }
  };

  function validateForm() {
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (userEmail && userPassword && userName) {
      if (userEmail.match(emailRegex)) {
        if (userEmail.length > 0
          && userPassword.length >= 8
          && userName.length > 3) {
          return validateMatchingPasswords();
        }
        else {
          return false;
        }
      }
    }
  }

  function validateMatchingPasswords() {
    return userPassword == passwordConfirmation;
    // return userPassword.match(passwordConfirmation);   
  }
  const handleEmail = (e) => {
    setError(false);
    setUserEmail(e.target.value);
  };

  const handleUserName = (e) => {
    setError(false);
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setError(false);
    setUserPassword(e.target.value);
  };

  const handlePasswordConfirmation = (e) => {
    e.preventDefault();
    setError(false);
    setPasswordConfirmation(e.target.value);
  };

  return (
    <div className={"registration-form"}>
      <form>
        <div>
          {error ? <h1>This username/email already in use!</h1> : <h1>Come to join us!</h1>}
        </div>
        <div className={'forms'}>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input
              id="email"
              aria-describedby="my-helper-text"
              onChange={handleEmail}
            />
          </FormControl>
        </div>
        <div className={'forms'}>
          <FormControl>
            <InputLabel htmlFor="my-input">User name</InputLabel>
            <Input
              id="user-name"
              aria-describedby="my-helper-text"
              onChange={handleUserName}
            />
          </FormControl>
        </div>
        <div className={'forms'}>
          <FormControl>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input
              id="password"
              aria-describedby="my-helper-text"
              onChange={handlePassword}
            />
          </FormControl>
        </div>
        <div className={'forms'}>
          <FormControl>
            <InputLabel htmlFor="my-input">Confirm Password</InputLabel>
            <Input
              id="password-conf"
              aria-describedby="my-helper-text"
              onChange={handlePasswordConfirmation}
            />
          </FormControl>
        </div>
        <div className={'forms'}>
          <Input type="submit" value="submit" onClick={handlePost} />
        </div>
      </form>

    </div>
  );
};

export default Register;
