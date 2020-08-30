import React, { useState } from "react";

export default function LikeButton() {
  const [status, setStatus] = useState(false);

  return (
    <button onClick={() => setStatus(!status)}>
      {`${status ? "You've liked this. Click to unlike" : "Like this!"}`}
    </button>
  );
}

/* export default function LikeButton() {
  const initialText = "Like this!";
  const [buttonText, changer] = useState(initialText);

  const changeText = () => {
    changer("You've liked this. Click to unlike!");
  };

  return (
    <div>
      <p>
        <button onClick={changeText}>{buttonText}</button>
      </p>
    </div>
  );
}
 */
