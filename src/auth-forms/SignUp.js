import ReCAPTCHA from "react-google-recaptcha";
import config from "../config.json"
import countries from '../data/countries.json'
import { useState, useEffect, createRef } from "react";
import axios from "../shared/axios.js";
import Cookies from "universal-cookie";



const SignUp = () => {
    const recaptchaRef = createRef();

    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [email, setEmail] = useState('')
    const [type,setType] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [sex, setSex] = useState('');
    
    //for local validation
    const [confirmPassword, setConfirmPassword] = useState('')
    //error message for user
    const [errorMsg,setErrorMsg] = useState('');

    async function handleSignUp(){
        console.log(process.env.BASE_API_URL)
        const data = {
            'fname':fname,
            'lname':lname,
            'username':username,
            'password':password,
            'email':email,
            'type':type,
            'phone':phone,
            'address':address,
            'country':country,
            'sex':sex,
            'g-recaptcha-response': recaptchaRef.current.getValue()
        }
    
        const response = await axios.post('user/signup', data)
        console.log(response)
        if(response.data.success){
            document.cookie = JSON.stringify({'type':response.data.message.type})
            if(type==="F"){
                window.location = '/createprofile';
            }
            else{
                window.location = '/login';
            }
        }
        else{
            setErrorMsg({'falied':true,'msg':response.data.message});
        }
        
    }


    const cookies = new Cookies();
    const [accountType,setAccountType] = useState('');


    
    async function getAccountType(){
        const type = await cookies.getAll().type;
        await setAccountType(type);
    }
    

    useEffect(()=>{
        if(accountType !== 'F' || accountType !== 'C'){
            getAccountType();
        }
        
        if(accountType==='F'){
            axios.get('freelancer/profile/',{ withCredentials: true}).then(res=>{
                if(res.data.success===1){
                  window.location = '/profile/';
                }},[]);
        }
        else if(accountType==='C'){
            axios.get('client/profile/',{ withCredentials: true}).then(res=>{
                if(res.data.success===1){
                    window.location = '/profile/';
                }
                else{
                    
                }},[]);
        }},[accountType]);


    return (  
        <div className="signup">
            <h2>Sign Up To HomieLancer</h2>
            <form>
                
                <div className="name_part">
                    <input type="text" style={{marginRight:10}} placeholder="First name" value={fname} onInput={e=>setFname(e.target.value)}/>
                    <input type="text" placeholder="Last name" value={lname} onInput={e=>setLname(e.target.value)}/>
                </div>
                
                <input type="email" placeholder="Email" value={email} onInput={e=>setEmail(e.target.value)}/>
                
                <div className="name_part">
                <input type="text" style={{marginRight:10}} placeholder="Username" value={username} onInput={e=>setUsername(e.target.value)}/>
                
                <select value={country} onInput={e=>setCountry(e.target.value)}>
                <option value="" disabled selected hidden>Country</option>                        

                     {Object.keys(countries.Name).map((key,i)=>(
                          <option value={countries.Code[key]} key={i}>{countries.Name[key]}</option>
                      ))}      
                </select>
                </div>


                <input type="text" placeholder="address" value={address} onInput={e=>setAddress(e.target.value)}/>

                <div className="name_part">
                <input type="tel" style={{marginRight:10}} placeholder="phone" value={phone} onInput={e=>setPhone(e.target.value)}/>
                
                <select value={sex} onInput={e=>setSex(e.target.value)}>
                    <option value="" disabled selected hidden>Gender</option>                        
                    <option value="M">male</option>
                    <option value="F">female</option>
                </select>
                </div>


                <input type="password" placeholder="Password" value={password} onInput={e=>setPassword(e.target.value)}/>
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onInput={e=>setConfirmPassword(e.target.value)}/>
                { (confirmPassword!==password) && <label style={{color:'red'}}>Password needs to be confirmed</label>}
                <div id = "join-client-freelancer" className="name_part">
                    <label>Join</label>
                    <input type="radio" value="client" name="joinAs" onClick={()=>{setType('C')}}/>client
                    <input type="radio" value="freelancer" name="joinAs" onClick={()=>{setType('F')}}/>freelancer
                </div>

                <div className="name_part">
                    <input type="checkbox" style={{width:30}}/>
                    <label>I agree to terms & conditions</label>
                </div>

                <ReCAPTCHA ref={recaptchaRef} sitekey={config.RECAPTCHA.PUBLIC_KEY}/>

                <button type="button" onClick={handleSignUp}>Sign Up</button>
            </form>
            {(errorMsg.falied) && <label style={{color:'red'}}>{errorMsg.msg}</label>}

        </div>
    );
}

 
export default SignUp
