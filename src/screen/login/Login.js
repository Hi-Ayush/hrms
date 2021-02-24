import React from 'react';
import Button from '../../components/button/Button';
import Card from '../../components/card/Card';
import Input from '../../components/input/input';
const Login=(props)=>{

    const loginClickHandler=()=>{
        const jwtToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
        localStorage.setItem("access-token",jwtToken);
        // props.setLoggedIn(true);
        props.history.push('/');
    }

    return (
      <div className="login">
        <Card  dimension={{ width: 250, height: 350 }}>
          <div className="login-header"><h3>HRMS</h3></div>
          <Input type="email" placeholder="Enter email" />
          <Input type="password" placeholder="Enter password" />
          <Button className="login-button">Login</Button>
        </Card>
      </div>
    );
}
export default Login;