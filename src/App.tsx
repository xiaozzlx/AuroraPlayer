import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>🎵 Aurora Player</h1>
        <p>现代化跨平台音乐播放器</p>
      </header>

      <main className="main">
        <div className="card">
          <h2>欢迎使用 Aurora Player</h2>
          <p>播放器核心正在开发中...</p>

          <button>导入本地音乐</button>
        </div>
      </main>

      <footer className="footer">
        <small>Version 0.0.1</small>
      </footer>
    </div>
  );
}

export default App;