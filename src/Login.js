import axios from "./axios.js";
import config from "./config.json"
import { useState, useEffect, createRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {

    const recaptchaRef = createRef();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    //for client side handling
    const [loginFailed,setLoginFailed] = useState(false);
    
    async function handleLogin(){
        console.log(process.env.BASE_API_URL)
        const data = {
            username: username,
            password: password,
            'g-recaptcha-response': recaptchaRef.current.getValue()
        }

        const response = await axios.post('user/login', data)
        setLoginFailed(false);
        if(response.data.success){
            document.cookie = JSON.stringify({'type':response.data.message.type})
            window.location = '/profile';
        }
        else{
            setLoginFailed(true);
            setUsername('');
            setPassword('');
            window.grecaptcha.reset();
        }
    }

    

    return (

        <div className="login">
            <h2>Login</h2>
            <form>
                <input type="text" name="username" placeholder="Username" value={username} onInput={e => setUsername(e.target.value)}/>
                <input type="password" name="password" placeholder="Password" value={password} onInput={e => setPassword(e.target.value)}/>
                <ReCAPTCHA ref={recaptchaRef} sitekey={config.RECAPTCHA.PUBLIC_KEY}/>
                {loginFailed && <p><label style={{color:'red'}}>Invalid Username or Password!</label></p>}
                <button type="button" onClick={handleLogin}>Login</button>
                <p style={{color:"gray"}}>Don't have an account?<a style={{color:"gray"}} href="/signup">Create One</a></p>
            </form>
        </div>
    );
}

 
//export default Login
export default Login;