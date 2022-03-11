import React, { useState } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";

const App = () => {
  let maxResults = 20;
  const [filteredEmoji, setfilteredEmoji] = useState(filterEmoji("", 20));

  const handleSearchChange = event => {
    setfilteredEmoji(filterEmoji(event.target.value, maxResults))
  };

  return (
      <div>
        <Header />
        <SearchInput textChange={handleSearchChange} />
        <EmojiResults emojiData={filteredEmoji} />
      </div>
  )
}

export default App
