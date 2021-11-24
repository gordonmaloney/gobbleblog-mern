export const STEPS = [
    {
      id: 'intro',
      attachTo: { element: '#rating', on: 'bottom' },
      beforeShowPromise: function () { return new Promise(function (resolve) { setTimeout(function () { window.scrollTo(0, 0); resolve(); }, 500); }); },
      buttons: [ { classes: 'shepherd-button-secondary', text: 'Exit', type: 'cancel' }, { classes: 'shepherd-button-primary', text: 'Back', type: 'back' }, { classes: 'shepherd-button-primary', text: 'Next', type: 'next' } ], classes: 'custom-class-name-1 custom-class-name-2', highlightClass: 'highlight', scrollTo: true, cancelIcon: { enabled: true, },
      title: 'Welcome to Gobbleblog!!',
      text: ['Give your meal a rating out of 5 stars here.'],
      when: { show: () => { console.log('show step'); }, hide: () => { console.log('hide step'); } }
    },
    
    {
        id: '1',
        attachTo: { element: '#micIcon', on: 'bottom' },
        beforeShowPromise: function () { return new Promise(function (resolve) { setTimeout(function () { window.scrollTo(0, 0); resolve(); }, 500); }); },
        buttons: [ { classes: 'shepherd-button-secondary', text: 'Exit', type: 'cancel' }, { classes: 'shepherd-button-primary', text: 'Back', type: 'back' }, { classes: 'shepherd-button-primary', text: 'Next', type: 'next' } ], classes: 'custom-class-name-1 custom-class-name-2', highlightClass: 'highlight', scrollTo: true, cancelIcon: { enabled: true, },
        title: 'How was it?',
        text: ['If your fingers are sticky, you can tap this button to record your review as a voicenote.'],
        when: { show: () => { console.log('show step'); }, hide: () => { console.log('hide step'); } }
      },

      {
        id: '2',
        attachTo: { element: '#micIcon2', on: 'bottom' },
        beforeShowPromise: function () { return new Promise(function (resolve) { setTimeout(function () { window.scrollTo(0, 0); resolve(); }, 500); }); },
        buttons: [ { classes: 'shepherd-button-secondary', text: 'Exit', type: 'cancel' }, { classes: 'shepherd-button-primary', text: 'Back', type: 'back' }, { classes: 'shepherd-button-primary', text: 'Next', type: 'next' } ], classes: 'custom-class-name-1 custom-class-name-2', highlightClass: 'highlight', scrollTo: true, cancelIcon: { enabled: true, },
        title: 'What did you get?',
        text: ['You can record your order with this button.'],
        when: { show: () => { console.log('show step'); }, hide: () => { console.log('hide step'); } }
      },

      {
        id: '3',
        attachTo: { element: '#sendToMobile', on: 'bottom' },
        beforeShowPromise: function () { return new Promise(function (resolve) { setTimeout(function () { window.scrollTo(0, 0); resolve(); }, 500); }); },
        buttons: [ { classes: 'shepherd-button-secondary', text: 'Exit', type: 'cancel' }, { classes: 'shepherd-button-primary', text: 'Back', type: 'back' }, { classes: 'shepherd-button-primary', text: 'Next', type: 'next' } ], classes: 'custom-class-name-1 custom-class-name-2', highlightClass: 'highlight', scrollTo: true, cancelIcon: { enabled: true, },
        title: 'What did you get?',
        text: ["Tap here to scan in your receipt."],
        when: { show: () => { console.log('show step'); }, hide: () => { console.log('hide step'); } }
      },

      {
        id: '4',
        attachTo: { element: '#sendToMobile', on: 'bottom' },
        beforeShowPromise: function () { return new Promise(function (resolve) { setTimeout(function () { window.scrollTo(0, 0); resolve(); }, 100); }); },
        buttons: [ { classes: 'shepherd-button-secondary', text: 'Exit', type: 'cancel' }, { classes: 'shepherd-button-primary', text: 'Back', type: 'back' }, { classes: 'shepherd-button-primary', text: 'Next', type: 'next' } ], classes: 'custom-class-name-1 custom-class-name-2', highlightClass: 'highlight', scrollTo: true, cancelIcon: { enabled: true, },
        title: 'What did you get?',
        text: ["It'll open a QR code that you can scan with your phone, and then upload the picture from your mobile's camera."],
        when: { show: () => { console.log('show step'); }, hide: () => { console.log('hide step'); } }
      },

      {
        id: '5',
        attachTo: { element: '#uploadFile', on: 'bottom' },
        beforeShowPromise: function () { return new Promise(function (resolve) { setTimeout(function () { window.scrollTo(0, 0); resolve(); }, 500); }); },
        buttons: [ { classes: 'shepherd-button-secondary', text: 'Exit', type: 'cancel' }, { classes: 'shepherd-button-primary', text: 'Back', type: 'back' }, { classes: 'shepherd-button-primary', text: 'Next', type: 'next' } ], classes: 'custom-class-name-1 custom-class-name-2', highlightClass: 'highlight', scrollTo: true, cancelIcon: { enabled: true, },
        title: 'What did you get?',
        text: ["Or, if you've got a screenshot or pic of the receipt on this device, click here to upload it directly."],
        when: { show: () => { console.log('show step'); }, hide: () => { console.log('hide step'); } }
      },

      {
        id: '6',
        attachTo: { element: '#submitBtn', on: 'bottom' },
        beforeShowPromise: function () { return new Promise(function (resolve) { setTimeout(function () { window.scrollTo(0, 0); resolve(); }, 500); }); },
        buttons: [ { classes: 'shepherd-button-secondary', text: 'Exit', type: 'cancel' }, { classes: 'shepherd-button-primary', text: 'Back', type: 'back' }, { classes: 'shepherd-button-primary', text: 'Finish', type: 'next' } ], classes: 'custom-class-name-1 custom-class-name-2', highlightClass: 'highlight', scrollTo: true, cancelIcon: { enabled: true, },
        title: 'Ready to submit?',
        text: ["And when you're done, just click here to submit."],
        when: { show: () => { console.log('show step'); }, hide: () => { console.log('hide step'); } }
      },
  ];