import {Group, Button, Box, Burger, Drawer, Divider, ScrollArea, rem} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navbar.module.css';
import { GithubIcon } from '@mantinex/dev-icons';
import { useState, useEffect } from 'react';
import logo from "./logo.png";

export function Navbar() {

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [activeLink, setActiveLink] = useState('home');

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  // automatic changes active link
  useEffect(() => {
    setActiveLink('home');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentActiveSectionId = entry.target.id;
          setActiveLink(currentActiveSectionId);
        }
      });
    }, { threshold: 0.5 });
  
    document.querySelectorAll('div[id]').forEach((div) => {
      observer.observe(div);
    });
  
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          
        <a href="#home" onClick={() => handleSetActiveLink('home')} style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Logo" style={{ height: '40px', width: '40px', marginLeft: '15px', marginTop: '2.5px' }} />
        </a>

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#home"
             className={`${classes.link} ${activeLink === 'home' ? classes.activeLink : ''}`}
             onClick={() => handleSetActiveLink('home')}><h3>Home</h3></a>

            <a href="#about"
             className={`${classes.link} ${activeLink === 'about' ? classes.activeLink : ''}`}
             onClick={() => handleSetActiveLink('about')}><h3>My Journey</h3></a>

            <a href="#experience" 
             className={`${classes.link} ${activeLink === 'experience' ? classes.activeLink : ''}`}
             onClick={() => handleSetActiveLink('experience')}><h3>Work Experience</h3></a>

            <a href="#projects" 
             className={`${classes.link} ${activeLink === 'projects' ? classes.activeLink : ''}`}
             onClick={() => handleSetActiveLink('projects')}><h3>Projects</h3></a>
            
            <a href="#contact" 
             className={`${classes.link} ${activeLink === 'contact' ? classes.activeLink : ''}`}
             onClick={() => handleSetActiveLink('contact')}><h3>Let's Connect</h3></a>



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
                  xmlns="https://www.w3.org/2000/svg" 
                  x="0px" 
                  y="0px" 
                  width="35" 
                  height="24" 
                  viewBox="0 0 50 50" 
                  style={{ fill: "#FFFFFF" }}
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
            }
          >
            <h3>LinkedIn</h3>
          </Button>

          <Button
            component="a"
            href="https://github.com/Nikulp23"
            target="_blank"  // Opens the link in a new tab
            size="l"
            variant="default"
            className={`${classes.control} ${classes.animatedButton} ${classes.buttonGroup}`} // Apply animatedButton class
            leftSection={
              <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="35" 
                  height="24"
                  viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            }
          >
            <h3>GitHub</h3>
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
                    xmlns="https://www.w3.org/2000/svg" 
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