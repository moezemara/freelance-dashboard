import {Text,Circle,Divider, Heading, HStack,  VStack} from "@chakra-ui/layout"


const ChatSideBar = ()=>{

    return (
        <VStack padding={"1%"} justify="space-evenly" w="100%" >
            <HStack justify="space-evenly"> 
                <Text fontSize={22} size="3xl">Details</Text>
            </HStack>
            <Divider  bg="gray"/>

        </VStack>
    );

}

export default ChatSideBar;