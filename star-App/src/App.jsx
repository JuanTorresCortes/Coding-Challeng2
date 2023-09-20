import React, { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(5);

  const handleRemove = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Can not remove any more stars");
    }
  };

  const handleAdd = () => {
    if (count < 5) {
      setCount(count + 1);
    } else {
      alert("Can't add more than 5 stars");
    }
  };

  const renderStars = () => {
    const totalStars = ["⭐️", "⭐️", "⭐️", "⭐️", "⭐️"];
    return count > 0 ? totalStars.slice(0, count).join(" ") : "😔";
  };

  return (
    <div>
      <nav id="nav-bar">My Star App</nav>
      <div id="main-container">
        <button id="remove-button" onClick={handleRemove}>Remove</button>
        <span id="my-counter">{count}</span>
        <button id="add-button" onClick={handleAdd}>Add</button>
      </div>
      <div id="star-container">{renderStars()}</div>
    </div>
  )
}

export default App
