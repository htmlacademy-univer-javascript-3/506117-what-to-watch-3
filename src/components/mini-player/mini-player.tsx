
import { useEffect, useRef, useState } from 'react';
import { MiniPlayerConfiguration } from '../../const';

type MiniPlayerProps = {
  previewVideoLink: string;
  previewImage: string;
  isActive: boolean;
}

export default function MiniPlayer(props: MiniPlayerProps): JSX.Element {
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
    <video
      {...MiniPlayerConfiguration}
      poster={props.previewImage}
      data-testid='miniPlayerTestId'
      ref={playerRef}
    >
      <source src={props.previewVideoLink} />
    </video>
  );
}
