type Song = {
  id: number;
  title: string;
  artist: string;
};

type SongListProps = {
  songs: Song[];
  currentSong: Song;
  onSelectSong: (song: Song) => void;
};

function SongList({
  songs,
  currentSong,
  onSelectSong,
}: SongListProps) {
  return (
    <section className="list">
      <h2>推荐音乐</h2>

      {songs.map((song) => (
        <div
  className={`song ${
    currentSong.id === song.id ? "active" : ""
  }`}
  key={song.id}
  onClick={() => onSelectSong(song)}
>
          <span>{song.title}</span>
          <span>{song.artist}</span>
        </div>
      ))}
    </section>
  );
}

export default SongList;