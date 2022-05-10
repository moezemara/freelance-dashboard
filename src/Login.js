import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();
    const handleLogin = ()=>{
        console.log(1);
        axios.get("https://www.google.com").then((res)=>{console.log(res)})
    }

    useEffect(()=>{handleLogin()})


    return (  
        <div className="login">
            <h2>Login</h2>
            <button onClick={handleLogin}></button>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Username"/>
                <input type="text" placeholder="Password"/>
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

 
export default Login