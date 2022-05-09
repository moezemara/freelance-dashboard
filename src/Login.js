import axios from "axios";
const Login = () => {

    const handleLogin = async ()=>{

        data = {
            username: document.getElementsByName('username').values,
            password: document.getElementsByName('passowrd').values,
            'g-recaptcha-response': document.getElementsByName('g-recaptcha-response').values
        }

        const response = await axios.post('https://api.plebits.com/v1/user/login', data)

        console.log(response);
    }

    return (  
        <div className="login">
            <h2>Login</h2>
            <form>
                <input type="text" name="username" placeholder="Username"/>
                <input type="text" name="password" placeholder="Password"/>
                <input type="text" name="g-recaptcha-response" placeholder="Password" value="bypass"/>
                <button onclick={handleLogin} >Login</button>
            </form>
        </div>
    );
}

 
export default Login