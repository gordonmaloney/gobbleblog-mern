import React, { useState } from "react";
import { Card, Rating, CardContent, TextField, Box } from "@mui/material";
import { Dictaphone } from "./Dictaphone";
import { App } from './OCR';

export const Review = () => {

  const [reviewText, setReviewText] = useState("");

  const changeText = (e) => {
    //setReviewText(e)
    console.log("logging", e);
  };

  const dictUpdate = (e) => {
    setReviewText(e)
  };

  return (
    <div style={{ marginLeft: "10%" }}>
      <Card
        style={{
          backgroundColor: "#04b2d9",
          color: "white",
          fontFamily: "Archivo Black",
          fontSize: 50,
          marginLeft: 225,
          border: "5px solid white",
          width: "fit-content",
          maxWidth: 450,
          lineHeight: 1,
          zIndex: "10",
          marginTop: "1%",
          paddingLeft: 15,
          paddingBottom: 10,
          paddingRight: 15,
          position: "relative",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        Dasfgbfd
      </Card>

      <Card
        sx={{
          backgroundColor: "#04b2d9",
          color: "white",
          width: 600,
          height: "fit-content",
          marginLeft: 20,
          marginRight: 5,
          marginBottom: 5,
          marginTop: "-40px",
          border: "5px solid white",
          paddingTop: 2,
        }}
      >
        <CardContent sx={{ paddingTop: 5, fontSize: 25 }}>
          <center>
            <Rating
              name="read-only"
              value={3}
              readOnly
              sx={{ color: "white", fontSize: 50 }}
              size="large"
            />
          </center>
          rhejhaa, egethrewasg, werfgehetg, efgerherg, wafggdg, eghhrh


          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { marginTop: 5, width: "100%" }, }}
            noValidate
            autoComplete="off"
          >
            <div>
            <TextField
              fullWidth
              id="outlined-multiline-flexible"
              label="How was it?"
              multiline
              rows={4}
              size="large"
              value={reviewText}
              onInput={(e) => setReviewText(e.target.value)}
            />

            </div>
          </Box>


        </CardContent>

        <Dictaphone changeText={dictUpdate} />
        <App />

      </Card>
    </div>
  );
};
