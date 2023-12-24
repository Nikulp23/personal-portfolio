import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Home } from './Home';
import { Navbar } from './Navbar';
import { FooterCentered } from './Footer';
import { UserCardImage } from './UserCard';
import { FeaturesCards } from './Cards';
import classes from './Home.module.css';
import { Text } from '@mantine/core';
import { motion } from 'framer-motion';
import '@mantine/core/styles.css';
import "./App.css"

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

function App() {

  return (
    <MantineProvider defaultColorScheme="light">

      <div className="Home" id='home'>
        <Navbar />
        <div className='left'><Home /></div>
        <div className='right'></div>
      </div>

      <div className='About' id='about'>
        <div className='left'><UserCardImage/></div>
        <div className='right'>
          <h1 className={classes.title}>
            <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
              About Me
            </Text>{' '}
          </h1>

          <p className={classes.description}>
          <motion.div initial="hidden" whileInView="visible" variants={textVariants}>
            <Text component="span" variant="gradient" gradient={{ from: 'black', to: 'black' }} inherit>
            Hello! I'm Nikul Patel, a passionate and driven Computer Science and ITWS student at Rensselaer Polytechnic Institute, graduating in June 2026.
            My journey in the world of technology is driven by a profound passion for innovation and a commitment to continuous learning.
            <br></br><br></br>
            Alongside my technical pursuits, I am an avid sports enthusiast. Whether it’s following the latest games, participating in sports activities, or simply discussing strategies, sports play a significant role in my life. This interest not only offers a refreshing break from my tech-focused world but also instills values like teamwork, perseverance, and strategic thinking, which are integral to my professional life.
            </Text>{' '}
            </motion.div>
          </p>

        </div>
      </div>

      <div className='Experience' id='experience'>
        <FeaturesCards />
      </div>

      {/* <div className='Projects' id='projects'>
        <CARTXCard />
        <HACKRPICard />
      </div> */}

      {/* <StatsGroup /> */}
      {/* <GradientSegmentedControl /> */}

      <FooterCentered />
    </MantineProvider>
  );
}

export default App;