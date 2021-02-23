function authenticate(component){

    const accessToken=localStorage.getItem('access-token');
    const isLoggedIn=accessToken?true:false;
    if(isLoggedIn){
        return component;
    }
    else{
        return ()=>{
            window.location.replace('/login');
        return(<div>You must Login First</div>)
        }
    }
    return component;
}
export default authenticate;