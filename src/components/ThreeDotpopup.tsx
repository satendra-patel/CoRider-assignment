import {
    Popover,
    PopoverTrigger,
    PopoverContent,
   
    PopoverBody,
 
    PopoverArrow,
   
  } from '@chakra-ui/react';
import { Icon } from "@chakra-ui/react";
import { FaUsers, FaPhone, FaTimes } from "react-icons/fa";
import { Text, Divider } from "@chakra-ui/react";
  import { BsThreeDotsVertical } from "react-icons/bs"
  
    
    import {  IconButton } from '@chakra-ui/react'
  
  
  const ThreeDotpopup: React.FC = () => {
     
      return (
        <Popover isLazy>
        <PopoverTrigger>
         <IconButton 
        aria-label="Menu" 
        bg="#FAF9F4" 
        borderRadius="2rem"
        icon={ <BsThreeDotsVertical size="1.5rem"/> }
      />
        </PopoverTrigger>
        <PopoverContent>
      
          <PopoverArrow />
        
          <PopoverBody>
          <Text>
        <Icon as={FaUsers} /> Members
      </Text>
      <Divider />
      <Text>
        <Icon as={FaPhone} /> Share Number
      </Text>
      <Divider />
      <Text>
        <Icon as={FaTimes} /> Report
      </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      )
    }
  
  export default ThreeDotpopup;