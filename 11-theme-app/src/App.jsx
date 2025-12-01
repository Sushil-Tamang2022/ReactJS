import React, { useState } from 'react'

const App = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setCount((prev) => prev - 1)
    } else {
      setLiked(true);
      setCount((prev) => prev + 1);
    }
  }

  return (
    <div>
      <h1>Like App</h1>
      <div style={{ marginTop: "10px", fontSize: "18px", }}>
        {count} {count === 1 ? "Like" : "Likes"}
      </div>
      <button style={{ fontSize: "24px", background: "none", border: "none", color: liked ? "red" : "gray" }} onClick={handleLike}>Like</button>
    </div>
  )
}

export default App