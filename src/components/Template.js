import React, {useState} from "react";
import { Card, Rating, CardContent, Grid, Item, Fab } from "@mui/material";
import {Add} from '@mui/icons-material';

export const Template = ({head, body, rating}) => {
  	


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
          {head}
        </Card>

        <Grid container   alignItems="center">
<Grid item sx={{zIndex: "8"}}>

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

          <center><Rating name="read-only" value={rating} readOnly sx={{color: "white", fontSize: 50}} size="large" /></center>

           {body}
          </CardContent>
        </Card>
</Grid>


<Grid item>


        <Fab sx={{backgroundColor: "#04b2d9", border: "5px solid white", color: "white", marginBottom: "60px", fontSize: 30, marginRight: 5}} aria-label="add">
        <Add />
      </Fab>

      <Fab sx={{backgroundColor: "#04b2d9",  border: "5px solid white", color: "white", marginBottom: "60px", fontSize: 30, marginRight: 5}} aria-label="add">
        ?
      </Fab>

      <Fab sx={{backgroundColor: "#04b2d9",  border: "5px solid white",  color: "white", marginBottom: "60px", fontSize: 30, marginRight: 5}} aria-label="add">
        !
      </Fab>
      </Grid>

      </Grid>

    </div>
  );
};
