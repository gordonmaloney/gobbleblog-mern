import React, { useEffect, useState } from "react";
import { AddOrder } from "./AddOrder";
import { Template, Orders } from "./Template";
import { getPosts } from "../actions/posts";
import { useSelector, useDispatch } from "react-redux";
import { updatePost } from "../actions/posts";
import { TextField, Button, Typography } from "@mui/material";
import { Card, CardContent, Rating, Modal } from "@mui/material";
import { deletePost } from "../actions/posts";
import { useHistory } from "react-router";
import { Link, animateScroll as scroll } from "react-scroll";
import { Box } from "@mui/system";

import Tooltip from "@mui/material/Tooltip";

export const DisplayGobble = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [open, setOpen] = useState(false);

  const [deleteConfirmShow, setDeleteConfirmShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(getPosts());
  }, []);

  const gobbles = useSelector((state) => state.posts);

  const gobble = gobbles.filter(
    (gobbles) => gobbles._id === props.match.params.id
  )[0];

  const handleDelete = (id) => {
    dispatch(deletePost(id));
    history.push("../");
  };

  if (gobbles.length > 0) {
    let totalRating = 0;
    gobble.orders.map((order) => (totalRating = totalRating + order.rating));
    const avgRating = totalRating / gobble.orders.length;

    console.log(avgRating);

    gobble.orders.map((order) => console.log(order));

    const NoSummary = () => {
      const [changeSummary, setChangeSummary] = useState(false);
      const [summary, setSummary] = useState();

      const handleSaveSummary = () => {
        const id = gobble._id;
        gobble.summary = summary;
        dispatch(updatePost(id, gobble));
      };

      return (
        <div>
          <span onClick={() => setChangeSummary(true)}>
            {gobble.orders[0].review}
            <br />
            {!changeSummary && (
              <span style={{ fontSize: "small" }}>(tap to edit summary)</span>
            )}
          </span>

          {changeSummary && (
            <>
              <TextField
                fullWidth
                id="outlined-flexible"
                label="Give this place a top-line summary"
                rows={4}
                sx={{ marginBottom: 2, marginTop: 2 }}
                size="small"
                onInput={(e) => setSummary(e.target.value)}
              />

              <center>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleSaveSummary()}
                >
                  Save Summary
                </Button>{" "}
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => setChangeSummary(false)}
                >
                  Cancel
                </Button>
              </center>
            </>
          )}
        </div>
      );
    };

    const ChangeSummary = () => {
      const [changeSummary, setChangeSummary] = useState(false);
      const [summary, setSummary] = useState();

      const handleSaveSummary = () => {
        const id = gobble._id;
        gobble.summary = summary;
        dispatch(updatePost(id, gobble));
      };

      return (
        <div>
          <span onClick={() => setChangeSummary(true)}>
            {gobble.summary}
            <br />
            {!changeSummary && (
              <span style={{ fontSize: "small" }}>(tap to edit)</span>
            )}
          </span>

          {changeSummary && (
            <>
              <TextField
                fullWidth
                id="outlined-flexible"
                label="Give this place a top-line summary"
                rows={4}
                sx={{ marginBottom: 2, marginTop: 2 }}
                size="small"
                onChange={(e) => setSummary(e.target.value)}
              />

              <center>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleSaveSummary()}
                >
                  Save Summary
                </Button>{" "}
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => setChangeSummary(false)}
                >
                  Cancel
                </Button>
              </center>
            </>
          )}
        </div>
      );
    };

    return (
      <div>
        <div
          style={{
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            zIndex: "4",
          }}
        >
          {gobble && (
            <Card
              style={{
                backgroundColor: "#04b2d9",
                color: "white",
                fontFamily: "Archivo Black",
                fontSize: window.innerWidth > 600 ? 50 : 20,
                marginLeft: window.innerWidth > 900 ? "16%" : "5%",
                border: "5px solid white",
                width: "fit-content",
                maxWidth: window.innerWidth > 600 ? 450 : "50vw",
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
              <Tooltip title={<div style={{fontSize: 20}}>{gobble.restaurant}</div>}>
                <span>{gobble.restaurant}</span>
              </Tooltip>

            </Card>
          )}
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
            <CardContent sx={{ paddingTop: "-10", fontSize: 25, zIndex: "6" }}>
              <div
                style={{
                  float: "right",
                  marginTop: "-25px",
                  marginRight: "-5px",
                  marginBottom: "0px",
                  zIndex: "5",
                }}
              >
                <Button
                  style={{ zIndex: "5" }}
                  variant="contained"
                  size="small"
                  onClick={() => setDeleteConfirmShow(!deleteConfirmShow)}
                >
                  Delete
                </Button>
              </div>

              <center>
                <Rating
                  name="read-only"
                  value={avgRating}
                  readOnly
                  sx={{ marginTop: 5, color: "white", fontSize: 50 }}
                  size="large"
                />

                {gobble.summary ? <ChangeSummary /> : <NoSummary />}

                <br />
                <Link to="addOrder" smooth={true} offset={-70} duration={500}>
                  <Button variant="contained" size="small">
                    Add a new order for this restaurant
                  </Button>
                </Link>
              </center>

              {/*
Delete Gobble Modal
*/}

              <Modal open={deleteConfirmShow}>
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "white",
                    border: "2px solid #000",
                    boxShadow: 24,
                    textWrap: "whitespace",
                    p: 4,
                  }}
                >
                  <>
                    <center>
                      Are you sure you want to delete this Gobble?
                      <br />
                      <br />
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => setDeleteConfirmShow(false)}
                      >
                        Cancel
                      </Button>{" "}
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => handleDelete(gobble._id)}
                      >
                        Yes, delete Gobble
                      </Button>
                    </center>
                  </>
                </Box>
              </Modal>
            </CardContent>
          </Card>
        </div>

        <Orders orders={gobble.orders} />

        <div
          style={{
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            zIndex: "8",
          }}
          id="addOrder"
        >
          <AddOrder gobble={gobble} />
        </div>
      </div>
    );
  } else {
    return <>Loading...</>;
  }
};
