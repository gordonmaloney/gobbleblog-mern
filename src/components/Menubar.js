import React, { useState, useEffect } from "react";
import { Fab, AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Review } from "./Review";
import { Login } from "./Login";

export const Menubar = (props) => {
  const [scroll, setScroll] = useState(0);

  window.onscroll = function () {
    setScroll(document.documentElement.scrollTop);
  };


  useEffect(() => {
    console.log(window.document.body.offsetHeight)
}, [])


  const [scrollShow, setScrollShow] = useState(true);

  const [barOpacity, setBarOpacity] = useState(1);
  const [fabOpacity, setFabOpacity] = useState(4);

  const [fabMarg, setFabMarg] = useState(0);
  const [fabMarg2, setFabMarg2] = useState(0);

  useEffect(() => {
    scroll > 150 && setScrollShow(false);
    scroll < 150 && setScrollShow(true);

    setBarOpacity(1.6 - scroll / 200);
    setFabOpacity(-0.8 + scroll / 200);

    scroll < 500 && setFabMarg(scroll / 5);
    scroll < 700 && setFabMarg2(scroll / 7);

    fabMarg > 100 || (scroll > 500 && setFabMarg(100));
    fabMarg2 > 100 || (scroll > 700 && setFabMarg2(100));
  }, [scroll]);

  return (
    <div>
      <>
        <AppBar
          position="static"
          sx={{
            zIndex: 40,
            paddingLeft: "5%",
            borderBottom: "3px solid #0d0d0d",
            opacity: barOpacity,
            backgroundColor: "#04b2d9",
            paddingTop: 0,
            paddingBottom: 0,
            fontSize: 20,
            fontFamily: "Archivo Black",
          }}
        >
          <Toolbar>
            <Link to={"/"}>
              <h1 style={{ opacity: barOpacity - 0.3 }}>Gobbleblog</h1>
            </Link>

            <Link to={"./review"} style={{marginLeft: "auto"}}>
              <Fab
                sx={{
                  backgroundColor: "#04b2d9",
                  border: "5px solid white",
                  color: "white",
                  marginLeft: "auto",
                  marginRight: "10%",
                  fontSize: 30,
                  marginRight: 5,
                  fontFamily: "Archivo Black",
                }}
                aria-label="add"
              >
                +
              </Fab>
            </Link>

            <Login />
            
          </Toolbar>
        </AppBar>
      </>

      <div
        style={{
          position: "sticky",
          top: 0,
          color: "white",
          opacity: fabOpacity,
          zIndex: "50",
        }}
      >
        <Link to={"/"}>
          <Fab
            sx={{
              backgroundColor: "#04b2d9",
              border: "5px solid white",
              color: "white",
              marginLeft: `${fabMarg - 40}px`,
              marginTop: "-10px",
              fontSize: 30,
              marginRight: 5,
              fontFamily: "Archivo Black",
              transform: "scale(2)",
            }}
            aria-label="add"
          >
            G
          </Fab>
        </Link>
        <br />

        <Link to={"./review"}>
          <Fab
            sx={{
              backgroundColor: "#04b2d9",
              border: "5px solid white",
              color: "white",
              marginLeft: `${fabMarg2 - 40}px`,
              marginTop: "50px",
              fontSize: 30,
              marginRight: 5,
              fontFamily: "Archivo Black",
              opacity: fabOpacity - 0.6,
            }}
            aria-label="add"
          >
            +
          </Fab>
        </Link>
      </div>
    </div>
  );
};
