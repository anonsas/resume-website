import React from 'react';
import './About.scss';
import { Link, Outlet } from 'react-router-dom';

function About() {
  return (
    <div className="app__wrapper">
      <h1 className="heading-1">About page</h1>
      <Outlet />
    </div>
  );
}

export default About;
