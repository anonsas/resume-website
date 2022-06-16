import React from 'react';
import './Skills.scss';
import { GrMonitor, GrSystem } from 'react-icons/gr';
import { MdMobileFriendly } from 'react-icons/md';

function Skills() {
  return (
    <main className="app__wrapper">
      <h1 className="heading-1">Skills</h1>

      <div className="cards__container">
        <div className="card">
          <h3 className="card__heading">
            Front-End
            <span>
              <GrMonitor />
            </span>
          </h3>
          <div className="card__tools">
            <p className="card__tools--tool">HTML</p>
            <p className="card__tools--tool">CSS</p>
            <p className="card__tools--tool">Sass</p>
            <p className="card__tools--tool">Bootstrap</p>
            <p className="card__tools--tool">JavaScript</p>
            <p className="card__tools--tool">React</p>
          </div>
        </div>

        <div className="card">
          <h3 className="card__heading">
            Back-End
            <span>
              <GrSystem />
            </span>
          </h3>
          <div className="card__tools">
            <p className="card__tools--tool">Node.js</p>
            <p className="card__tools--tool">Express</p>
            <p className="card__tools--tool">MySql</p>
            <p className="card__tools--tool">MongoDB</p>
          </div>
        </div>

        <div className="card">
          <h3 className="card__heading">
            Other
            <span>
              <MdMobileFriendly />
            </span>
          </h3>
          <div className="card__tools">
            <p className="card__tools--tool">NPM</p>
            <p className="card__tools--tool">GIT</p>
            <p className="card__tools--tool">GitHub</p>
            <p className="card__tools--tool">Responsive Design</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Skills;
