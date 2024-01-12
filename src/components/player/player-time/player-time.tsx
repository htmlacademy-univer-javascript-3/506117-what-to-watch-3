import { useEffect, useState } from 'react';
import { secondsToTimeFormat } from '../../../services/component-services/player';

type PlayerTimeProps = {
    videoRef?: React.MutableRefObject<HTMLVideoElement | null>;
}

export default function PlayerTime({ videoRef }: PlayerTimeProps) {
  const duration = videoRef?.current?.duration || 0;
  const [time, setTime] = useState(secondsToTimeFormat(duration));

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = videoRef?.current?.currentTime || 0;
      const formattedTime = secondsToTimeFormat(duration - currentTime);

      if (time !== formattedTime) {
        setTime(formattedTime);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [videoRef, time, duration]);

  return (
    <div className="player__time-value" data-testid='timeTestId'>{time}</div>
  );
}
