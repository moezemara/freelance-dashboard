import axios from "../shared/axios.js";
import config from "../config.json"
import { useState, useEffect, createRef } from "react";
import Cookies from "universal-cookie";
import FreelancerNavbar from "../navbars/FreelancerNavbar.js";
import ClientNavbar from "../navbars/ClientNavbar.js";
import accountCheck from "../shared/accountCheck.js";

const PayementPage = () => {

    const recaptchaRef = createRef();
    const [availableBalance, setAvailableBalance] = useState(0);


    const cookies = new Cookies();
    const accountType = cookies.getAll().type;

     //account check
     useEffect(()=>{
        accountCheck();
      },[]);

    return (
        <div>
            {(accountType=="F") && <FreelancerNavbar/>}
            {(accountType=="C") && <ClientNavbar/>}
            <div className="signup">
                <h2>Payement</h2>
                <form>
                    <p><b>Available balance:</b> {availableBalance} $</p>
                    <select>
                        <option value="" disabled selected hidden>Select Payement Method</option>                        
                    </select>
                    <input type="text"/>
                    <button type="button">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

 
//export default Login
export default PayementPage;