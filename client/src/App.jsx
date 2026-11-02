import { useEffect, useState } from 'react';

export default function App() {
  const [welcome, setWelcome] = useState('Loading your site…');
  const [apiReady, setApiReady] = useState(false);

  useEffect(() => {
    fetch('/api/welcome')
      .then((response) => {
        if (!response.ok) throw new Error('API unavailable');
        return response.json();
      })
      .then((data) => { setWelcome(data.message); setApiReady(true); })
      .catch(() => {
        setWelcome('Your new website is ready to grow. Start by making it your own.');
        setApiReady(false);
      });
  }, []);

  return (
    <main className="page-shell">
      <nav className="nav">
        <a className="brand" href="#home" aria-label="Home"><span className="brand-mark">s.</span><span>simple site</span></a>
        <a className="nav-link" href="#about">About</a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> A fresh start</span>
          <h1>A little space<br />to <em>make it yours.</em></h1>
          <p>{welcome}</p>
          <a className="button" href="#about">Explore the site <span aria-hidden="true">↗</span></a>
          <div className="status"><span className={`status-dot ${apiReady ? 'online' : ''}`} />{apiReady ? 'Connected to your backend' : 'Frontend is ready'}</div>
        </div>
        <div className="hero-art" aria-label="Abstract sun and landscape illustration" role="img">
          <div className="sun" /><div className="hill hill-back" /><div className="hill hill-front" />
          <span className="art-caption">A good place to begin</span>
          <span className="art-index">01 / 01</span>
        </div>
      </section>

      <section className="about" id="about">
        <div className="section-number">01 <span>—</span> ABOUT</div>
        <div><h2>Simple by design.</h2><p>A clean little starting point for your next idea. This site runs on React, with a Node.js API and MySQL ready behind the scenes.</p></div>
        <a className="arrow-link" href="mailto:hello@example.com" aria-label="Email us">↗</a>
      </section>
      <footer><span>© 2026 Simple Site</span><span>Made for what’s next.</span></footer>
    </main>
  );
}
