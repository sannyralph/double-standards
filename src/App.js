import React from 'react';
import Countdown from "./components/landing./landing"
import AboutUs from './components/about/about';
import EmailSubscription from './components/emailsub/emailsub';


function App() {
  return (
    <>
     <Countdown />
     <EmailSubscription />
     <AboutUs />
    </>
  );
}

export default App;
