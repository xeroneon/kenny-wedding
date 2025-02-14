import { useState, useEffect } from "react";

function Countdown({ targetDate }: { targetDate: string }) {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [targetDate]);

  function getTimeRemaining(target: string) {
    const totalSeconds = Math.max(
      0,
      Math.floor((new Date(target).getTime() - new Date().getTime()) / 1000)
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

  // Helper function to always show two digits
  function formatNumber(num: number): string {
    return num.toString().padStart(2, "0");
  }

  const { days, hours, minutes, seconds } = timeRemaining;

  if (timeRemaining.total <= 0) {
    return <div>Countdown expired!</div>;
  }

  return (
    <div className="flex gap-4 font-mono text-sky-950 bg-[#9F8B48] py-4 min-w-96 rounded-2xl text-center justify-center">
      <div className="flex flex-col">
        <span className="block text-5xl">{formatNumber(days)}</span>
        <span className="block text-lg">Days</span>
      </div>
      <div className="flex flex-col">
        <span className="block text-5xl">{formatNumber(hours)}</span>
        <span className="block text-lg">Hours</span>
      </div>
      <div className="flex flex-col">
        <span className="block text-5xl">{formatNumber(minutes)}</span>
        <span className="block text-lg">Min</span>
      </div>
      <div className="flex flex-col text-sky-800">
        <span className="block text-5xl">{formatNumber(seconds)}</span>
        <span className="block text-lg">Sec</span>
      </div>
    </div>
  );
}

export default Countdown;