import { Text, VStack } from "@chakra-ui/layout";
import { TabPanel, TabPanels } from "@chakra-ui/tabs";
import { useContext, useEffect, useRef } from "react";
import ChatBox from "./ChatBox";
import { MessagesContext } from "./Chat";

const ChatMessages = () => {


  const bottomDiv = useRef(null);

  useEffect(() => {
    bottomDiv.current?.scrollIntoView();
  });

  return (
    <VStack w="100%" h="75vh" justify="end" overflowY="scroll">
        
    </VStack>
  );
};

export default ChatMessages;