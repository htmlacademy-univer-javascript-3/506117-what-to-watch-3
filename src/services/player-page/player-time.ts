export function minutesToTimeFormat(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = (seconds % 60);

    const strHours = hours < 10 ? '0' + hours : hours;
    const strMinutes = minutes < 10 ? '0' + minutes : minutes;
    const strRemainingSeconds = remainingSeconds < 10 ? '0' + remainingSeconds.toFixed(0) : remainingSeconds.toFixed(0);

    return `-${strHours != '00' ? strHours + ':' : ''}${strMinutes}:${strRemainingSeconds}`;
}