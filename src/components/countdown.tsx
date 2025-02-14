// countdown.tsx
import { useState, useEffect } from "react";

function Countdown({ targetDate }: { targetDate: string }) {
  const [timeRemaining, setTimeRemaining] = useState(
    getTimeRemaining(targetDate),
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [targetDate]);

  function getTimeRemaining(target: string) {
    const totalSeconds = Math.max(
      0,
      Math.floor((new Date(target).getTime() - new Date().getTime()) / 1000),
    );
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return {
      total: totalSeconds,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const { days, hours, minutes, seconds } = timeRemaining;

  if (timeRemaining.total <= 0) {
    return <div>Countdown expired!</div>;
  }

  return (
    <div className="flex space-x-4 font-eaves text-blue-950 mt-4 bg-[#9F8B48] p-4 text-5xl rounded-2xl text-center">
      <div className="flex flex-col">
        <span className="block text-7xl">{days}</span>
        <span className="block text-lg">Days</span>
      </div>
      <div className="flex flex-col">
        <span className="block text-7xl ">{hours}</span>
        <span className="block text-lg">Hours</span>
      </div>
      <div className="flex flex-col">
        <span className="block text-7xl ">{minutes}</span>
        <span className="block text-lg">Min</span>
      </div>
      <div className="flex flex-col">
        <span className="block text-7xl ">{seconds}</span>
        <span className="block text-lg">Sec</span>
      </div>
    </div>
  );
}

export default Countdown;
