import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>🎵 Aurora Player</h1>
        <p>你的现代化在线音乐播放器</p>
      </header>

      <main className="content">
        <input
          className="search"
          type="text"
          placeholder="🔍 搜索歌曲、歌手..."
        />

        <section className="list">
          <h2>推荐音乐</h2>

          <div className="song">
            <span>七里香</span>
            <span>周杰伦</span>
          </div>

          <div className="song">
            <span>江南</span>
            <span>林俊杰</span>
          </div>

          <div className="song">
            <span>十年</span>
            <span>陈奕迅</span>
          </div>
        </section>
      </main>

      <footer className="player">
        <button>⏮</button>
        <button>▶</button>
        <button>⏭</button>

        <div className="progress">
          <div className="bar"></div>
        </div>

        <span>00:00 / 03:45</span>
      </footer>
    </div>
  );
}

export default App;