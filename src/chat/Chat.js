import Cookies from "universal-cookie";
import ClientNavbar from "../navbars/ClientNavbar";
import FreelancerNavbar from "../navbars/FreelancerNavbar";
import axios from "../shared/axios.js";
import { useEffect } from "react";
import socket from "./socket.js"
import accountCheck from "../shared/accountCheck";
import {Grid, GridItem} from "@chakra-ui/react"

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
            <Grid templateColumns={"repeat(10, lfr)"}>
                <GridItem></GridItem>
                <GridItem></GridItem>
            </Grid>
        </div>
    </div>
    )
}

export default Chat;