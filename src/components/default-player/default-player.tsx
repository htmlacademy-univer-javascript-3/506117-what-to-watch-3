
import { useEffect, useRef, useState } from 'react';

type DefaultPlayerProps = {
    previewVideoLink: string;
    previewImage: string;
    muted: boolean;
    width: number | string;
    height: number | string;
    isActive: boolean;
}

export default function DefaultPlayer(props: DefaultPlayerProps): JSX.Element {
  const playerRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setPlaying] = useState(false);

  useEffect(() => {
    if (!props.isActive) {
      return;
    }

    const wait = setInterval(() => {
      setPlaying(true);
    }, 1000);

    return () => {
      clearInterval(wait);
      setPlaying(false);
    };
  }, [props.isActive]);

  useEffect(() => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current?.play();
      } else {
        playerRef.current?.load();
      }
    }
  }, [isPlaying]);

  return (
    <video {...props} poster={props.previewImage} ref={playerRef}>
      <source src={props.previewVideoLink} />
    </video>
  );
}
