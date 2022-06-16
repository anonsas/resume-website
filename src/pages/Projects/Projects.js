import React from 'react';
import './Project.scss';
import { AiOutlineGithub, AiOutlineEye } from 'react-icons/ai';
import { images } from '../../constants';

function Projects() {
  return (
    <main className="app__wrapper">
      <h1 className="heading-1">
        My Creative <span className="portfolio-span">Portfolio</span> Section
      </h1>

      <div className="cards__container">
        <div className="card">
          <img src={images.natours} alt="natours" className="card__image" />
          <div className="card__description">
            <p className="card__description--title">Natours</p>
            <p>Tour booking website</p>
            <div className="card__actions">
              <a
                href="https://natours-by-igor.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="card__actions--live"
              >
                <AiOutlineEye />
              </a>
              <a
                href="https://github.com/anonsas/natours"
                target="_blank"
                rel="noreferrer"
                className="card__actions--github"
              >
                <AiOutlineGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Projects;
