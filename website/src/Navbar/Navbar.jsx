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
            className={`${classes.control} ${classes.animatedButton}`} // Apply animatedButton class
            leftSection={<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>}
          >
            LinkedIn
          </Button>

          <Button
            component="a"
            href="https://github.com/Nikulp23"
            target="_blank"  // Opens the link in a new tab
            size="l"
            variant="default"
            className={`${classes.control} ${classes.animatedButton}`} // Apply animatedButton class
            leftSection={<GithubIcon size={20} />}
          >
            GitHub
          </Button>

          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

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

          <a href="#home" className={classes.link}>
            Home
          </a>
          <a href="#about" className={classes.link}>
              About Me
          </a>
          <a href="experience" className={classes.link}>
            Work Experience
          </a>
          <a href="projects" className={classes.link}>
            Projects
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">

          <Button
            component="a"
            href="https://linkedin.com/in/nikulpatel23"
            target="_blank"  // Opens the link in a new tab
            size="l"
            className={classes.control}
            leftSection={<logo size={20} />}
          >
            Linkedin
          </Button>

          <Button
            component="a"
            href="https://github.com/Nikulp23"
            target="_blank"  // Opens the link in a new tab
            size="l"
            variant="default"
            className={classes.control}
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