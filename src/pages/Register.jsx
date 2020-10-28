import React, { useState } from "react";
import axios from "axios";
import {
  FormControl,
  Input,
  FormHelperText,
  InputLabel,
} from "@material-ui/core";

const bcrypt = require("bcryptjs");
const saltRounds = 10;

const passwordHasing = (plainPassword) => {
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) {
      throw err;
    } else {
      bcrypt.hash(plainPassword, salt, function (err, hash) {
        if (err) {
          throw err;
        } else {
          console.log(hash);
        }
      });
    }
  });
};

const Register = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handlePost = (event) => {
    event.preventDefault();
    console.log(passwordConfirmation === userPassword);
    console.log(passwordConfirmation, userPassword);
    const baseURL = `http://localhost:8080/api/register`;
    axios.post(baseURL, {
      userName: userName,
      email: userEmail,
      password: userPassword,
    });
  };

  function validateForm() {
    const emailRegex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
    if (userEmail || userPassword || userName) {
      if (userEmail.match(emailRegex)) {
        if (userEmail.length > 0 
          && userPassword.length > 8 
          && userName.length > 3){
          return validateMatchingPasswords();
        }
     else {
       return false;
    }
  }
}
}

  function validateMatchingPasswords(){
    return userPassword.match(passwordConfirmation);   
  }
  const handleEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    console.log("Az első " + e.target.value);
    console.log("Az első hasing " + passwordHasing(e.target.value));

    setUserPassword(passwordHasing(e.target.value));
  };

  const handlePasswordConfirmation = (e) => {
    e.preventDefault();
    console.log("A második " + e.target.value);
    console.log("A második hasing " + passwordHasing(e.target.value));
    setPasswordConfirmation(passwordHasing(e.target.value));
  };

  return (
    <div>
      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input
            id="email"
            aria-describedby="my-helper-text"
            onChange={handleEmail}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">User name</InputLabel>
          <Input
            id="user-name"
            aria-describedby="my-helper-text"
            onChange={handleUserName}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input
            id="password"
            aria-describedby="my-helper-text"
            onChange={handlePassword}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Confirm Password</InputLabel>
          <Input
            id="password-conf"
            aria-describedby="my-helper-text"
            onChange={handlePasswordConfirmation}
          />
        </FormControl>
        <Input type="submit" value="submit" onClick={handlePost} />
      </form>
    </div>
  );
};

export default Register;
