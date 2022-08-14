import {Divider, Heading, HStack,  VStack} from "@chakra-ui/layout"
import {Button} from "@chakra-ui/button"
import {Input} from "@chakra-ui/input"
import {Field, Form, Formik} from "formik"


const ChatBox = () => {
    return (  

        <Formik
        initialValues={{ message: "" }}
        style={{"height":"20vh"}}
        onSubmit={(values, actions) => {
        }}
      >
        <HStack as={Form} w="100%" pb="1.4rem" px="1.4rem">
          <Input
            as={Field}
            name="message"
            placeholder="Type message here.."
            size="lg"
            autoComplete="off"
          />
          <Button type="submit" size="lg" style={{"backgroundColor":"black"}} colorScheme="blackAlpha">
            Send
          </Button>
        </HStack>
      </Formik>
    );
}
 
export default ChatBox;