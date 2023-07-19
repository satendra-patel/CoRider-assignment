import {} from '@chakra-ui/react'
import { Flex, Input, IconButton } from '@chakra-ui/react'
import { AttachmentIcon } from '@chakra-ui/icons'
import { VscSend } from 'react-icons/vsc'





const Sendbox: React.FC = () => {

 
  
  return (
      <form action="">
        <Flex justify="space-between" paddingBlock="2rem" paddingInline="1.5rem" position="fixed" bottom="0" width="100%"  bg="#FAF9F4">
          <Flex bg="white" borderRadius="1rem" p="0" position="relative" bottom="0" width="100%"  gap="1" justify="space-between" alignItems="center" >
        
          <Input boxShadow="white" bg="white" type='text' name='msg' placeholder='Reply' border="none"/>
          <IconButton bg="white" aria-label='Send Message' icon={ <AttachmentIcon fontSize="1.5rem"/> }>
          </IconButton>
         
          <IconButton bg="white" aria-label='Send Message' icon={ <VscSend size="1.5rem" strokeWidth="0.015em" /> }>
          </IconButton>
          
          </Flex>
        </Flex>
  
      </form>

    
  )
}

export default Sendbox