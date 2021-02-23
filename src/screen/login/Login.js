import React from 'react';
import Card from '../../components/card/Card';
import Input from '../../components/input/input';
const Login=(props)=>{

    const loginClickHandler=()=>{
        const jwtToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
        localStorage.setItem("access-token",jwtToken);
        // props.setLoggedIn(true);
        props.history.push('/');
    }

    return(
    <Card dimension={{width:100,height:100}}>
      <Input/>
        <button onClick={loginClickHandler}>Login</button> 
          {console.log("hi")}
    </Card> 
    )
}
export default Login;