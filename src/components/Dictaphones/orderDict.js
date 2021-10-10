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

export const OrderDict = ({ changeText, changeOrder, changeReview }) => {
  const [reviewText, setReviewText] = useState("");

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    setReviewText(" ");

    changeOrder(transcript);
  }, [transcript]);

  useEffect(() => {
    SpeechRecognition.startListening()
  }, []);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
 


          {!listening ? (
            <>
              {" "}
              <span onClick={SpeechRecognition.startListening}>
                <MicIcon fontSize="normal" />
              </span>
            </>
          ) : (
            <>
              <span onClick={SpeechRecognition.stopListening}>
                <MicOffIcon fontSize="normal" />
              </span>
            </>
          )}


    </>
  );
};
