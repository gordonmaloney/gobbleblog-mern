import React, { Component, useContext } from 'react'
import { ShepherdTour, ShepherdTourContext } from 'react-shepherd'
import './shepherd.css'

const steps = [
    {
      id: 'intro',
      attachTo: { element: '#rating', on: 'bottom' },
      beforeShowPromise: function () {
        return new Promise(function (resolve) {
          setTimeout(function () {
            window.scrollTo(0, 0);
            resolve();
          }, 500);
        });
      },
      buttons: [
        {
          classes: 'shepherd-button-secondary',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary',
          text: 'Back',
          type: 'back'
        },
        {
          classes: 'shepherd-button-primary',
          text: 'Next',
          type: 'next'
        }
      ],
      classes: 'custom-class-name-1 custom-class-name-2',
      highlightClass: 'highlight',
      scrollTo: false,
      cancelIcon: {
        enabled: true,
      },
      title: 'Welcome to React-Shepherd!',
      text: ['React-Shepherd is a JavaScript library for guiding users through your React app.'],
      when: {
        show: () => {
          console.log('show step');
        },
        hide: () => {
          console.log('hide step');
        }
      }
    },
    
    {
        id: '2',
        attachTo: { element: '#micIcon', on: 'bottom' },
        beforeShowPromise: function () {
          return new Promise(function (resolve) {
            setTimeout(function () {
              window.scrollTo(0, 0);
              resolve();
            }, 500);
          });
        },
        buttons: [
          {
            classes: 'shepherd-button-secondary',
            text: 'Exit',
            type: 'cancel'
          },
          {
            classes: 'shepherd-button-primary',
            text: 'Back',
            type: 'back'
          },
          {
            classes: 'shepherd-button-primary',
            text: 'Next',
            type: 'next'
          }
        ],
        classes: 'custom-class-name-1 custom-class-name-2',
        highlightClass: 'highlight',
        scrollTo: false,
        cancelIcon: {
          enabled: true,
        },
        title: 'Welcome to React-Shepherd!',
        text: ['React-Shepherd is a JavaScript library for guiding users through your React app.'],
        when: {
          show: () => {
            console.log('show step');
          },
          hide: () => {
            console.log('hide step');
          }
        }
      },
      
    {
        id: '3',
        attachTo: { element: '#micIcon2', on: 'bottom' },
        beforeShowPromise: function () {
          return new Promise(function (resolve) {
            setTimeout(function () {
              window.scrollTo(0, 0);
              resolve();
            }, 500);
          });
        },
        buttons: [
          {
            classes: 'shepherd-button-secondary',
            text: 'Exit',
            type: 'cancel'
          },
          {
            classes: 'shepherd-button-primary',
            text: 'Back',
            type: 'back'
          },
          {
            classes: 'shepherd-button-primary',
            text: 'Next',
            type: 'next'
          }
        ],
        classes: 'custom-class-name-1 custom-class-name-2',
        highlightClass: 'highlight',
        scrollTo: true,
        cancelIcon: {
          enabled: true,
        },
        title: 'Welcome to React-Shepherd!',
        text: ['React-Shepherd is a JavaScript library for guiding users through your React app.'],
        when: {
          show: () => {
            console.log('show step');
          },
          hide: () => {
            console.log('hide step');
          }
        }
      },
      
    {
        id: '3',
        attachTo: { element: '#sendToMobile', on: 'bottom' },
        beforeShowPromise: function () {
          return new Promise(function (resolve) {
            setTimeout(function () {
              window.scrollTo(0, 0);
              resolve();
            }, 500);
          });
        },
        buttons: [
          {
            classes: 'shepherd-button-secondary',
            text: 'Exit',
            type: 'cancel'
          },
          {
            classes: 'shepherd-button-primary',
            text: 'Back',
            type: 'back'
          },
          {
            classes: 'shepherd-button-primary',
            text: 'Next',
            type: 'next'
          }
        ],
        classes: 'custom-class-name-1 custom-class-name-2',
        highlightClass: 'highlight',
        scrollTo: true,
        cancelIcon: {
          enabled: true,
        },
        title: 'Welcome to React-Shepherd!',
        text: ['React-Shepherd is a JavaScript library for guiding users through your React app.'],
        when: {
          show: () => {
            console.log('show step');
          },
          hide: () => {
            console.log('hide step');
          }
        }
      },
  ];
  

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
        <ShepherdTour steps={steps} tourOptions={tourOptions}>
          <Button />
        </ShepherdTour>
      </div>
    );
}
