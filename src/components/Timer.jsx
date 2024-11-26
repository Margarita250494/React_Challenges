
import { useRef, useState } from "react";

const Timer = () => {
    const intervalId = useRef(null);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalId.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };
  const stop = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalId.current); //stop Interval
    }
  };
  const reset = () => {
    stop();
    setTime(0);
  };
  return (
    <section className="challenge ">
          <h2>Timer</h2>
          <div className="horizont center">
            <p>{Math.floor(time / 60)} min</p> {/*sec to min */}
            <p>{time % 60} sec</p>
          </div>
          <div className="horizont">
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
          </div>
        </section>
  )
}

export default Timer