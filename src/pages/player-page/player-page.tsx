import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFilmDetails } from '../../store/data/film-data/selectors';
import { useEffect, useRef, useState } from 'react';
import PlayerTime from '../../components/player/player-time/player-time';
import Toggler from '../../components/player/toggler/toggler';

export default function PlayerPage(): JSX.Element {
  const film = useAppSelector(getFilmDetails);
  const navigate = useNavigate();
  const [isPlaying, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current != null) {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isPlaying]);

  if (film === null) {
    return <div className="player"></div>;
  }

  return (
    <div className="player">
      <video src={film.videoLink} ref={videoRef} className="player__video" poster="img/player-poster.jpg"></video>

      <button
        type="button"
        className="player__exit"
        onClick={() => navigate(AppRoute.Main)}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <Toggler videoRef={videoRef} />
          </div>
          <PlayerTime videoRef={videoRef}/>
        </div>

        <div className="player__controls-row">
          {
            isPlaying ?
              <button type="button" className="player__play" onClick={() => { setPlaying(() => false) }}>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </button> :
              <button type="button" className="player__play" onClick={() => { setPlaying(() => true) }}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s" href="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
          }
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={() => videoRef.current?.requestFullscreen()}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" href="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
