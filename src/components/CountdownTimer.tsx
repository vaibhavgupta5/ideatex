'use client'

// components/CountdownTimer.tsx
import { useState, useEffect } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }
  
  const CountdownTimer: React.FC = () => {
    const calculateTimeLeft = (): TimeLeft => {
      const eventDate = new Date("2024-11-23T00:00:00"); // Set the event date
      const currentDate = new Date();
      const difference = eventDate.getTime() - currentDate.getTime();
  
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        return { days, hours, minutes, seconds };
      } else {
        // If the date has passed, return all zeros
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };
  
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  
    useEffect(() => {
      const countdown = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearInterval(countdown);
    }, []);
  

  return (
    <div className="flex items-center h-[50vh] justify-center space-x-12 font-bold text-4xl md:text-6xl">
      <div className="flex flex-row items-center">
        <span className="outlined-text text-[120px]">{timeLeft.days}</span>
        <span className="text-white font-[700] ml-[-20px] text-[42px]">Days</span>
      </div>
      <div className="flex flex-row items-center">
        <span className="outlined-text text-[120px]">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="text-white font-[700] ml-[-20px] text-[42px]">Hours</span>
      </div>
      <div className="flex flex-row items-center">
        <span className="outlined-text text-[120px]">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="text-white font-[700] ml-[-20px] text-[42px]">Minutes</span>
      </div>
      <div className="flex flex-row items-center">
        <span className="outlined-text text-[120px]">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="text-white font-[700] ml-[-20px] text-[42px]">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
