import React, { useEffect, useRef, useState } from "react";
import "./timer.css";

const Timer: React.FC = () => {
  const intervalRef: any = useRef(null);
  const [timer, setTimer] = useState("00:00");

  function getTimeRemaining(endtime: any) {
    const d: any = new Date();
    const total = Date.parse(endtime) - Date.parse(d);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return {
      total,
      minutes,
      seconds,
    };
  }

  function startTimer(deadline: any) {
    let { total, minutes, seconds } = getTimeRemaining(deadline);
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    } else {
      clearInterval(intervalRef.current);
    }
  }

  function clearTimer(endtime: any) {
    setTimer("01:30");
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    const id = setInterval(() => {
      startTimer(endtime);
    }, 1000);
    intervalRef.current = id;
  }

  function getDeadlineTime() {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 90);
    return deadline;
  }

  useEffect(() => {
    clearTimer(getDeadlineTime());
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="timer-container shadow">
      <div className="timer">{timer}</div>
    </div>
  );
};

export default Timer;
