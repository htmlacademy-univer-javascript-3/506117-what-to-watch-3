export function secondsToTimeFormat(seconds: number): string {
  if (seconds < 0) {
    throw new Error(`Unexpected value: ${seconds}, must be positive`);
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = (seconds % 60);

  const strHours = hours < 10 ? `0${hours}` : hours;
  const strMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const strRemainingSeconds = remainingSeconds < 10 ? `0${Math.trunc(remainingSeconds)}` : Math.trunc(remainingSeconds);

  return `-${strHours !== '00' ? `${strHours }:` : ''}${strMinutes}:${strRemainingSeconds}`;
}
