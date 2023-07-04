import React, { useState } from "react";

function NewMessage({ currentUser }) {
  const [body, setBody] = useState("test message")
  
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
      .then(data => console.log(data))
  }
  
  return (
    <form className="new-message" onSubmit={handleSubmit}>
      <input type="text" name="body" autoComplete="off" value={body} onChange={e => setBody(e.target.value)} />
      <button type="submit">Send</button>
    </form>
  );
}

export default NewMessage;

