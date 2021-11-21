import React, { Component, useContext } from 'react'
import { ShepherdTour, ShepherdTourContext } from 'react-shepherd'
import './shepherd.css'
import {STEPS} from './steps'
import Button from "@mui/material/Button";

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

  return (
    <center>
      <Button sx={{marginBottom: 0, float: "right"}} className="button dark" size="small" onClick={tour.start}>
        <HelpIcon />
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
