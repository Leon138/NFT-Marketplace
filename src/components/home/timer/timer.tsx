import { useEffect, useState } from 'react';

export const Timer = ({ initialSeconds }: { initialSeconds: number }) => {
  const [seconds, setSeconds] = useState<number>(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) return;

    const timerId = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [seconds]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return {
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      sec: String(secs).padStart(2, '0'),
    };
  };

  const { hours, minutes, sec } = formatTime(seconds);

  return (
    <div className="flex flex-col">
      <div className="">
        <h2 className="font-mono text-xs font-normal">Auction ends in:</h2>
        <div className="flex font-mono text-[38px] font-bold">
          <div>
            {hours}:<p className="font-mono text-xs font-normal">Hours</p>
          </div>
          <div className="mx-2.5">
            {minutes}:<p className="font-mono text-xs font-normal">Minutes</p>
          </div>
          <div>
            {sec}
            <p className="font-mono text-xs font-normal">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};
