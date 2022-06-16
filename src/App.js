import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Projects, Skills, Contact, NotFound } from './pages/index';
import { Navbar } from './components/index';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
