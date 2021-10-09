import React, { useState } from "react";
import { Card, Rating, CardContent, TextField, Box } from "@mui/material";
import { Dictaphone } from "./Dictaphone";
import { App } from "./OCR";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";

import { Scan } from "./Scan";

export const Review = () => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    restaurant: "",
    review: "",
    rating: 0,
    order: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };

  const dictUpdate = (e) => {
    setPostData({ ...postData, review: e });
  };

  const orderUpdate = (e) => {
    console.log("testtttt", e);
    setPostData({ ...postData, order: e });
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
        New Review
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
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { marginTop: 5, width: "100%" } }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                fullWidth
                id="outlined-multiline-flexible"
                label="Where did you order from?"
                multiline
                rows={1}
                size="large"
                value={postData.restaurant}
                onInput={(e) =>
                  setPostData({ ...postData, restaurant: e.target.value })
                }
              />
            </div>
            
            <center>
              <Rating
                name="rating"
                value={postData.rating}
                sx={{ color: "white", fontSize: 50 }}
                size="large"
                onChange={(e) =>
                  setPostData({ ...postData, rating: e.target.value })
                }
              />
            </center>
            <div>
              <TextField
                fullWidth
                id="outlined-multiline-flexible"
                label="How was it?"
                multiline
                rows={4}
                size="large"
                value={postData.review}
                onInput={(e) =>
                  setPostData({ ...postData, review: e.target.value })
                }
              />
            </div>
            <div>
              <TextField
                fullWidth
                id="outlined-multiline-flexible"
                label="What did you get?"
                multiline
                rows={4}
                size="large"
                value={postData.order}
                onInput={(e) =>
                  setPostData({ ...postData, order: e.target.value })
                }
              />
            </div>
            <Scan importText={(e) => setPostData({ ...postData, order: e })} />
          </Box>
          <button onClick={handleSubmit}>Submit</button>
        </CardContent>

        <Dictaphone changeText={dictUpdate} />
        <App changeText={orderUpdate} />
      </Card>
    </div>
  );
};
