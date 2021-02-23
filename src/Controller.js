  
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardLayout from './components/dashboardLayout/DashboardLayout';
import Home from './screen/home/Home';
import Recruitment from './screen/recruitment/Recruitment';
import Login from './screen/login/Login';
import Input from './components/input/input';


const Controller = () => {

    // const [isLoggedIn,setIsLoggedIn]=useState(false); way1 of authentication
    //for this approach you need to pass props to login //setIsLoggedIn={setIsLoggedIn}
    //and props  isLoggedIn={isLoggedIn} to other routes and also need to implement some useEffect Logic to each screen
    // as commented in Home screen
    return(
        <Router>
            
            <Switch>
            <Route exact path="/login" render={(props)=><Login {...props}  />} /> 
            <DashboardLayout>
                <Route exact path="/" render={(props)=><Home {...props}/>} />
                <Route path="/recruitment" render={(props)=><Recruitment {...props} />}/>
                
                </DashboardLayout>
                <Route/>
            </Switch>
            
        </Router>
    )
}

export default Controller;