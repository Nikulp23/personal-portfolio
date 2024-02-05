import { Container, Text, Button } from '@mantine/core';
import classes from './Home.module.css';
import { motion } from 'framer-motion';
import ReactTyped from 'react-typed';
import pdf from "./resume.pdf";
import React, { useState, useEffect } from 'react';

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.5, duration: 1.5 } }
};

export function Home() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div
      className={classes.wrapper}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        height: '100vh', // Make the container full height of the viewport
      }}
    >
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          <Text component="span" variant="gradient" gradient={{ from: 'black', to: 'black' }} inherit>
            Hello! <span className={classes.mobileTitleBreak}></span> I'm
          </Text>

          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            &nbsp;Nikul Patel
          </Text>
        </h1>

        <h1 className={`${classes.title} typewriter`}>
          {isMobile ? (
            <span>Full Stack Developer</span>
          ) : (
            <ReactTyped
              strings={["Full Stack Developer", "Computer Science Student"]}
              typeSpeed={70}
              backSpeed={70}
              backDelay={1}
              loop
              smartBackspace
            />
          )}
        </h1>

        {/* Buttons on the home page */}
        <div className={classes.buttonContainerHome}>
          <Button
            component="a"
            href={pdf}
            target="_blank" // Opens the link in a new tab
            size="l"
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
            style={{ marginRight: '10px' }}
            className={`${classes.control}  ${classes.animatedButton}`} // Apply animatedButton class
          >
            <h3>Show Resume</h3>
          </Button>

          <Button
            component="a"
            href="#contact"
            size="l"
            variant="default"
            leftSection=''
            gradient={{ from: 'white', to: 'white' }}
            className={`${classes.control} ${classes.animatedButton}`} // Apply animatedButton class
          >
            <h3>Contact Me</h3>
          </Button>
        </div>
      </Container>
    </motion.div>
  );
}