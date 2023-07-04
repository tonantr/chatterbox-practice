import React, { useEffect, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import MessageList from "./MessageList";
import NewMessage from "./NewMessage";

/*
We'll be building out these features:
- [x] Dark mode toggle
- [x] Showing all messages 
- [x] Creating a new message
- [x] Searching by message text
- [x] *Bonus* Deleting a message
- [ ] *Bonus* Editing a message

Clicking the 'edit' button on a message should toggle between showing the EditMessage component, and the message body.

When the EditMessage form is submitted, make a PATCH request to /messages/:id with an object body of the request:
{
  "message": { 
    "body": "edited message"
  }
}

Once you have successfully saved the edited message on the server, find a way to update the message in your chat application as well. You should also change the Message component state to leave 'editing' mode.

For each feature, think about:
- Do we need state?
    - Where should that state live?
- What props do I need?
- How can I pass data to the components that need it?
*/

const testUser = { username: "Ian" };

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [messages, setMessages] = useState([])
  const [search, setSearch] = useState("")
  
  useEffect(() => {
    fetch("/messages")
        .then(r => r.json())
        .then(data => setMessages(data.messages))
  }, [])
  
  function handleAddMessage(newMessage) {
    setMessages([...messages, newMessage])
  }
  
  function handleDeleteMessage(id) {
    // shorten the list of messages
    const updatedMessages = messages.filter(message => message.id !== id)
    setMessages(updatedMessages)
  }
  
  function handleUpdateMessage(updatedMessageObj) {
    const updatedMessages = messages.map(message => {
      if (message.id === updatedMessageObj.id) {
        return updatedMessageObj
      } else {
        return message
      }
    })
    setMessages(updatedMessages)
  }
  
  console.log(messages)
  
  // MDN .filter, .includes
  const displayedMessages = messages.filter(message => message.body.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <main className={isDarkMode ? "dark-mode" : ""}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={setIsDarkMode} />
      <Search search={search} onSearchChange={setSearch} />
      <MessageList messages={displayedMessages} currentUser={testUser} onMessageDelete={handleDeleteMessage} onUpdateMessage={handleUpdateMessage} />
      <NewMessage currentUser={testUser} onAddMessage={handleAddMessage} />
    </main>
  );
}

export default App;
