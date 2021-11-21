import React, { useState } from "react";
import { Card, Rating, CardContent, Grid, Item, Fab } from "@mui/material";
import { Add } from "@mui/icons-material";

export const Template = ({ head, body, rating, order }) => {
  return (
    <div
      style={{
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        zIndex: "4",
      }}
    >
      {head && (
        <Card
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
          {head}
        </Card>
      )}

      {/*
      <Grid container alignItems="center" spacing={0}>
        <Grid item md={8} sx={{ zIndex: "8" }}>
      */}
      <div sx={{ zIndex: "7" }}>
        <Card
          sx={{
            backgroundColor: "#04b2d9",
            color: "white",
            width: "100%",
            height: "fit-content",
            marginLeft: window.innerWidth > 900 ? "13%" : "-1.5%",
            marginRight: 5,
            marginBottom: 5,
            marginTop: "-40px",
            border: "5px solid white",
            paddingTop: 2,
            maxWidth: "500px",
            zIndex: "7",
          }}
        >
          <CardContent sx={{ paddingTop: 5, fontSize: 25, zIndex: "6" }}>
            <center>
              <Rating
                name="read-only"
                value={rating}
                readOnly
                sx={{ color: "white", fontSize: 50 }}
                size="large"
              />
            </center>

            {!order ? (
              <div className="elipsis-three-line">{body}</div>
            ) : (
              <>{body}</>
            )}

            {order && <hr />}
          </CardContent>
          <CardContent
            sx={{ paddingTop: 0, fontSize: 15, whiteSpace: "pre-wrap" }}
          >
            {order}
          </CardContent>
        </Card>
      </div>
      {/*  </Grid>  */}

      {/*
        <Grid item md={6}>
          <center>
          <Fab
            sx={{
              backgroundColor: "#04b2d9",
              border: "5px solid white",
              color: "white",
              marginBottom: "60px",
              fontSize: 30,
              marginRight: 5,
            }}
            aria-label="add"
          >
            <Add />
          </Fab>

          <Fab
            sx={{
              backgroundColor: "#04b2d9",
              border: "5px solid white",
              color: "white",
              marginBottom: "60px",
              fontSize: 30,
              marginRight: 5,
            }}
            aria-label="add"
          >
            ?
          </Fab>

          <Fab
            sx={{
              backgroundColor: "#04b2d9",
              border: "5px solid white",
              color: "white",
              marginBottom: "60px",
              fontSize: 30,
              marginRight: 5,
            }}
            aria-label="add"
          >
            !
          </Fab>
          </center>
        </Grid>
*/}

      {/*
      </Grid>
      */}
    </div>
  );
};

export const Orders = (props) => {
  console.log(props);

  const rating = "rating";
  const order = "order";
  const body = "body";

  return (
    <div
      style={{
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        zIndex: "8",
      }}
    >
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
        Your orders
      </Card>

      <div sx={{ zIndex: "5" }}>
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
            maxWidth: "500px",
            zIndex: "5",
          }}
        >
          {props.orders.map((order, index) => {
            const date = new Date(order.date)

            console.log(date)
            return (
              <>
                      <p className="order-date">{date.toLocaleDateString()}</p>         

                <CardContent sx={{ paddingTop: 5, fontSize: 25, zIndex: "10" }}>
                  <center>
                    <Rating
                      name="read-only"
                      value={order.rating}
                      readOnly
                      sx={{ color: "white", fontSize: 30 }}
                      size="normal"
                    />
                  </center>

                  {!order ? (
                    <div className="elipsis-three-line">{order.review}</div>
                  ) : (
                    <>{order.review}</>
                  )}

                  {order && <hr style={{width: "50%"}} />}

                </CardContent>
                <CardContent
                  sx={{ paddingTop: 0, fontSize: 15, whiteSpace: "pre-wrap" }}
                >
                  {order.order}
                </CardContent>

                {index < props.orders.length - 1 && <hr /> }
              </>
            );
          })}
        </Card>
      </div>
    </div>
  );
};
