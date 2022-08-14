import {Text,Circle,Divider, Heading, HStack,  VStack} from "@chakra-ui/layout"


const ChatHeading = ()=>{

    return (
        <HStack justify="space-evenly" w="100%">
            <Heading size="lg">Username</Heading>
            <HStack justify="space-evenly">
                <Heading as="h2" size='md'>Active</Heading>
                <Circle bg="red.500" w="20px" h="20px"/>
            </HStack>
        </HStack>
    );

}

export default ChatHeading;