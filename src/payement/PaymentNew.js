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
            






 <link
      rel="stylesheet"
      type="text/css"
      href="https://www.paypalobjects.com/webstatic/en_US/developer/docs/css/cardfields.css"
    />
    <script
      src="https://www.paypal.com/sdk/js?components=buttons,hosted-fields&client-id=<%= clientId %>"
      data-client-token="<%= clientToken %>"
    ></script>
    <div id="paypal-button-container" class="paypal-button-container"></div>
    <div class="card_container">
      <form id="card-form">
        <label for="card-number">Card Number</label>
        <div id="card-number" class="card_field"></div>
        <div >
          <div>
            <label for="expiration-date">Expiration Date</label>
            <div id="expiration-date" class="card_field"></div>
          </div>
          <div >
            <label for="cvv">CVV</label>
            <div id="cvv" class="card_field"></div>
          </div>
        </div>
        <label for="card-holder-name">Name on Card</label>
        <input
          type="text"
          id="card-holder-name"
          name="card-holder-name"
          autocomplete="off"
          placeholder="card holder name"
        />
        <div>
          <label for="card-billing-address-street">Billing Address</label>
          <input
            type="text"
            id="card-billing-address-street"
            name="card-billing-address-street"
            autocomplete="off"
            placeholder="street address"
          />
        </div>
        <div>
          <label for="card-billing-address-unit">&nbsp;</label>
          <input
            type="text"
            id="card-billing-address-unit"
            name="card-billing-address-unit"
            autocomplete="off"
            placeholder="unit"
          />
        </div>
        <div>
          <input
            type="text"
            id="card-billing-address-city"
            name="card-billing-address-city"
            autocomplete="off"
            placeholder="city"
          />
        </div>
        <div>
          <input
            type="text"
            id="card-billing-address-state"
            name="card-billing-address-state"
            autocomplete="off"
            placeholder="state"
          />
        </div>
        <div>
          <input
            type="text"
            id="card-billing-address-zip"
            name="card-billing-address-zip"
            autocomplete="off"
            placeholder="zip / postal code"
          />
        </div>
        <div>
          <input
            type="text"
            id="card-billing-address-country"
            name="card-billing-address-country"
            autocomplete="off"
            placeholder="country code"
          />
        </div>
        <br /><br />
        <button value="submit" id="submit" class="btn">Pay</button>
      </form>
    </div>





        

        </div>
    );
}

 
//export default Login
export default PaymentNew;