import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import {
  Card,
  Rating,
  CardContent,
  Grid,
  Fab,
  AppBar,
  Toolbar,
} from "@mui/material";

import { Menubar } from "./Menubar";
import { Template } from "./Template";
import { Review } from "./Review";

//import { App } from "./OCR";

import { MobileScan } from "./MobileScan/MobileScan";
import { MobileScreen } from "./MobileScan/MobileScreen";
import { AllGobbles } from "./AllGobbles";
import { DisplayGobble } from "./DisplayGobble";

export const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <div
          style={{
            position: "sticky",
            top: 0,
            color: "white",
            marginBottom: "-100px",
            zIndex: "5",
            pointerEvents: "none"

            //zIndex: window.innerWidth > 900 ? "5" : "15"
          }}
        >
          <Menubar />
        </div>

        <Switch>
          <Route exact path="/">
            <AllGobbles />
          </Route>

          <Route path="/review" component={Review} />
         {/* <Route path="/ocr" component={App} /> */}

          <Route path="/gobble/:id" component={DisplayGobble} />

          <Route path="/mobile" component={MobileScan} />
          <Route path="/mobilescreen" component={MobileScreen} />

        </Switch>
      </BrowserRouter>
    </div>
  );
};
