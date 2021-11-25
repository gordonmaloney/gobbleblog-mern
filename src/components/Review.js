import React, { useState } from "react";
import { Card, Rating, CardContent, TextField, Box } from "@mui/material";
import { App } from "./OCR";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";
import Tooltip from '@mui/material/Tooltip';

import { useHistory } from "react-router";

import { Scan } from "./Scan";
import { ReviewDict } from "./Dictaphones/reviewDict";
import { OrderDict } from "./Dictaphones/orderDict";
import MicIcon from "@mui/icons-material/Mic";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Button from "@mui/material/Button";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";

import { Shepherd } from './Shepherd/Shepherd'

export const Review = () => {
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [fieldDict, setFieldDict] = useState(null);
  const [uploadBox, setUploadBox] = useState(false);
  const [mobileQR, setMobileQR] = useState(false);

  const dispatch = useDispatch();


  const [postData, setPostData] = useState({
    restaurant: "",
    orders:
      {review: "",
      order: "",
      rating: "",
      date: new Date()},
    userId: user?.result._id
  });

  console.log(postData.orders)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
    history.push('/')
  };

  const dictUpdate = (e) => {
    setPostData({ ...postData,
      orders: {...postData.orders, review: e}
       })
  };

  const orderUpdate = (e) => {
    setPostData({ ...postData,
      orders: {...postData.orders, order: e}
       })
  };


  return (
   <div
      style={{
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        zIndex: "4",
      }}
    >
      <Card
      id="intro"
        style={{
          backgroundColor: "#04b2d9",
          color: "white",
          fontFamily: "Archivo Black",
          fontSize: window.innerWidth > 600 ? 50 : 25,
          marginLeft: window.innerWidth > 900 ? "16%" : "5%",
          border: "5px solid white",
          width: "fit-content",
          maxWidth: window.innerWidth > 600 ? 450 : 240,
          paddingTop: window.innerWidth > 600 ? 0 : 5,
          lineHeight: 1,
          zIndex: "4",
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
            width: "100%",
            height: "fit-content",
            marginLeft: window.innerWidth > 900 ? "13%" : "0%",
            marginRight: 5,
            marginBottom: 5,
            marginTop: "-40px",
            border: "5px solid white",
            paddingTop: 2,
            maxWidth: "800px",
            zIndex: "7",
        }}
      >
        <CardContent sx={{ paddingTop: "-10", fontSize: 25 }}>



          <div style={{marginTop: "-30px", marginRight: "-30px", marginBottom: "60px"}}>
            
        <Shepherd />
          </div>



          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { marginTop: 0, width: "100%" } }}
            noValidate
            autoComplete="off"
          >

            <div>
              <TextField
              sx={{marginTop: 0}} 
                fullWidth
                id="outlined-multiline-flexible"
                label="Where did you order from?"
                size="large"
                value={postData.restaurant}
                onInput={(e) =>
                  setPostData({ ...postData, restaurant: e.target.value })
                }
              />
            </div>

            <center>
              <Rating
              id="rating"
                name="rating"
                value={postData.orders.rating}
                sx={{ color: "white", fontSize: 50 }}
                size="large"
                onChange={(e) =>
                  setPostData({ ...postData,
                    orders: {...postData.orders, rating: e.target.value}
                     })
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
                value={postData.orders.review}
                onInput={(e) =>
                  setPostData({ ...postData,
                    orders: {...postData.orders, review: e.target.value}
                     })
                }
              />
            </div>

            {fieldDict === "review" ? (
              <ReviewDict changeReview={dictUpdate} />
            ) : (
              <center>
                <MicIcon id="micIcon" onClick={() => setFieldDict("review")} />
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
                value={postData.orders.order}
                onInput={(e) =>
                  setPostData({ ...postData,
                    orders: {...postData.orders, order: e.target.value}
                     })
                }
              />
            </div>

            <center>
              {fieldDict === "order" ? (
                <OrderDict changeOrder={orderUpdate} />
              ) : (
                <MicIcon id="micIcon2" onClick={() => setFieldDict("order")} />
              )}

              
                <SendToMobileIcon id="sendToMobile" onClick={() => setMobileQR(!mobileQR)} />
              

              {uploadBox ? (
                <>
                  <UploadFileIcon onClick={() => setUploadBox(false)} />
                  <App changeText={orderUpdate} />
                </>
              ) : (
                <UploadFileIcon id="uploadFile" onClick={() => setUploadBox(true)} />
              )}

              {mobileQR && (
                <span onClick={() => setMobileQR(!mobileQR)}>
                  <Scan id="QR"
                    importText={(e) => setPostData({ ...postData,
                      orders: {...postData.orders, order: e}
                       })}
                  />
                </span>
              )}
            </center>
          </Box>


          <br />
          <Button
          id="submitBtn"
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
