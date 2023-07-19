import { Divider, Flex, AbsoluteCenter, Box, Text } from "@chakra-ui/react";
import axios from 'axios'
import React from "react";
import { useState, useEffect } from 'react'
import Message from "./Message";


const Chat: React.FC = () => {
  const [messages, setMessages]: [any, any] = useState([]);
  const [top, nextTopReached]: [any, any] = useState(0);
  const getData = async() => {
    
    const response = await axios.get(`https://qa.corider.in/assignment/chat?page=${top}`)
    setMessages((prevChats) => [...prevChats, ...response.data.chats]);
    console.log(messages)
  }
  window.onscroll = function() {
    if(window.pageYOffset === 0) {
        nextTopReached(top+1)
    }
  }
  useEffect(() => {
    getData();
  }, [top])
  
  return (
    <Flex bg="#FAF9F4" flexDir="column" mt="10rem" mb="1rem" gap="5">
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="#FAF9F4" px="4">
          <Text color="#B7B7B7"> 12 JAN, 23 </Text>
        </AbsoluteCenter>
      </Box>

      {messages.length && messages.map((msg: any) => <Message key={msg.that} msg={msg} />)}
    </Flex>
  );
};

export default Chat;
