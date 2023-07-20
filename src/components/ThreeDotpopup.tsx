import {
    Popover,
    PopoverTrigger,
    PopoverContent,
   
    PopoverBody,
 
    PopoverArrow,
   
  } from '@chakra-ui/react';
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
          <i class="fas fa-users"> Members</i> 
          <br /><hr/>
          <i class="fas fa-phone"> Share Number</i> 
          <br/><hr/>
          <i class='fas fa-times'> Report</i>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      )
    }
  
  export default ThreeDotpopup;