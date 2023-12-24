import {Group, Button, Box, Burger, Drawer, Divider, ScrollArea, rem} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navbar.module.css';
import { GithubIcon } from '@mantinex/dev-icons';
import { SocialIcon } from 'react-social-icons'

export function Navbar() {

  const linkedInIcon = (
    <SocialIcon 
      url="https://linkedin.com/in/yourusername" 
      style={{ height: 20, width: 20 }} 
      bgColor="black"
    />
  );

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          {/* <MantineLogo size={30} /> */}
          Nikul's logo

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              Home
            </a>
            <a href="#" className={classes.link}>
              About Me
            </a>
            <a href="#" className={classes.link}>
              Work Experience
            </a>
            <a href="#" className={classes.link}>
              Projects
            </a>
          </Group>

          <Group visibleFrom="sm">

          <Button
            component="a"
            href="https://linkedin.com/in/yourusername"
            size="l"
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
            className={classes.control}
            leftSection={linkedInIcon}
          >
            LinkedIn
          </Button>

          <Button
            component="a"
            href="https://github.com/Nikulp23"
            size="l"
            variant="default"
            className={classes.control}
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

          <a href="#" className={classes.link}>
            Home
          </a>
          <a href="#" className={classes.link}>
              About Me
          </a>
          <a href="#" className={classes.link}>
            Work Experience
          </a>
          <a href="#" className={classes.link}>
            Projects
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">

          <Button
            component="a"
            href="https://github.com/Nikulp23"
            size="l"
            className={classes.control}
            leftSection={<logo size={20} />}
          >
            Linkedin
          </Button>

          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
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