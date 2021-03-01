import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import Input from "../../components/input/input";

import {useFormik} from 'formik';
import * as yup from 'yup';
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  

  const onBlur=(name)=>{
      switch(name){
        case 'email':
          if(email!==''){
            if(!email.includes('@')) setErrorMessage('Invalid Email');
          }
          else setErrorMessage('');
          case 'password':
            console.log('Hi password');
            break;
           default:
              break;

      }
  }

  const loginClickHandler = () => {
    const jwtToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    localStorage.setItem("access-token", jwtToken);
    // props.setLoggedIn(true);
    props.history.push("/");
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  console.log(email, password);
  return (
    <div className="login">
      <Card dimension={{ width: 250, height: 350 }}>
        <div className="login-header">
          <h3>HRMS</h3>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        <Input
          name="email"
          type="email"
          value={email}
          onChange={emailChangeHandler}
          onFocus={() => console.log("On Focus")}
          onBlur={(event) => onBlur(event.target.name)}
          placeholder="Enter email"
        />
        <Input
          name="password"
          type="password"
          value={password}
          onChange={passwordChangeHandler}
          onFocus={() => console.log("On Focus")}
          onBlur={(event) => onBlur(event.target.name)}
          placeholder="Enter password"
        />
        <Button className="login-button">Login</Button>
      </Card>
    </div>
  );
};
export default Login;
