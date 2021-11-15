import React, { useEffect, useState } from "react";
import { AddOrder } from "./AddOrder";
import { Template, Orders } from "./Template";
import { getPosts } from "../actions/posts";
import { useSelector, useDispatch } from "react-redux";
import { updatePost } from "../actions/posts";
import { TextField, Button } from "@mui/material";

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
        <>
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
                sx={{ marginBottom: 2 }}
                size="large"
                onInput={(e) => setSummary(e.target.value)}
              />

<center>
              <Button
                variant="contained"
                size="large"
                onClick={() => handleSaveSummary()}
              >
                Save Summary
              </Button>
              {" "}
              <Button
                variant="contained"
                size="large"
                onClick={() => setChangeSummary(false)}
              >
                Cancel
              </Button>
              </center>
            </>
          )}
        </>
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
        <>
          <span onClick={() => setChangeSummary(true)}>{gobble.summary}
          {" "}
          <span style={{fontSize: "small"}}>
          (tap to edit)
          </span>
          
          </span>

          {changeSummary && (
            <>
              <TextField
                fullWidth
                id="outlined-flexible"
                label="Give this place a top-line summary"
                rows={4}
                sx={{ marginBottom: 2 }}
                size="large"
                onChange={(e) => setSummary(e.target.value)}
              />

<center>
              <Button
                variant="contained"
                size="large"
                onClick={() => handleSaveSummary()}
              >
                Save Summary
              </Button>
              {" "}
              <Button
                variant="contained"
                size="large"
                onClick={() => setChangeSummary(false)}
              >
                Cancel
              </Button>
              </center>
            </>
          )}
        </>
      );
    };

    return (
      <div>
        {gobble && (
          <Template
            body={gobble.summary ? <ChangeSummary /> : <NoSummary />}
            head={gobble.restaurant}
            rating={avgRating}
          />
        )}

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
    >
        <AddOrder gobble={gobble} />
        </div>
        
      </div>
    );
  } else {
    return <>Loading...</>;
  }
};
