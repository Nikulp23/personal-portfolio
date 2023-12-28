import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Home } from './Home';
import { Navbar } from './Navbar';
import { FooterCentered } from './Footer';
import { FeaturesCards } from './Cards';
// import { AboutSkillsToggle } from './AboutMeToggle';
import "./App.css";
import '@mantine/core/styles.css';
import Projects from "./card/Projects";

function App() {

  return (
    <MantineProvider defaultColorScheme="light">

      <div className="Home" id='home'>
        <Navbar />
        <div className='left'><Home /></div>
        <div className='right'></div>
      </div>

      {/* <AboutSkillsToggle /> */}

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