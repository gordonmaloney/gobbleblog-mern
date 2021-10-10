import React, { useState } from "react";
import { Card, Rating, CardContent, TextField, Box } from "@mui/material";
import { App } from "./OCR";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";

import { Scan } from "./Scan";
import { ReviewDict } from "./Dictaphones/reviewDict";
import { OrderDict } from "./Dictaphones/orderDict";
import MicIcon from "@mui/icons-material/Mic";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Button from "@mui/material/Button";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";

export const Review = () => {
  const [fieldDict, setFieldDict] = useState(null);

  const [uploadBox, setUploadBox] = useState(false);
  const [mobileQR, setMobileQR] = useState(false);

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
    <div style={{maxWidth: "700px", marginLeft: "auto", marginRight: "auto"}}>
      <Card
        style={{
          backgroundColor: "#04b2d9",
          color: "white",
          fontFamily: "Archivo Black",
          fontSize: 50,
          marginLeft: "20%",
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
          width: "80%",
          maxWidth: "700px",
          height: "fit-content",
          marginLeft: "10%",
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
                sx={{ marginBottom: 2 }}
                size="large"
                value={postData.review}
                onInput={(e) =>
                  setPostData({ ...postData, review: e.target.value })
                }
              />
            </div>

            {fieldDict === "review" ? (
              <ReviewDict changeReview={dictUpdate} />
            ) : (
              <center>
                <MicIcon onClick={() => setFieldDict("review")} />
              </center>
            )}

            <div>
              <TextField
                fullWidth
                id="outlined-multiline-flexible"
                label="What did you get?"
                multiline
                rows={4}
                sx={{ marginBottom: 2 }}
                size="large"
                value={postData.order}
                onInput={(e) =>
                  setPostData({ ...postData, order: e.target.value })
                }
              />
            </div>

            <center>
              {fieldDict === "order" ? (
                <OrderDict changeOrder={orderUpdate} />
              ) : (
                <MicIcon onClick={() => setFieldDict("order")} />
              )}

              
                <SendToMobileIcon onClick={() => setMobileQR(!mobileQR)} />
              

              {uploadBox ? (
                <>
                  <UploadFileIcon onClick={() => setUploadBox(false)} />
                  <App changeText={orderUpdate} />
                </>
              ) : (
                <UploadFileIcon onClick={() => setUploadBox(true)} />
              )}

              {mobileQR && (
                <span onClick={() => setMobileQR(!mobileQR)}>
                  <Scan
                    importText={(e) => setPostData({ ...postData, order: e })}
                  />
                </span>
              )}
            </center>
          </Box>


          <br />
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
