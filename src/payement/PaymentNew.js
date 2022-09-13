import axios from "../shared/axios.js";
import config from "../config.json"
import { useState, useEffect, createRef } from "react";
import Cookies from "universal-cookie";
import FreelancerNavbar from "../navbars/FreelancerNavbar.js";
import ClientNavbar from "../navbars/ClientNavbar.js";
import accountCheck from "../shared/accountCheck.js";


import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';



const PaymentNew = () => {

    const accountType = "F"; //cookies.getAll().type;

    


    const [show, setShow] = useState(false)
    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [orderId, setOrderId] = useState(false)
    
    const createOrder = (data, actions) => {
      return actions.order.create({
        purchase_units: [
          {
            description: 'This is the Book Worth 100$',
            amount: {
              currency_code: 'USD',
              value:100
            },
          },  
        ],
        application_context: {
          shipping_preference:'NO_SHIPPING'
        }
      })
        .then((orderID) => {
          setOrderId(orderID)
          return orderID
      })
    }
   
    const onApprove = (data,actions) => {
      return actions.order.capture().then(function (details) {
        const { payer } = details
        setSuccess(true)
      })
    }
  
    const onError = (data, actions) => {
      setErrorMessage("An error occured with your payment")
    }  



<PayPalScriptProvider
        options={{
          "client-id":
            "###replacethiswithyourownclientid###"
        }}
      >
      <h1>Simple Book Worth 100$</h1>
      <span>100$</span>
      <button onClick={() => setShow(true) } type='submit'>
        Buy Now
      </button>

      {show ? (
          <PayPalButtons style={{ layout: 'vertical' }} createOrder={createOrder}
            onApprove={onApprove} onError={onError}/>
        ) : null}
        
        {success ? (
          <h1>Your Payment has been done successfully please check email</h1>
        ):<h2>payment is pending</h2>}
      
    </PayPalScriptProvider>











    return (
        <div>
            {(accountType=="F") && <FreelancerNavbar/>}
            {(accountType=="C") && <ClientNavbar/>}
            




        

        </div>
    );
}

 
//export default Login
export default PaymentNew;