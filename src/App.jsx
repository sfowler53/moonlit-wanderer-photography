import './App.css'

function App() {
 const albums = [
  { title: 'Nature', icon: '🏔️', count: 0 },
  { title: 'Wildlife', icon: '🦌', count: 0 },
  { title: 'ATV Adventures', icon: '🏍️', count: 0 },
  { title: 'Sunsets', icon: '🌅', count: 0 },
  { title: 'Night Skies', icon: '🌌', count: 0 },
  { title: 'Family', icon: '👨‍👩‍👧', count: 0 },
  { title: 'Travel', icon: '🧳', count: 0 },
  { title: 'Portraits', icon: '📷', count: 0 },
]

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="moon">☾</div>
          <h1>Moonlit Wanderer Photography</h1>
          <p>Photography</p>
        </div>

        <nav>
          <a className="active">Home</a>
          <a>Gallery</a>
          <a>Albums</a>
          <a>Favorites</a>
          <a>Locations</a>
          <a>Tags</a>
        </nav>

        <div className="profile">
          <div className="avatar">📸</div>
          <div>
            <strong>Stephanie</strong>
            <span>Photographer</span>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <input type="text" placeholder="Search photos..." />
          <button>Upload Photo</button>
        </header>

        <section className="hero">
          <h2>Moonlit Moments</h2>
          <p>Chasing light. Capturing memories.</p>
          <div className="hero-buttons">
            <button>View Gallery</button>
            <button className="outline">Upload</button>
          </div>
        </section>

        <section className="albums">
          <div className="section-title">
            <h3>My Albums</h3>
            <a>View all</a>
          </div>

          <div className="album-grid">
            {albums.map((album) => (
  <div className="album-card" key={album.title}>
    <div className="album-image">
      <span>{album.icon}</span>
    </div>
    <h4>{album.title}</h4>
    <p>{album.count} photos</p>
  </div>
))}

            <div className="new-album">
              <span>+</span>
              <p>New Album</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
