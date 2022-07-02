import Cookies from "universal-cookie";
import ClientNavbar from "./navbars/ClientNavbar";
import FreelancerNavbar from "./navbars/FreelancerNavbar";
import axios from "./axios.js";
import { useEffect } from "react";
import socket from "./socket.js"
import accountCheck from "./accountCheck";

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
    </div>
    )
}

export default Chat;