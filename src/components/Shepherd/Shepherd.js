import React, { Component, useContext } from 'react'
import { ShepherdTour, ShepherdTourContext } from 'react-shepherd'
import './shepherd.css'
import {STEPS} from './steps'
import Button from "@mui/material/Button";


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
    <Button variant="contained" className="button dark" onClick={tour.start}>
      Take a Tour
    </Button>
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
