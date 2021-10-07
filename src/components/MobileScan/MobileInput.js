import React from "react";

export const MobileInput = ({message, setMessage, sendMessage}) => {
  return (
    <div>


        <button onClick={(e) => {e.preventDefault(); setMessage("SCANNED TEXT")}} > SCAN TEXT </button>

      <button className="sendButton" onClick={(event) => sendMessage(event)}>
        Send
      </button>
    </div>
  );
};
