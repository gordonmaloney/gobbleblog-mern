import React, {useState, useEffect} from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { Card, Rating, CardContent, Grid, Fab, AppBar, Toolbar } from "@mui/material";

import { Menubar } from "./Menubar";
import { Template } from "./Template";
import { Review } from "./Review";

export const Main = () => {



  return (
    <div>
          <div style={{ position: "sticky", top: 0, color: "white", marginBottom: "-100px" }}>
      <Menubar />
</div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Template
              body={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
              head={"place 1"}
              rating={3}
            />

            <Template
              body={"Duis aute irure dolor in reprehenderit"}
              head={"place 2"}
              rating={5}
            />

            <Template
              body={
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              }
              head={"place with a really long name"}
              rating={1}
            />

            <Template
              body={"Duis aute irure dolor in reprehenderit"}
              head={"place 2"}
              rating={5}
            />

<Template
              body={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
              head={"place 1"}
              rating={3}
            />

            <Template
              body={"Duis aute irure dolor in reprehenderit"}
              head={"place 2"}
              rating={5}
            />

          </Route>

          <Route path="/review" component={Review} />

        </Switch>
      </BrowserRouter>
    </div>
  );
};
