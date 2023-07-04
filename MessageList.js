import React, { useEffect, useState } from "react";
import Message from "./Message";

function MessageList() {
  const [messages, setMessages] = useState([])
  
  useEffect(() => {
    fetch("/messages")
        .then(r => r.json())
        .then(data => setMessages(data.messages))
  }, [])
  

  return (
    <div className="list">
      <ul>{messages.map(message => (
        <Message key={message.id} username={message.username} body={message.body} createdAt={message.created_at} />
      ))}</ul>
    </div>
  );
}

export default MessageList;
