import React, { Component, useContext } from 'react'
import { ShepherdTour, ShepherdTourContext } from 'react-shepherd'
import './shepherd.css'
import {STEPS} from './steps'
  

const tourOptions = {
  defaultStepOptions: {
    cancelIcon: {
      enabled: true
    }
  },
  useModalOverlay: true
};

function Button() {
  const tour = useContext(ShepherdTourContext);

  return (
    <button className="button dark" onClick={tour.start}>
      Take a Tour
    </button>
  );
}

export const Shepherd = () => {
    return (
      <div>
        <ShepherdTour steps={STEPS} tourOptions={tourOptions}>
          <Button />
        </ShepherdTour>
      </div>
    );
}
