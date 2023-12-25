import { useEffect, useState } from 'react';

type TogglerTimeProps = {
    videoRef: React.MutableRefObject<HTMLVideoElement | null>;
}

export default function Toggler({ videoRef }: TogglerTimeProps) {
  const duration = videoRef.current?.duration || 1;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = videoRef.current?.currentTime || 0;
      const curProgress = (currentTime / duration * 100);

      if (progress !== curProgress) {
        setProgress(curProgress);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [videoRef, progress, duration]);

  return (
    <>
      <progress className="player__progress" value={progress.toFixed(2)} max="100"></progress>
      <div className="player__toggler" style={{ left: `${progress.toFixed(2)}%` }}>Toggler</div>
    </>
  );
}
