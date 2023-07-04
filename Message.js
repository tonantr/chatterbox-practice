import React from "react";

function Message({ username, body, createdAt }) {
  const timestamp = new Date(createdAt).toLocaleTimeString();

  return (
    <li>
      <span className="user">{username}</span>
      <span className="time">{timestamp}</span>
      <p>{body}</p>
    </li>
  );
}

export default Message;
