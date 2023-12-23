import React from 'react';
import "./App.css"
import { MantineProvider } from '@mantine/core';
import { Home } from './Home';
import '@mantine/core/styles.css';
import { Navbar } from './Navbar';
import { FooterCentered } from './Footer';
import { UserCardImage } from './UserCard';
import { GradientSegmentedControl } from './GradientSelect';
import { StatsGroup } from './StatsGroup';
import { FeaturesCards } from './Cards';
import classes from './Home.module.css';
import { Text } from '@mantine/core';
import { CARTXCard, HACKRPICard } from './BadgeCard'; // Assuming ProjectCard is the component you defined earlier

function App() {

  return (
    <MantineProvider defaultColorScheme="light">

      <div className="Home">
        <Navbar />
        <div className='left'><Home /></div>
        <div className='right'></div>
      </div>

      <div className='About'>
        <div className='left'><UserCardImage/></div>
        <div className='right'>
          <h1 className={classes.title}>
            <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
              About Me
            </Text>{' '}
          </h1>

          <p className={classes.description}>
            <Text component="span" variant="gradient" gradient={{ from: 'black', to: 'black' }} inherit>
            Hello! I'm Nikul Patel, a passionate and driven Computer Science and ITWS student at Rensselaer Polytechnic Institute, graduating in June 2026.
            My journey in the world of technology is driven by a profound passion for innovation and a commitment to continuous learning.
            <br></br><br></br>
            Alongside my technical pursuits, I am an avid sports enthusiast. Whether it’s following the latest games, participating in sports activities, or simply discussing strategies, sports play a significant role in my life. This interest not only offers a refreshing break from my tech-focused world but also instills values like teamwork, perseverance, and strategic thinking, which are integral to my professional life.
            </Text>{' '}
          </p>
        </div>
      </div>

      <div className='Experience'>
        <FeaturesCards />
      </div>

      <div className='Projects'>
        <CARTXCard />
        <HACKRPICard />
      </div>

      <StatsGroup />
      {/* <GradientSegmentedControl /> */}
      <FooterCentered />
    </MantineProvider>
  );
}

export default App;