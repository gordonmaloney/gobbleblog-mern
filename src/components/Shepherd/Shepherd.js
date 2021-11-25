import React, { Component, useContext, useState, useEffect } from 'react'
import { ShepherdTour, ShepherdTourContext } from 'react-shepherd'
import './shepherd.css'
import {STEPS} from './steps'
import Button from "@mui/material/Button";
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';

import HelpIcon from '@mui/icons-material/Help';

const tourOptions = {
  defaultStepOptions: {
    cancelIcon: {
      enabled: true
    }
  },
  useModalOverlay: true
};

function TourBtn() {
  const tour = useContext(ShepherdTourContext);
  const [open, setOpen] = useState(false)


  useEffect(() => {

    setTimeout(() => {
      setOpen(true)
    }, 2000)

    setTimeout(() => {
      setOpen(false)
    }, 8000)

  }, [])

  return (
    <center>
      <Button sx={{marginBottom: 0, float: "right"}} className="button dark" size="small" onClick={tour.start}>
      
      <Tooltip arrow TransitionComponent={Fade}
        TransitionProps={{ timeout: 2000 }} open={open} title="Lost? Click here for a tour">
                <Tooltip arrow title="Lost? Click here for a tour">
        <HelpIcon />
      </Tooltip></Tooltip>

      </Button>
    </center>
  );
} 

export const Shepherd = () => {
    return (
      <div>
        <ShepherdTour steps={STEPS} tourOptions={tourOptions}>
          <TourBtn />
        </ShepherdTour>
      </div>
    );
}
