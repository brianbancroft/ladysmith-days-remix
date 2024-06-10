import { useEffect, useState } from 'react'

// a visual timer countdown clock that counts down to 4:30pm august 4 2024
function TimerClock() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [loading, setLoading] = useState(true)

  //   calculate initial time, and create a function that will update the time remaining every second
  useEffect(() => {
    const countdownDate = new Date('August 2, 2024 16:30:00').getTime()

    setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeRemaining({ days, hours, minutes, seconds })
      setLoading(false)
    })
  }, [])

  const timeAvailable =
    timeRemaining.days +
    timeRemaining.hours +
    timeRemaining.minutes +
    timeRemaining.seconds

  function InternalContent() {
    if (loading) {
      return <></>
    }

    return timeAvailable <= 0 ? (
      <div className="flex flex-col items-center justify-center bg-blue-600 p-4 uppercase text-white ">
        <h1 className="neon-text text-3xl font-thin tracking-widest">
          Ladysmith Days is Here
        </h1>
      </div>
    ) : (
      <div className="mx-auto grid grid-cols-4 grid-rows-2 justify-items-center gap-x-4 font-bold uppercase text-white">
        <div className="">{timeRemaining.days}</div>
        <div className="row-start-2">days</div>
        <div>{timeRemaining.hours}</div>
        <div className="row-start-2">hours</div>
        <div>{timeRemaining.minutes}</div>
        <div className="row-start-2">minutes</div>
        <div>{timeRemaining.seconds}</div>
        <div className="row-start-2">seconds</div>
      </div>
    )
  }

  return (
    <aside className="h-[80px] w-[392px] rounded bg-slate-700/80 p-4 ">
      <InternalContent />
    </aside>
  )
}

export default TimerClock
