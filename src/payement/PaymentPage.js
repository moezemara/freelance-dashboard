import axios from "../shared/axios.js";
import config from "../config.json"
import { useState, useEffect, createRef } from "react";
import Cookies from "universal-cookie";
import FreelancerNavbar from "../navbars/FreelancerNavbar.js";
import ClientNavbar from "../navbars/ClientNavbar.js";
import accountCheck from "../shared/accountCheck.js";

const PaymentPage = () => {

    const recaptchaRef = createRef();
    const [availableBalance, setAvailableBalance] = useState(0);
    const [paymentOption,setPaymentOption] = useState('');
    const [paymentAmount, setPaymentAmount] = useState('')
    const cookies = new Cookies();
    const accountType = "F"; //cookies.getAll().type;

     //account check
     useEffect(()=>{
        accountCheck();
      },[]);


    const proceedPayment = () => {
        const data = {
            'option':paymentOption,
            'amount':paymentAmount
        }

        axios.post('pay/',data,{ withCredentials: true}).then(res=>{
            if(res.data.success===1){
              window.location = '/pay/';
            }},[]);    
    }

    return (
        <div>
            {(accountType=="F") && <FreelancerNavbar/>}
            {(accountType=="C") && <ClientNavbar/>}
            
            
            <div className="signup">
                <h2>Payement</h2>
                <form>
                    <p><b>Available balance:</b> {availableBalance} $</p>
                    <select value={paymentOption} onInput={e=>setPaymentOption(e.target.value)}>
                        <option value="" disabled selected hidden>Select Payement Method</option> 
                        <option value="paypal" >Paypal</option>                        
                       
                    </select>
                    <input type="text" value ={paymentAmount} onInput={e=>setPaymentAmount(e.target.value)} placeholder="amount" />
                    <button type="button" onClick={proceedPayment}>Pay</button>
                </form>
            </div>

            
        </div>
    );
}

 
//export default Login
export default PaymentPage;