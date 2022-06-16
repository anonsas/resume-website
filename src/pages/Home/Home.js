import React from 'react';
import './Home.scss';
import myPhoto from '../../assets/me.png';

function Home() {
  return (
    <main className="app__wrapper">
      <div className="home__heading">
        <h1 className="heading-1">
          Igor <span>Lukjanov</span>
        </h1>
        <h2 className="heading-2">Frontend Developer</h2>
      </div>

      <div className="home__image">
        <img src={myPhoto} alt="me" />
      </div>

      <div className="home__actions">
        <a href="https://github.com/anonsas">Github</a>
        <a href="https://www.linkedin.com/in/lukjanov1337">LinkedIn</a>
      </div>
    </main>
  );
}

export default Home;
