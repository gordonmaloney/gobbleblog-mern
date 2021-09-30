import React, { useState } from "react";
import { CardContent } from "@mui/material";
import { useEffect } from "react";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

import { Card, Rating, TextField, Box } from "@mui/material";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export const Dictaphone = ({ changeText }) => {
  const [reviewText, setReviewText] = useState("");

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    setReviewText(" ");

    changeText(transcript);
    console.log("transcript", transcript);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <CardContent sx={{ paddingTop: 5, fontSize: 25 }}>
        <center>
          <p sx={{ fontSize: 25 }}>
            {listening
              ? "Recording..."
              : <>Fingers sticky?<br/>Hit the mic button to record your review instead:</>}
          </p>

          {!listening ? (
            <>
              {" "}
              <span onClick={SpeechRecognition.startListening}>
                <MicIcon fontSize="large" /> Record
              </span>
            </>
          ) : (
            <>
              <span onClick={SpeechRecognition.stopListening}>
                <MicOffIcon fontSize="large" /> Stop recording
              </span>
            </>
          )}


{/*
          <br />
          {transcript && (
            <>
            <span onClick={resetTranscript}>
              <RestartAltIcon fontSize="large" />
              Re-record
            </span>
            </>
          )}
          */}
        </center>
      </CardContent>
    </div>
  );
};
