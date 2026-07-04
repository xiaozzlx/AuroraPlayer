import type { Song } from "../types/song";

type PlayerBarProps = {
  currentSong: Song;
  audio: HTMLAudioElement;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  currentTime: number;
  duration: number;
};

function formatTime(time: number) {
  if (!time || isNaN(time)) return "00:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function PlayerBar({
  currentSong,
  audio,
  isPlaying,
  setIsPlaying,
  currentTime,
  duration,
}: PlayerBarProps) {

 const togglePlay = () => {
  if (isPlaying) {
    audio.pause();
    setIsPlaying(false);
  } else {
    audio.play();
    setIsPlaying(true);
  }
};
const progress =
  duration > 0 ? (currentTime / duration) * 100 : 0;
    
 const handleSeek = (event: React.MouseEvent<HTMLDivElement>) => {
  const progressBar = event.currentTarget;

  const width = progressBar.clientWidth;

  const left = progressBar.getBoundingClientRect().left;

  const clickX = event.clientX - left;

  const percent = clickX / width;

  audio.currentTime = percent * duration;
};

  return (
    <footer className="player">
      <button>⏮</button>
     <button onClick={togglePlay}>
  {isPlaying ? "⏸" : "▶"}
</button>
      <button>⏭</button>

     <div
  className="progress"
  onClick={handleSeek}
>
  <div
    className="bar"
    style={{ width: `${progress}%` }}
  ></div>
</div>

      <div className="song-info">
        <strong>{currentSong.title}</strong>
        <br />
        <span>{currentSong.artist}</span>
      </div>

      <span>
  {formatTime(currentTime)} / {formatTime(duration)}
</span>
    </footer>
  );
}

export default PlayerBar;