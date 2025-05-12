import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Home } from './Home/Home';
import { Navbar } from './Navbar/Navbar';
import { FooterCentered } from './Footer/Footer';
import { FeaturesCards } from './Experience/Cards';
import { AboutSkillsToggle } from './AboutMe/AboutMeToggle';
import Projects from './Projects/Projects'; 
import '@mantine/core/styles.css';
import "./App.css";
import { ContactMe } from './ContactMe/ContactMe';
import Card from './Home/Card';

function App() {

  return (
    <MantineProvider defaultColorScheme="light">

      <div className="Home" id='home'>
        <Navbar />
        <div className='left'><Home /></div>
        <div className='right'><Card /></div>
      </div>

      <div className='about' id='about'>
        <AboutSkillsToggle />
      </div>

      <div className='Experience' id='experience'>
        <FeaturesCards />
      </div>

      <div className='Projects' id='projects'>
        <Projects />
      </div>

      <div className='contact' id='contact'>
        <ContactMe />
      </div>

      <FooterCentered />
    </MantineProvider>
  );
}

export default App;