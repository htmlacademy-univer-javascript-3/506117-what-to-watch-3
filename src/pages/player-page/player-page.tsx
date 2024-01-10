import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilmDetails } from '../../store/data/film-data/selectors';
import { useEffect, useRef, useState } from 'react';
import PlayerTime from '../../components/player/player-time/player-time';
import Toggler from '../../components/player/toggler/toggler';
import { fetchFilmDetailsAction } from '../../store/api-actions';
import { redirectToRoute } from '../../store/action';
import { AppRoute, ErrorType } from '../../const';
import { getErrorData } from '../../store/data/error-data/selectors';
import { setErrorData } from '../../store/data/error-data/error-data';

export default function PlayerPage(): JSX.Element {
  const dispatcher = useAppDispatch();
  const { id } = useParams();
  const hasError = useAppSelector(getErrorData);

  useEffect(() => {
    dispatcher(fetchFilmDetailsAction({ id: id ?? '' }));
  }, [dispatcher, location]);

  const film = useAppSelector(getFilmDetails);
  const [isPlaying, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    videoRef.current?.load();
  }, []);

  if (hasError.errorType === ErrorType.Common) {
    dispatcher(setErrorData({
      errorData: {
        errorType: '',
        message: '',
        details: []
      }
    }));
    dispatcher(redirectToRoute(AppRoute.NotFound));
  }

  if (film === null) {
    return <></>;
  }

  const handleFullScreenClick = () => {
    videoRef.current?.requestFullscreen();
  };

  const handleExit = () => window.history.back();

  return (
    <div className="player">
      <video src={film.videoLink} ref={videoRef} className="player__video" poster="img/player-poster.jpg"></video>

      <button
        type="button"
        className="player__exit"
        onClick={handleExit}
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
              <button type="button" className="player__play" onClick={() => {
                setPlaying(() => false);
              }}
              >
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </button> :
              <button type="button" className="player__play" onClick={() => {
                setPlaying(() => true);
              }}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s" href="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
          }
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreenClick}>
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
