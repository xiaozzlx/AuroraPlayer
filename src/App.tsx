import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SongList from "./components/SongList";
import PlayerBar from "./components/PlayerBar";
import { songs } from "./data/songs";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSong = songs[currentIndex];

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const [audio] = useState(() => new Audio(songs[0].file));

  // 上一首
  const previousSong = () => {
    if (currentIndex === 0) {
      setCurrentIndex(songs.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // 下一首
  const nextSong = () => {
    if (currentIndex === songs.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // 更新时间
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

  // 切歌
  useEffect(() => {
    audio.src = currentSong.file;

    if (isPlaying) {
      audio.play();
    }
  }, [currentSong, isPlaying, audio]);

  return (
    <div className="app">
      <Header />

      <main className="content">
        <SearchBar />

        <SongList
          songs={songs}
          currentSong={currentSong}
          onSelectSong={(song) => {
            const index = songs.findIndex(
              (item) => item.title === song.title
            );

            setCurrentIndex(index);
          }}
        />
      </main>

      <PlayerBar
        currentSong={currentSong}
        audio={audio}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentTime={currentTime}
        duration={duration}
        onPrevious={previousSong}
        onNext={nextSong}
      />
    </div>
  );
}

export default App;