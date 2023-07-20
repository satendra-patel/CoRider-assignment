import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
  } from '@chakra-ui/react';
  import { BsThreeDotsVertical } from "react-icons/bs"
  
    import { AttachmentIcon } from '@chakra-ui/icons';
    import {  IconButton ,Button ,Portal} from '@chakra-ui/react'
  import React from 'react'
  
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
          {/* <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader> */}
          <PopoverArrow />
          {/* <PopoverCloseButton /> */}
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