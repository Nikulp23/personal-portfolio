import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Home } from './Home/Home';
import { Navbar } from './Navbar/Navbar';
import { FooterCentered } from './Footer/Footer';
import { FeaturesCards } from './Experience/Cards';
import "./App.css";
import { AboutSkillsToggle } from './AboutMe/AboutMeToggle';
import '@mantine/core/styles.css';
import Projects from './Projects/Projects'; 
import SkillsMindMap from './AboutMe/Skills';

function App() {

  return (
    <MantineProvider defaultColorScheme="light">

      <div className="Home" id='home'>
        <Navbar />
        <div className='left'><Home /></div>
        <div className='right'></div>
      </div>

      <AboutSkillsToggle />

      <div className='Experience' id='experience'>
        <FeaturesCards />
      </div>

      <div className='Projects' id='projects'>
        <Projects />
      </div>

      <FooterCentered />
    </MantineProvider>
  );
}

export default App;