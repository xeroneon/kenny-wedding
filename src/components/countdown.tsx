// countdown.tsx
import { useState, useEffect } from "react"

function Countdown({ targetDate }: { targetDate: string }) {
  const [timeRemaining, setTimeRemaining] = useState(
    getTimeRemaining(targetDate)
  )

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining(targetDate))
    }, 1000)
    return () => clearInterval(intervalId)
  }, [targetDate])

  function getTimeRemaining(target: string) {
    const totalSeconds = Math.max(
      0,
      Math.floor((new Date(target).getTime() - new Date().getTime()) / 1000)
    )
    const days = Math.floor(totalSeconds / (60 * 60 * 24))
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60))
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60)
    const seconds = Math.floor(totalSeconds % 60)

    return {
      total: totalSeconds,
      days,
      hours,
      minutes,
      seconds,
    }
  }

  const { days, hours, minutes, seconds } = timeRemaining

  if (timeRemaining.total <= 0) {
    return <div>Countdown expired!</div>
  }

  return (
    <div className="flex space-x-4 font-mrsEaves text-center">
      <div className="flex flex-col">
        <span className="block text-3xl font-bold">{days}</span>
        <span className="block text-xs">Days</span>
      </div>
      <div className="flex flex-col">
        <span className="block text-3xl font-bold">{hours}</span>
        <span className="block text-xs">Hours</span>
      </div>
      <div className="flex flex-col">
        <span className="block text-3xl font-bold">{minutes}</span>
        <span className="block text-xs">Min</span>
      </div>
      <div className="flex flex-col">
        <span className="block text-3xl font-bold">{seconds}</span>
        <span className="block text-xs">Sec</span>
      </div>
    </div>
  )
}

export default Countdown
