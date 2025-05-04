import { useEffect, useState } from 'react';

export const useCountupTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [started, setStarted] = useState(false);

  const toggleStarted = () => setStarted(!started);

  const resetAll = () => {
    setStarted(false);
    setSeconds(0);
  };

  useEffect(() => {
    const intervalId = started
      ? setInterval(() => {
          setSeconds(seconds + 1);
        }, 1000)
      : null;

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [started, seconds]);

  return { started, setStarted, toggleStarted, seconds, resetAll };
};
