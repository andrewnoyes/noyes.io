import { useEffect, useState } from 'react';

interface EventWithTimestamp {
  event: 'started' | 'stopped';
  timestamp: Date;
}

const elapsedSecondsForEvents = (events: EventWithTimestamp[]) => {
  let seconds = 0;

  for (let i = 0; i < events.length; i += 2) {
    const started = events[i];
    const stopped = events[i + 1];

    seconds += elapsedSeconds(started.timestamp, stopped?.timestamp);
  }

  return seconds;
};

const elapsedSeconds = (start?: Date, end?: Date) => {
  if (!start) {
    return 0;
  }

  const startedMs = new Date(start).getTime();
  const endedMs = (end ? new Date(end) : new Date()).getTime();

  const diffMs = endedMs - startedMs;
  const diffSecs = Math.floor(diffMs / 1000);

  return diffSecs;
};

export const useCountupTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [events, setEvents] = useState<EventWithTimestamp[]>([]);

  const lastEventEquals = (event: 'started' | 'stopped') => {
    return events[events.length - 1]?.event === event;
  };

  const started = lastEventEquals('started');

  const start = () => {
    if (!started) {
      setEvents((e) => [...e, { event: 'started', timestamp: new Date() }]);
    }
  };

  const stop = () => {
    if (started) {
      setEvents((e) => [...e, { event: 'stopped', timestamp: new Date() }]);
    }
  };

  const toggleStarted = () => {
    if (started) {
      stop();
    } else {
      start();
    }
  };

  const resetAll = () => {
    setSeconds(0);
    setEvents([]);
  };

  useEffect(() => {
    if (!started) {
      return;
    }

    const intervalId = setInterval(() => {
      setSeconds(elapsedSecondsForEvents(events));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [events, started]);

  return {
    started,
    start,
    pause: stop,
    toggleStarted,
    seconds,
    resetAll,
  };
};
