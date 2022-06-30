import React from 'react';
import './Home.scss';
import myPhoto from '../../assets/me.png';

function Home() {
  return (
    <main className="app__wrapper">
      <div className="home__heading">
        <h1>
          Igor <span>Lukjanov</span>
        </h1>
        <h2>Frontend Developer</h2>
      </div>

      <div className="home__image">
        <img src={myPhoto} alt="me" />
      </div>

      <div className="home__actions">
        <a href="https://github.com/anonsas" target="_blank" rel="noreferrer">
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/lukjanov1337"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </main>
  );
}

export default Home;
