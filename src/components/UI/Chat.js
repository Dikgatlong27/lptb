import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";

const Chat = () => {
  return (
    <a 
      href="https://wa.me/27676228529" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="chat-container"
      aria-label="Chat with LPTB Solutions on WhatsApp (opens in a new tab)"
    >
      <IoLogoWhatsapp />
    </a>
  )
}

export default Chat
