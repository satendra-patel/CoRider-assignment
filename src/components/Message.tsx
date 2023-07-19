import { Flex, Text, Image, Container} from "@chakra-ui/react";


const Message = ({ msg }: {msg: any}): JSX.Element => {
    const selfSend = msg.sender.self; 
    const msgText = msg.message;
    const profilePic = msg.sender.image;
    console.log(msg);
  return (
    <div>
      {  !selfSend  ?
        <Flex paddingInline="1.5rem" pb="2" justifyContent="left" gap="2">
        <Image
            borderRadius="full"
            boxSize="2rem"
            src={profilePic}
            alt="Dan Abramov"
        />
        <Container m="0" p="0.8rem" bg="white" maxW="70vw" flexGrow="1" justifyContent="left" borderRadius="0 1rem 1rem 1rem" boxShadow="0 0.2rem 0.8rem 0 rgba(0, 0, 0, 0.08)">
            <Text color="#606060"> {msgText} </Text>
        </Container>
        </Flex> :

        <Flex paddingInline="1.5rem" pb="2" justifyContent="right" gap="2" flexDir="row-reverse">
        <Container m="0" p="0.8rem" bg="#1C63D5" maxW="70vw" flexGrow="1" justifyContent="left" borderRadius=" 1rem 1rem 0 1rem" boxShadow="0 0.2rem 0.8rem 0 rgba(0, 0, 0, 0.08)">
            <Text color="white"> {msgText} </Text>
        </Container>
        </Flex>
      }
    </div>
  );
};

export default Message;
