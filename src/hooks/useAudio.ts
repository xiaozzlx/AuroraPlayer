import { useEffect, useState } from "react";

export function useAudio(file: string) {
  const [audio] = useState(() => new Audio(file));

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    audio.addEventListener("timeupdate", updateTime);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, [audio]);

  return {
    audio,
    currentTime,
    duration,
    isPlaying,
    setIsPlaying,
  };
}