import React, { useState } from "react";

export default function LikeButton() {
  const initialText = "Like this!";
  const [buttonText, changer] = useState(initialText);

  const changeText = () => {
    changer("You've liked this!!");
  };

  return (
    <div>
      <p>
        <button onClick={changeText}>{buttonText}</button>
      </p>
    </div>
  );
}
