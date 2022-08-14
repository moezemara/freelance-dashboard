import {Text,Circle,Divider, Heading, HStack,  VStack} from "@chakra-ui/layout"


const ChatSideBar = ()=>{

    return (
        <VStack padding={"1%"} justify="space-evenly" w="100%" >
            <HStack justify="space-evenly"> 
                <Heading size="lg">Job Details</Heading>
            </HStack>
            <Divider/>
            <VStack justify="space-evenly" w="100%" >
                <Text size="md">Job Title: Develop a website</Text>
            </VStack>

        </VStack>
    );

}

export default ChatSideBar;