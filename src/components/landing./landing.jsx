import React, { useState, useEffect } from 'react';
import './landing.css';
// import logo from "./../../assets/Sporton-Logo.png";

function Countdown() {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-09-29T00:00:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="timer-segment">
        <div className="time-number">{timeLeft[interval]}</div>
        <div className="time-label">{interval}</div>
      </div>
    );
  });

  return (
    <div className="container">
      <h1>DOUBLE STANDARDS</h1>
      <div className="title">LAUNCHING SOON</div>
      <div className="timer">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
      <p className="subtitle">Get ready to fuel your active lifestyle</p>
    </div>
  );
}

export default Countdown;
