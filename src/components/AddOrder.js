import React, { useState } from "react";
import { Card, Rating, CardContent, TextField, Box } from "@mui/material";
import { App } from "./OCR";
import { useDispatch } from "react-redux";
import { updatePost } from "../actions/posts";

import { Scan } from "./Scan";
import { ReviewDict } from "./Dictaphones/reviewDict";
import { OrderDict } from "./Dictaphones/orderDict";
import MicIcon from "@mui/icons-material/Mic";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Button from "@mui/material/Button";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";
import { useHistory } from "react-router";

import { Shepherd } from "./Shepherd/Shepherd";

export const AddOrder = ({ gobble }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [fieldDict, setFieldDict] = useState(null);
  const [uploadBox, setUploadBox] = useState(false);
  const [mobileQR, setMobileQR] = useState(false);

  const [orderData, setOrderData] = useState({
    order: "",
    review: "",
    rating: 0,
    date: new Date(),
  });

  const orderUpdate = (e) => {
    setOrderData({ ...orderData, order: e });
  };

  const dictUpdate = (e) => {
    setOrderData({ ...orderData, review: e });
  };

  const handleSubmit = () => {
    //dispatch(postReply(values));
    const id = gobble._id;
    gobble.orders = [...gobble.orders, orderData];

    console.log("dispatching...", id, gobble);
    dispatch(updatePost(id, gobble));
    history.push("/");
  };

  return (
    <div>
      <Card
        style={{
          backgroundColor: "#04b2d9",
          color: "white",
          fontFamily: "Archivo Black",
          fontSize: window.innerWidth > 600 ? 50 : 30,
          marginLeft: window.innerWidth > 900 ? "16%" : "5%",
          border: "5px solid white",
          width: "fit-content",
          maxWidth: window.innerWidth > 600 ? 450 : 280,
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
        New order
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
          maxWidth: "900px",
          zIndex: "7",
        }}
      >
        <CardContent sx={{ paddingTop: "-10", fontSize: 25 }}>
          <div
            style={{
              marginTop: "-30px",
              marginRight: "-30px",
              marginBottom: "60px",
            }}
          >
            <Shepherd />
          </div>

          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { marginTop: 5, width: "100%" } }}
            noValidate
            autoComplete="off"
          >
            <center>
              <Rating
                id="rating"
                name="rating"
                value={orderData.rating}
                sx={{ color: "white", fontSize: 50 }}
                size="large"
                onChange={(e) =>
                  setOrderData({ ...orderData, rating: e.target.value })
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
                value={orderData.review}
                onInput={(e) =>
                  setOrderData({ ...orderData, review: e.target.value })
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
                value={orderData.order}
                onInput={(e) =>
                  setOrderData({ ...orderData, order: e.target.value })
                }
              />
            </div>

            <center>
              {fieldDict === "order" ? (
                <OrderDict changeOrder={orderUpdate} />
              ) : (
                <MicIcon id="micIcon2" onClick={() => setFieldDict("order")} />
              )}

              <SendToMobileIcon
                id="sendToMobile"
                onClick={() => setMobileQR(!mobileQR)}
              />

              {uploadBox ? (
                <>
                  <UploadFileIcon onClick={() => setUploadBox(false)} />
                  <App changeText={orderUpdate} />
                </>
              ) : (
                <UploadFileIcon
                  id="uploadFile"
                  onClick={() => setUploadBox(true)}
                />
              )}

              {mobileQR && (
                <span onClick={() => setMobileQR(!mobileQR)}>
                  <Scan
                    id="QR"
                    importText={(e) => setOrderData({ ...orderData, order: e })}
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
