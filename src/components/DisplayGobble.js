import React, { useEffect, useState } from "react";
import { AddOrder } from "./AddOrder";
import { Template, Orders } from "./Template";
import { getPosts } from "../actions/posts";
import { useSelector, useDispatch } from "react-redux";
import { updatePost } from "../actions/posts";
import { TextField, Button } from "@mui/material";
import { Card, CardContent, Rating } from "@mui/material";

import { Link, animateScroll as scroll } from "react-scroll";

export const DisplayGobble = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(getPosts());
  }, []);

  const gobbles = useSelector((state) => state.posts);

  const gobble = gobbles.filter(
    (gobbles) => gobbles._id === props.match.params.id
  )[0];

  console.log("gobbles, ", gobbles);

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
            Tap to give this place a top-line summary
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
          {gobble.restaurant}
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
          <CardContent sx={{ paddingTop: 5, fontSize: 25, zIndex: "6" }}>
            <center>
            <Rating
                name="read-only"
                value={avgRating}
                readOnly
                sx={{ color: "white", fontSize: 50 }}
                size="large"
              />

{gobble.summary ? <ChangeSummary /> : <NoSummary />}

<br />
        <Link to="addOrder" smooth={true} offset={-70} duration={500}>
          <Button

            variant="contained"
            size="small">Add a new order for this restaurant</Button>
        </Link>

        </center>
        </CardContent>
        </Card>
        </div>

        <Orders orders={gobble.orders} />

        {/*
            {gobble.orders.map(order => 
                <Template
                    body={order.review}
                    rating={order.rating}
                    order={order.order}
                />
                
                )}
                */}

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
