import React, { useState } from "react";
import { CardContent } from "@mui/material";
import { useEffect } from "react";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";

import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";


export const ReviewDict = ({ changeText, changeOrder, changeReview }) => {
  const [reviewText, setReviewText] = useState("");

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    setReviewText(" ");

    changeReview(transcript)
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <CardContent sx={{ paddingTop: 5, fontSize: 25 }}>
        <center>
          {!listening ? (
            <>
              {" "}
              <span onClick={SpeechRecognition.startListening}>
                <MicIcon fontSize="normal" /> review
              </span>
            </>
          ) : (
            <>
              <span onClick={SpeechRecognition.stopListening}>
                <MicOffIcon fontSize="normal" />
              </span>
            </>
          )}
        </center>
      </CardContent>
    </div>
  );
};
