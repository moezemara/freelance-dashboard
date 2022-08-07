import Cookies from "universal-cookie";
import ClientNavbar from "../navbars/ClientNavbar";
import FreelancerNavbar from "../navbars/FreelancerNavbar";
import axios from "../shared/axios.js";
import { useEffect } from "react";
import socket from "./socket.js"
import accountCheck from "../shared/accountCheck";
import arrow from "../src-images/service-logo.png";

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
    <div>
        {(accountType==='F') && <FreelancerNavbar profile_id={profile_id}/>}
        {(accountType==='C') && <ClientNavbar profile_id={profile_id}/>}
        <div className="chat">
          
        </div>
    </div>
    )
}

export default Chat;