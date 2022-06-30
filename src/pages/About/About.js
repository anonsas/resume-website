import React from 'react';
import './About.scss';
import { Link, Outlet } from 'react-router-dom';

function About() {
  return (
    <div className="app__wrapper about">
      <h1 className="heading-1">About Me!</h1>

      <div className="about__description">
        <p>
          Hello, I'm Igor Lukjanov 29 years old. Born in Vilnius, Lithuania. I have been
          self-learning to program for the last 2 years and I specialize in Frontend
          development. I take great pride in my work, and I always try to better myself
          with every project I work on.
        </p>

        <p>
          The logical extension of my education and work experience coupled with my
          passion for technology is my continued desire to learn and build beautiful
          software solutions.
        </p>
        <p>
          When I'm not coding, I like to play basketball, lift weights and watch movies.
        </p>
      </div>

      <h2>Education</h2>
      <div className="about__education">
        <div className="education-card">
          <i class="fa-solid fa-graduation-cap"></i>
          <div className="education-info">
            <h3>JavaScript</h3>
            <p>Baltic Institute of Technology (BIT)</p>
            <p>06/2022 - Present Vilnius, Lithuania</p>
          </div>
        </div>

        <div className="education-card">
          <i class="fa-solid fa-graduation-cap"></i>
          <div className="education-info">
            <h3>Real Estate and Cadastral Measurements</h3>
            <p>
              Kaunas Forestry and Environmental Engineering University of Applied Sciences
            </p>
            <p>09/2014 - 06/2018 Kaunas, Lithuania</p>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default About;
