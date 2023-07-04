import React, { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import MessageList from "./MessageList";
import NewMessage from "./NewMessage";

/*
We'll be building out these features:
- [ ] Dark mode toggle
- [ ] Showing all messages 
- [ ] Creating a new message
- [ ] Searching by message text
- [ ] *Bonus* Deleting a message
- [ ] *Bonus* Editing a message

When a user clicks the "toggle-dark-mode" input, the app should toggle between dark mode and light mode. This can be accomplished by using the "dark-mode" class on the <main> element in the App component.

For each feature, think about:
- Do we need state?
    - Where should that state live?
- What props do I need?
- How can I pass data to the components that need it?
*/

const testUser = { username: "Duane" };

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  
  function handleToggleDarkMode(isDarkMode) {
      setIsDarkMode(isDarkMode)
      console.log({ isDarkMode: isDarkMode })
  }
    
  return (
    <main className={isDarkMode ? "dark-mode" : ""}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={setIsDarkMode} />
      <Search />
      <MessageList />
      <NewMessage currentUser={testUser} />
    </main>
  );
}

export default App;
