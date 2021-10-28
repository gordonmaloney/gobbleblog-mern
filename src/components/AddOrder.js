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


export const AddOrder = ({gobble}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [fieldDict, setFieldDict] = useState(null);
    const [uploadBox, setUploadBox] = useState(false);
    const [mobileQR, setMobileQR] = useState(false);

    const [orderData, setOrderData] = useState({
        order: "",
        review: "",
        rating: 0,
        date: new Date()
      });

      const orderUpdate = (e) => {
        setOrderData({ ...orderData, order: e });
      };

      const dictUpdate = (e) => {
        setOrderData({ ...orderData, review: e });
      };

    const handleSubmit = () => {
        //dispatch(postReply(values));
        const id = gobble._id
        gobble.orders = [...gobble.orders, orderData];
  
        console.log("dispatching...", id, gobble);
        dispatch(updatePost(id, gobble));
        history.push('/')
      };

    return (
        <div>
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


            <center>
            <Rating
                name="rating"
                value={orderData.rating}
                sx={{ color: "white", fontSize: 50 }}
                size="large"
                onChange={(e) =>
                    setOrderData({ ...orderData, rating: e.target.value})
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
                    setOrderData({ ...orderData, review: e.target.value})
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
                value={orderData.order}
                onInput={(e) =>
                    setOrderData({ ...orderData, order: e.target.value})
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
                    importText={(e) => setOrderData({ ...orderData, order: e })}
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
    )
}
