
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { ChatIcon } from "@chakra-ui/icons";
import {Circle, Divider, Heading, HStack, Text, VStack} from "@chakra-ui/layout";
import { Tab, TabList } from "@chakra-ui/tabs";

const ChatSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <VStack py="1.4rem">
        <HStack justify="space-evenly" w="100%">
          <Heading size="md"></Heading>
          
        </HStack>
        <Divider />
        <VStack as={TabList}>
            <HStack as={Tab}>
              <Circle
                bg={ "green.700"}
                w="20px"
                h="20px"
              />
              <Text>Username</Text>
            </HStack>
        </VStack>
      </VStack>
    </>
  );
};

export default ChatSidebar;

