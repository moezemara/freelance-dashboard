import axios from "../shared/axios.js";
import config from "../config.json"
import { useState, useEffect, createRef } from "react";
import Cookies from "universal-cookie";
import FreelancerNavbar from "../navbars/FreelancerNavbar.js";
import ClientNavbar from "../navbars/ClientNavbar.js";
import accountCheck from "../shared/accountCheck.js";

const PaymentNew = () => {

    const accountType = "F"; //cookies.getAll().type;

    

    return (
        <div>
            {(accountType=="F") && <FreelancerNavbar/>}
            {(accountType=="C") && <ClientNavbar/>}
            


        

        </div>
    );
}

 
//export default Login
export default PaymentNew;