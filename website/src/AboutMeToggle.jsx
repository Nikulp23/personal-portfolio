import React, { useState } from 'react';
import SkillsSection from './Skills';
import { Text, MantineProvider } from '@mantine/core';
import classes from './Home.module.css';
import { UserCardImage } from './UserCard';
import { motion } from 'framer-motion';
import './GradientSegmented.module.css';
import { SegmentedControl } from '@mantine/core';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

function GradientSegmentedControl({ onChange }) {
    return (
      <SegmentedControl
        radius="xl"
        size="md"
        data={['About Me', 'My Skills']}
        onChange={onChange}
        classNames={classes} // Ensure your classes are defined for the gradient effect
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

              {showAbout ? (
                <motion.div initial="hidden" whileInView="visible" variants={textVariants}>
                    <h1 className={classes.title}>
                        <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
                        About Me
                        </Text>
                    </h1>
                    <p className={classes.description}>
                        <Text component="span" variant="gradient" gradient={{ from: 'black', to: 'black' }} inherit>
                            Nikul Patel
                        </Text>
                    </p>
                </motion.div>
              ) : (
                // Skills Section
                <SkillsSection />
              )}
            </div>
          </div>
        </div>
      </MantineProvider>
    );
}