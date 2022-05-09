import axios from "./axios.js";
import { useState, useEffect, createRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {

    const recaptchaRef = createRef();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [recaptcha, setRecaptcha] = useState('')

    async function handleLogin(){
        console.log(process.env.BASE_API_URL)
        const data = {
            username: username,
            password: password,
            'g-recaptcha-response': recaptchaRef.current.getValue()
        }

        const response = await axios.post('user/login', data);
        console.log(response);
    }

    useEffect(()=>{
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js";
        script.async = true;
        document.body.appendChild(script);
    })

    return (

        <div className="login">
            <h2>Login</h2>
            <form>
                <input type="text" name="username" placeholder="Username" value={username} onInput={e => setUsername(e.target.value)}/>
                <input type="text" name="password" placeholder="Password" value={password} onInput={e => setPassword(e.target.value)}/>
                <ReCAPTCHA ref={recaptchaRef} sitekey="6Lct6dgfAAAAAOOx11KQeH7HSS9QVDwlFuAYsQh5"/>
                <button type="button" onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
}

 
//export default Login
export default Login;