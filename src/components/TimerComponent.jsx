import { useState, useEffect, useRef } from "react"

export const TimerComponent = () => {
    // State to hold and display the time
    const [time, setTime] = useState(0)
    // State to toggle between running and paused
    const [isRunning, setIsrunning] = useState(false)
    // Ref to hold the interval instance
    const intervalRef = useRef()


    // useEffect Hook
    useEffect(() => {
        if (isRunning) {
            // Starting the interval when isRunning is true
            intervalRef.current = setInterval(() => {
                setTime((previousTime) => previousTime + 1)
            }, 1000);
        } else {
            clearInterval(intervalRef.current)
        }
        return () => clearInterval(intervalRef.current)
    }, [isRunning])
  return (
  <>
  <h2>Timer: {time} seconds</h2>
  <button onClick={() => setIsrunning(!isRunning)}>
    { isRunning ? 'Pause' : 'Start'}
  </button>
  </>
  )
}
