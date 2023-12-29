import React, { useState } from 'react';
import Skills from './Skills';
import { MantineProvider } from '@mantine/core';
import classes from '../Home/Home.module.css';
import { UserCardImage } from './UserCard';
import './GradientSegmented.module.css';
import { SegmentedControl } from '@mantine/core';

import AboutMe from './AboutMe';

function GradientSegmentedControl({ onChange }) {
    return (
      <SegmentedControl
        radius="xl"
        size="md"
        data={['About Me', 'My Skills']}
        onChange={onChange}
        classNames={classes}
      />
    );
}

export function AboutSkillsToggle() {
    const [showAbout, setShowAbout] = useState(true);
  
    const handleSegmentChange = (value) => {
      setShowAbout(value === 'About Me');
    };
  
    return (
      <MantineProvider defaultColorScheme="light">
        <div className='About' id='about'>
          <div className='left'>
            <UserCardImage/>
          </div>
          <div className='right'>
            
            <div className="content-area">

            <div 
            className="about-header" 
            style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                width: '100%', 
                backgroundColor: 'transparent',
                boxSizing: 'border-box' 
            }}
            >
            <GradientSegmentedControl onChange={handleSegmentChange} />
            </div>

              {showAbout ? (<AboutMe  />) : (<Skills />)}
            </div>
          </div>
        </div>
      </MantineProvider>
    );
}