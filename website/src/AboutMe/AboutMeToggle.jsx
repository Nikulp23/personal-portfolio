import React from 'react';
import { MantineProvider } from '@mantine/core';
import { UserCardImage } from './UserCard';
import AboutMe from './AboutMe';

export function AboutSkillsToggle() {
  
    return (
      <MantineProvider defaultColorScheme="light">
        <div className='About' id='about'>
          <div className='left'>
            <UserCardImage/>
          </div>
          <div className='right'>
              <AboutMe  />
          </div>
        </div>
      </MantineProvider>
    );
}