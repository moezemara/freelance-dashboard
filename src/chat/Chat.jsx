import Cookies from "universal-cookie";
import ClientNavbar from "../navbars/ClientNavbar";
import FreelancerNavbar from "../navbars/FreelancerNavbar";
import axios from "../shared/axios.js";
import { useEffect } from "react";
import socket from "./socket.js"
import accountCheck from "../shared/accountCheck";
import { Grid, GridItem, Tabs } from "@chakra-ui/react";
import {Text,Circle,Divider, Heading, HStack,  VStack} from "@chakra-ui/layout"
import ChatBox from "./ChatBox";
import "./Chat.css";
import ChatHeading from "./ChatHeading";
import ChatSideBar from "./ChatSideBar";
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
       
        <div className="chat">
            <Grid templateColumns="repeat(10, 1fr)" h="100vh">
                <GridItem colSpan="3" borderRight="1px solid gray">
                    <ChatSideBar/>
                </GridItem>
                <GridItem colSpan="7">
                    <VStack padding={"1%"} justify="space-evenly" w="100%">
                        <ChatHeading/>
                        <Divider bg="gray"/>
                    </VStack>
                </GridItem>
            </Grid>
            
        </div>
    </div>
    )
}

export default Chat;