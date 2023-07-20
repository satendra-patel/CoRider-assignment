import React,{useState,useEffect} from "react";
import { Flex, Heading, Button, IconButton, Text } from "@chakra-ui/react";
import { ArrowBackIcon, EditIcon } from "@chakra-ui/icons";
import axios from 'axios'

import { BsThreeDotsVertical } from "react-icons/bs"
import ThreeDotpopup from './ThreeDotpopup';

const Header: React.FC = () => {
  const [name,setName]:[any,any]=useState('');
  const [sender,setSender]:[any,any]=useState('');
  const [reciever,setReciever]:[any,any]=useState('');
  const [top, nextTopReached]: [any, any] = useState(0);

  const getDetail = async() => {
    
    const response = await axios.get(`https://qa.corider.in/assignment/chat?page=${top}`)
    console.log(response.data.from);
    setName(response.data.name);
    setReciever(response.data.to);
    setSender(response.data.from);
   
    

  }
  window.onscroll = function() {
    if(window.pageYOffset === 0) {
        nextTopReached(top)
    }
  }
  useEffect(() => {
    getDetail();
  }, [top])
  console.log(name);
  console.log(sender);
  console.log(reciever);



  return (
  <Flex w="100vw" zIndex="100" top="0" bg="#FAF9F4" position="fixed" flexDir="column" justify="space-between" p="1.5rem" borderBottom="1px solid #E5E5E0" gap="2">

    <Flex bg="#FAF9F4" h="50" flexDir="row" justify="space-between" alignItems="center" gap="3">

      <IconButton 
        aria-label="Back" 
        bg="#FAF9F4" 
        borderRadius="2rem" 
        icon={ <ArrowBackIcon fontSize="2rem"/> }
      />

      <Heading  bg="#FAF9F4" flexGrow="3">
        {name}
      </Heading>

      <IconButton 
        aria-label="Edit" 
        bg="#FAF9F4" 
        borderRadius="2rem" 
        icon={ <EditIcon fontSize="1.5rem"/> } 
      />

    </Flex>

    <Flex bg ="#FAF9F4" justify="space-between" alignItems="center" gap="5">
      
      <Button w="3rem" h="3rem" borderRadius="2rem"/>

      <Flex flexDir="column" flexGrow="1">

        <Flex alignItems="center" gap="2">
          <Text fontSize="lg" color="#606060"> From </Text>
          <Text fontSize="xl" fontWeight="600">{sender}</Text>
        </Flex>

        <Flex alignItems="center" gap="2">
          <Text fontSize="lg" color="#606060"> To </Text>
          <Text fontSize="xl" fontWeight="600"> {reciever}</Text>
        </Flex>

      </Flex>

      <ThreeDotpopup/>
      {/* <IconButton 
        aria-label="Menu" 
        bg="#FAF9F4" 
        borderRadius="2rem"
        icon={ <BsThreeDotsVertical size="1.5rem"/> }
      /> */}
 
    </Flex>

  </Flex>
  );
};

export default Header;
