import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Home } from './Home';
import '@mantine/core/styles.css';
import { Navbar } from './Navbar';
import { FooterCentered } from './Footer';
import { UserCardImage } from './UserCard';
import "./App.css"
import { GradientSegmentedControl } from './GradientSelect';
import { StatsGroup } from './StatsGroup';
import { FeaturesCards } from './Cards';

// import { FeaturesImages } from './FeaturedImages';

function App() {

  return (
    <MantineProvider defaultColorScheme="auto">
      <Navbar />
      <Home />
      <UserCardImage />
      <FooterCentered />
      <StatsGroup />
      <FeaturesCards />
      {/* <FeaturesImages /> */}
      <GradientSegmentedControl />
    </MantineProvider>
  );
}

export default App;