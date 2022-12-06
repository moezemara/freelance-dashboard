import {Text,Circle,Divider, Heading, HStack,  VStack} from "@chakra-ui/layout"
import Accordion from 'react-bootstrap/Accordion';


const ChatSideBar = ()=>{

    return (
        <VStack padding={"1%"} justify="space-evenly" w="100%" >
            <HStack justify="space-evenly"> 
                <Heading size="lg">Job Details</Heading>
            </HStack>
            <Divider/>
            <Accordion style={{"width":"100%"}}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Job Title</Accordion.Header>
                    <Accordion.Body>
                   
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Job Description</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Job Price</Accordion.Header>
                    <Accordion.Body>
                            1500$
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </VStack>
    );

}

export default ChatSideBar;