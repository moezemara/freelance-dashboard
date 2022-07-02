import Cookies from "universal-cookie";
import ClientNavbar from "./navbars/ClientNavbar";
import FreelancerNavbar from "./navbars/FreelancerNavbar";
import axios from "./axios.js";
import { useEffect } from "react";
import socket from "./socket.js"
import accountCheck from "./accountCheck";
import arrow from "./src-images/service-logo.png";

const Chat = ()=>{
    const cookies = new Cookies();
    const accountType = cookies.getAll().type;
    const profile_id = cookies.getAll().active_id;

    useEffect(()=>{
        accountCheck(accountType);
        socket.connect();
        socket.emit('add');
    },[]);

    return(
    <div className="chat">
        {(accountType==='F') && <FreelancerNavbar profile_id={profile_id}/>}
        {(accountType==='C') && <ClientNavbar profile_id={profile_id}/>}
        <div style={{"display":"flex","width":"100%","height":"50"}}>
            <input type="text" placeholder="Type something"/>
            <button><img src={arrow} height="35px"/></button>
        </div>
    </div>
    )
}

export default Chat;