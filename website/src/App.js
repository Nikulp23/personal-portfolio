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

// import { FeaturesImages } from './FeaturedImages';

function App() {

  return (
    <MantineProvider defaultColorScheme="light">

      <div className="Home">
        <Navbar />
        <div className='left'><Home /></div>
        <div className='right'></div>
      </div>

      <div className='AboutMe'>
            <UserCardImage />
      </div>


      {/* <UserCardImage /> */}
      {/* <StatsGroup /> */}
      {/* <FeaturesCards /> */}
      {/* <FeaturesImages /> */}
      {/* <GradientSegmentedControl /> */}
      <FooterCentered />
    </MantineProvider>
  );
}

export default App;