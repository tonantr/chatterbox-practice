import React, { useState } from "react";

function NewMessage({ currentUser, onAddMessage }) {
  const [body, setBody] = useState("")
  
  function handleSubmit(e) {
    e.preventDefault()
    const data = { 
      message: {
        username: currentUser.username,
        body: body,
        created_at: new Date().toUTCString()
      }
    }
    
    fetch("/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(r => r.json())
      .then(data => {
        onAddMessage(data.message)
        setBody("")
      })
  }
  
  return (
    <form className="new-message" onSubmit={handleSubmit}>
      <input type="text" name="body" autoComplete="off" value={body} onChange={e => setBody(e.target.value)} />
      <button type="submit">Send</button>
    </form>
  );
}

export default NewMessage;
