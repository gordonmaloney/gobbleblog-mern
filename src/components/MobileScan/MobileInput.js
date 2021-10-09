import React, { useEffect } from "react";

export const MobileInput = ({message, setMessage, sendMessage}) => {


  useEffect(() => {
    message && message.length > 20 && sendMessage()
  }, [message]);

  return (
    <div>

{/*
        <button onClick={(e) => {e.preventDefault(); setMessage("SCANNED TEXT")}} > SCAN TEXT </button>
*/}

<center>
      <button className="sendButton" onClick={(event) => {event.preventDefault(); sendMessage(event)} } >
        Send
      </button>
  </center>

    </div>
  );
};
