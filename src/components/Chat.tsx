import { Divider, Flex, AbsoluteCenter, Box, Text } from "@chakra-ui/react";
import axios from 'axios'
import React from "react";
import { useState, useEffect } from 'react'
import Message from "./Message";


const Chat: React.FC = () => {
  const [messages, setMessages]: [any, any] = useState([]);
  const [top, nextTopReached]: [any, any] = useState(0);
  const [date,setDate]:[any,any]=useState(1/1/2023);
  const getData = async() => {
    
    const response = await axios.get(`https://qa.corider.in/assignment/chat?page=${top}`)
    setMessages((prevChats: any) => [...prevChats, ...response.data.chats]);
   
    setDate(response.data.chats[0].time);

  }
  window.onscroll = function() {
    if(window.pageYOffset === 0) {
        nextTopReached(top+1)
    }
  }
  useEffect(() => {
    getData();
  }, [top])
  const timeString = date;
  console.log(date);


const dateObj = new Date(timeString);


const year = dateObj.getFullYear();
const month = dateObj.getMonth() ; 
const day = dateObj.getDate();


const formattedDate = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;

console.log(formattedDate);
  
  return (
    <Flex bg="#FAF9F4" flexDir="column" mt="10rem" mb="1rem" gap="5">
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="#FAF9F4" px="4">
          <Text color="#B7B7B7"> {formattedDate} </Text>
        </AbsoluteCenter>
      </Box>

      {messages.length && messages.map((msg: any) => <Message key={msg.that} msg={msg} />)}
    </Flex>
  );
};

export default Chat;
