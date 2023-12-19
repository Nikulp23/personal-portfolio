import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Home } from './Home';
import '@mantine/core/styles.css';
import { HeaderMegaMenu } from './HeaderMegaMenu';
import { FooterCentered } from './Footer';
import { UserCardImage } from './UserCard';
import "./App.css"
import { GradientSegmentedControl } from './GradientSelect';
import { StatsGroup } from './StatsGroup';
import { FeaturesCards } from './Cards';

// import { FeaturesImages } from './FeaturedImages';

function App() {

  return (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <HeaderMegaMenu />
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