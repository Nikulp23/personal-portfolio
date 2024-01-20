import {Group, Button, Box, Burger, Drawer, Divider, ScrollArea, rem} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navbar.module.css';
import { GithubIcon } from '@mantinex/dev-icons';
import { useState } from 'react';
import logo from "./logo.png";

export function Navbar() {

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const [activeLink, setActiveLink] = useState('home');

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <img src={logo} alt="Logo" style={{ height: '40px' , width: '40px', marginLeft: '10px'}} /> {/* Use the logo here */}

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#home" 
             className={`${classes.link} ${activeLink === 'home' ? classes.activeLink : ''}`}
             onClick={() => handleSetActiveLink('home')}>Home</a>

            <a href="#about" 
             className={`${classes.link} ${activeLink === 'about' ? classes.activeLink : ''}`}
             onClick={() => handleSetActiveLink('about')}>About Me</a>

            <a href="#experience" 
             className={`${classes.link} ${activeLink === 'experience' ? classes.activeLink : ''}`}
             onClick={() => handleSetActiveLink('experience')}>Work Experience</a>

            <a href="#projects" 
             className={`${classes.link} ${activeLink === 'projects' ? classes.activeLink : ''}`}
             onClick={() => handleSetActiveLink('projects')}>Projects</a>

          </Group>

          <Group visibleFrom="sm">

          <Button
            component="a"
            href="https://linkedin.com/in/nikulpatel23"
            size="l"
            target="_blank"  // Opens the link in a new tab
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
            className={`${classes.control} ${classes.animatedButton} ${classes.buttonGroup}`} // Apply animatedButton class
            leftSection={
              <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  x="0px" 
                  y="0px" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 50 50" 
                  style={{ fill: "#FFFFFF" }}
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
            }
          >
            LinkedIn
          </Button>

          <Button
            component="a"
            href="https://github.com/Nikulp23"
            target="_blank"  // Opens the link in a new tab
            size="l"
            variant="default"
            className={`${classes.control} ${classes.animatedButton} ${classes.buttonGroup}`} // Apply animatedButton class
            leftSection={<GithubIcon size={20} />}
          >
            GitHub
          </Button>

          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      {/* FOR SMALLER SCREENS */}

      {/* Closed Navbar */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#home" className={classes.link} onClick={closeDrawer}>
            Home
          </a>
          <a href="#about" className={classes.link} onClick={closeDrawer}>
            About Me
          </a>
          <a href="#experience" className={classes.link} onClick={closeDrawer}>
            Work Experience
          </a>
          <a href="#projects" className={classes.link} onClick={closeDrawer}>
            Projects
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">

            <Button
              component="a"
              href="https://linkedin.com/in/nikulpatel23"
              target="_blank"  // Opens the link in a new tab
              size="l"
              className={`${classes.control}`}
              leftSection={
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    x="0px" 
                    y="0px" 
                    width="25" 
                    height="25" 
                    viewBox="0 0 50 50" 
                    style={{ fill: "#FFFFFF" }}
                  >
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                  </svg>
              }
            >
              LinkedIn
            </Button>

            <Button
              component="a"
              href="https://github.com/Nikulp23"
              target="_blank"  // Opens the link in a new tab
              size="l"
              variant="default"
              className={`${classes.control}`}
              leftSection={<GithubIcon size={20} />}
            >
              GitHub
            </Button>

          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}