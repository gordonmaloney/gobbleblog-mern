import React, {useState} from "react";
import { Card, Rating, CardContent, Grid, Item, Fab } from "@mui/material";
import {Add} from '@mui/icons-material';

export const Review = () => {
  	


  return (
    <div style={{marginLeft: "10%"}}>


        <Card
          style={{
            backgroundColor: "#04b2d9",
            color: "white",
            fontFamily: "Archivo Black",
            fontSize: 50,
            marginLeft: 225,
            border: "5px solid white",
            width: "fit-content",
            maxWidth: 450,
            lineHeight: 1,
            zIndex: "10",
            marginTop: "1%",
            paddingLeft: 15,
            paddingBottom: 10,
            paddingRight: 15,
            position: "relative",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"

          }}>
          Dasfgbfd
        </Card>


        <Card
          sx={{
            backgroundColor: "#04b2d9",
            color: "white",
            width: 600,
            height: "fit-content",
            marginLeft: 20,
            marginRight: 5,
            marginBottom: 5,
            marginTop: "-40px",
            border: "5px solid white",
            paddingTop: 2
          }}
>
        
          <CardContent sx={{ paddingTop: 5, fontSize: 25 }}>

          <center><Rating name="read-only" value={3} readOnly sx={{color: "white", fontSize: 50}} size="large" /></center>

           rhejhaa, egethrewasg, werfgehetg, efgerherg, wafggdg, eghhrh
          </CardContent>
        </Card>
        

    </div>
  );
};
