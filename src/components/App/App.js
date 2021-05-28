import React, { useState } from "react";
import Button from "../Button/Button";
import Display from "../Display/Display";

function App() {
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });
  const [flag, setFlag] = useState(false);
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    if (!flag) {
      runTime();
      setStatus(1);
      setInterval(runTime, 1000);
      setFlag(true);
    }
    // if (flag) {
    //   stop();
    //   setStatus(2);
    //   setFlag(false);
    // }
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ seconds: 0, minutes: 0, hours: 0 });
  };

  const resume = () => start();

  let updS = time.seconds,
    updM = time.minutes,
    updH = time.hours;

  const runTime = () => {
    if (updM === 60) {
      updH++;
      updM = 0;
    }
    if (updS === 60) {
      updM++;
      updS = 0;
    }
    updS++;
    return setTime({ seconds: updS, minutes: updM, hours: updH });
  };

  return (
    <div>
      <h2>Clock</h2>
      <Display time={time} />
      <div>
        <Button start={start} status={status} stop={stop} reset={reset} />
      </div>
    </div>
  );
}

export default App;
