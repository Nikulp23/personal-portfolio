import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Home } from './Home';
import '@mantine/core/styles.css';
import { HeaderMegaMenu } from './HeaderMegaMenu';

function App() {

  return (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <HeaderMegaMenu />
      <Home />

    </MantineProvider>
  );
}

export default App;