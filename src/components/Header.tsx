import React from "react";
import { Flex, Heading, Button, IconButton, Text } from "@chakra-ui/react";
import { ArrowBackIcon, EditIcon } from "@chakra-ui/icons";

import { BsThreeDotsVertical } from "react-icons/bs"

const Header: React.FC = () => {
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
        Trip 1
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
          <Text fontSize="xl" fontWeight="600"> IGI Airport, T3</Text>
        </Flex>

        <Flex alignItems="center" gap="2">
          <Text fontSize="lg" color="#606060"> To </Text>
          <Text fontSize="xl" fontWeight="600"> Sector 28</Text>
        </Flex>

      </Flex>

     
      <IconButton 
        aria-label="Menu" 
        bg="#FAF9F4" 
        borderRadius="2rem"
        icon={ <BsThreeDotsVertical size="1.5rem"/> }
      />
 
    </Flex>

  </Flex>
  );
};

export default Header;
