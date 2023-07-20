import {
  Popover,
  PopoverTrigger,
  PopoverContent,
 
  PopoverBody,
 
  PopoverArrow,
 
} from '@chakra-ui/react';

  import { AttachmentIcon } from '@chakra-ui/icons';
  import {  IconButton ,Button ,Portal} from '@chakra-ui/react'


const PopUp: React.FC = () => {
   
    return (
      <Popover placement='bottom' >
      <PopoverTrigger>
      <IconButton bg="white" aria-label='Send Message' icon={ <AttachmentIcon fontSize="1.5rem"/> }>
          </IconButton>
      </PopoverTrigger>
      <Portal>
        <PopoverContent bg="#008000" color="white"  maxW="195px" maxH="200px"  >
          <PopoverArrow />
          <PopoverBody >
          <Button colorScheme='white' variant='outline' margin="0.2rem"><i class="fas fa-camera"></i></Button>
          <Button colorScheme='white' variant='outline' margin="0.2rem"><i class="fas fa-video"></i></Button>
          <Button colorScheme='white' variant='outline' margin="0.2rem"><i class="fas fa-file"></i></Button>
          </PopoverBody>
        
        </PopoverContent>
      </Portal>
    </Popover>
    )
  }

export default PopUp