import { Container, Text, Button, Group } from '@mantine/core';
import { GithubIcon } from '@mantinex/dev-icons';
import classes from './Home.module.css';

export function Home() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>

        <h1 className={classes.title}>
          <Text component="span" variant="gradient" gradient={{ from: 'black', to: 'black' }} inherit>
            Hello! I'm
          </Text>{' '}

          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            Nikul Patel
          </Text>{' '}

          <br></br>

        </h1>


        <h1 className={classes.title}>
          <Text component="span" variant="gradient" gradient={{ from: 'black', to: 'black' }} inherit>
            A Full Stack Developer
          </Text>{' '}
        </h1>

        <Group className={classes.controls}>
          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="l"
            variant="default"
            leftSection={<GithubIcon size={20} />}
          >
            GitHub
          </Button>
        </Group>

        <Group className={classes.controls}>
          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="l"
            variant="default"
            leftSection={<GithubIcon size={20} />}
          >
            GitHub
          </Button>
        </Group>
        
      </Container>
    </div>
  );
}