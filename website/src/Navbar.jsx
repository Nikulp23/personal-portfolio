import {Group, Button, Box, Burger, Drawer, Divider, ScrollArea, rem} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navbar.module.css';
import { GithubIcon } from '@mantinex/dev-icons';

export function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          {/* <MantineLogo size={30} /> */}
          Nikul's Logo

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              Home
            </a>
            <a href="#" className={classes.link}>
              Work Experience
            </a>
            <a href="#" className={classes.link}>
              Projects
            </a>
            <a href="#" className={classes.link}>
              Resume
            </a>
          </Group>

          <Group visibleFrom="sm">

            <Button>Linkedin</Button>

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
            Work Experience
          </a>
          <a href="#" className={classes.link}>
            Projects
          </a>
          <a href="#" className={classes.link}>
            Resume
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">

          <Button>Linkedin</Button>

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