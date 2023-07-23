import { Divider, Flex, AbsoluteCenter, Box, Text } from "@chakra-ui/react";
import axios from 'axios';
import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";

const Chat: React.FC = () => {
  const [messages, setMessages]: [any[], any] = useState([]);
  const [top, setTop]: [number, any] = useState(1);
  const [loading, setLoading]: [boolean, any] = useState(false);
  const [date, setDate]: [string, any] = useState("1/1/2023");

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const getData = async (page: number) => {
    if (loading) return; // Prevent duplicate loading requests
    setLoading(true);
    try {
      const response = await axios.get(`https://qa.corider.in/assignment/chat?page=${page}`);
      const newMessages = response.data.chats;
      setMessages((prevChats: any[]) => [...newMessages.reverse(), ...prevChats]);
      setDate(newMessages[newMessages.length - 1].time);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Load the initial 6 latest messages
    getData(top);
  }, [top]);

  useEffect(() => {
    chatContainerRef.current?.addEventListener("scroll", handleScroll);
    return () => {
      chatContainerRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      if (chatContainer.scrollTop === 0 && !loading) {
        // Load older messages when scrolled to the top
        setTop((prevTop: number) => prevTop + 1);
      }
    }
  };

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  const timeString = date;
  const dateObj = new Date(timeString);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1; // Months are zero-based, so we add 1
  const day = dateObj.getDate();
  const formattedDate = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;

  return (
    <Flex bg="#FAF9F4" flexDir="column" mt="10rem" mb="1rem" gap="5">
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="#FAF9F4" px="4">
          <Text color="#B7B7B7"> {formattedDate} </Text>
        </AbsoluteCenter>
      </Box>

      <div ref={chatContainerRef} style={{ overflowY: "auto", flexGrow: 1 }}>
        {messages.map((msg: any) => <Message key={msg.that} msg={msg} />)}
      </div>
    </Flex>
  );
};

export default Chat;
