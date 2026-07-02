import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SongList from "./components/SongList";
import PlayerBar from "./components/PlayerBar";

function App() {
 const songs = [
  {
    title: "七里香",
    artist: "周杰伦",
    file: "/music/demo.mp3",
  },
  {
    title: "江南",
    artist: "林俊杰",
    file: "/music/demo.mp3",
  },
  {
    title: "十年",
    artist: "陈奕迅",
    file: "/music/demo.mp3",
  },
];

 const [currentIndex, setCurrentIndex] = useState(0);

 const currentSong = songs[currentIndex];
 const [currentTime, setCurrentTime] = useState(0);
 const [duration, setDuration] = useState(0);
 const [isPlaying, setIsPlaying] = useState(false);

 const [audio] = useState(() => new Audio(songs[0].file));
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
/>
    </div>
  );
}

export default App;