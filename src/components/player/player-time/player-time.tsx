import { useEffect, useState } from "react";
import { minutesToTimeFormat } from "../../../services/player-page/player-time";

type PlayerTimeProps = {
    videoRef: React.MutableRefObject<HTMLVideoElement | null>;
}

export default function PlayerTime({ videoRef }: PlayerTimeProps) {
    const duration = videoRef.current?.duration || 0;
    const [time, setTime] = useState(minutesToTimeFormat(duration));

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = videoRef.current?.currentTime || 0;
            const formattedTime = minutesToTimeFormat(duration - currentTime);

            if (time !== formattedTime) {
                setTime(formattedTime);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [videoRef, time]);

    return (
        <div className="player__time-value">{time}</div>
    )
}