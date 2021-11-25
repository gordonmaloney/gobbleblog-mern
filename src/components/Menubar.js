import React, { useState, useEffect } from "react";
import { Fab, AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Review } from "./Review";
import { Login } from "./Login";
import { useLocation } from "react-router";
import AddIcon from "@mui/icons-material/Add";
import logo from "./logo.png";
import Tooltip from "@mui/material/Tooltip";

export const Menubar = (props) => {
  const location = useLocation();
  const [scroll, setScroll] = useState(0);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
    console.log(user);
  }, [location]);

  window.onscroll = function () {
    setScroll(document.documentElement.scrollTop);
  };

  useEffect(() => {
    console.log("height: ", window.document.body.offsetHeight);
  }, [scroll, location]);

  const cutoffHeight = 1100;

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

    scroll < 500 && setFabMarg(scroll / 3);
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
            paddingLeft: "5%",
            borderBottom: "3px solid #0d0d0d",
            opacity:
              window.innerWidth > 900 &&
              window.document.body.offsetHeight > cutoffHeight
                ? barOpacity
                : 1,
            backgroundColor: "#04b2d9",
            paddingTop: 0,
            paddingBottom: 0,
            fontSize: window.innerWidth > 500 ? 20 : 12,
            fontFamily: "Archivo Black",
          }}
        >
          <Toolbar>
            <Link to={"../"}>
              <h1
                style={{
                  pointerEvents:
                    window.innerWidth < 900
                      ? "auto"
                      : barOpacity > 0.1
                      ? "auto"
                      : "none",
                  opacity:
                    window.innerWidth > 900 &&
                    window.document.body.offsetHeight > cutoffHeight
                      ? barOpacity - 0.3
                      : 1,
                }}
              >
                <Fab
                  sx={{
                    pointerEvents:
                      window.innerWidth < 900
                        ? "auto"
                        : barOpacity > 0.1
                        ? "auto"
                        : "none",
                    backgroundColor: "#04b2d9",
                    border: "5px solid white",
                    color: "white",
                    marginLeft: window.innerWidth > 500 ? "auto" : 1,
                    marginRight: "10%",
                    fontSize: 30,
                    marginRight: window.innerWidth > 500 ? 5 : 1,
                    fontFamily: "Archivo Black",
                  }}
                  aria-label="add"
                >
                  <img src={logo} style={{ height: "60px" }} />
                </Fab>{" "}
                <span
                  style={{
                    display: window.innerWidth < 700 ? "none" : "inline",
                  }}
                >
                  Gobbleblog
                </span>
              </h1>
            </Link>

            {user && (
              <div style={{ float: "right", marginLeft: "auto" }}>
                <Link to={"../review"} style={{ marginLeft: "auto" }}>
                  <Tooltip arrow title="Add a new review">
                  <Fab
                    sx={{
                      pointerEvents:
                        window.innerWidth < 900
                          ? "auto"
                          : barOpacity > 0.1
                          ? "auto"
                          : "none",
                      backgroundColor: "#04b2d9",
                      border: "5px solid white",
                      color: "white",
                      marginLeft: window.innerWidth > 500 ? "auto" : 1,
                      marginRight: "10%",
                      fontSize: 30,
                      marginRight: window.innerWidth > 500 ? 5 : 1,
                      fontFamily: "Archivo Black",
                    }}
                    aria-label="add"
                  >
                    <AddIcon />
                  </Fab>
                  </Tooltip>
                </Link>
              </div>
            )}

            <br />
            {user && (
              <div
                style={{
                  pointerEvents:
                    window.innerWidth < 900
                      ? "auto"
                      : barOpacity > 0.1
                      ? "auto"
                      : "none",
                }}
              >
                <Login />
              </div>
            )}
          </Toolbar>
        </AppBar>
      </>

      <div
        style={{
          position: "sticky",
          top: 0,
          color: "white",
          width: "200px",
          opacity:
            window.innerWidth > 900 &&
            window.document.body.offsetHeight > cutoffHeight
              ? fabOpacity
              : 0,
          zIndex: "1",
          pointerEvents: "none",
        }}
      >
        <Link to={"../"} onClick={() => window.scrollTo(0, 0)}>
          <Fab
            style={{ pointerEvents: "auto" }}
            sx={{
              backgroundColor: "#04b2d9",
              border: "5px solid white",
              color: "white",
              marginLeft:
                window.innerWidth > 900 &&
                window.document.body.offsetHeight > cutoffHeight
                  ? `${fabMarg - 100}px`
                  : "-150px",
              marginTop: "-10px",
              fontSize: 30,
              marginRight: 5,
              fontFamily: "Archivo Black",
              transform: "scale(2)",
            }}
            aria-label="add"
          >
            <img src={logo} style={{ height: "50px" }} />
          </Fab>
        </Link>
        <br />

        <Link to={"../review"}>
          <Fab
            style={{ pointerEvents: "auto" }}
            sx={{
              backgroundColor: "#04b2d9",
              border: "5px solid white",
              color: "white",
              marginLeft:
                window.innerWidth > 900 &&
                window.document.body.offsetHeight > cutoffHeight
                  ? `${fabMarg - 100}px`
                  : "-150px",
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
