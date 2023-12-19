import { Container, Text, Button, Group } from '@mantine/core';
import { GithubIcon } from '@mantinex/dev-icons';
import classes from './Home.module.css';

export function Home() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          Hello! I'm{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            Nikul Patel
          </Text>{' '}
        </h1>

        <h3 className={classes.title}>
        Computer Science and Information Technology Student{' '} <br/>
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            Rensselaer Polytechnic Institute
          </Text>{' '}
        </h3>

        <Text className={classes.description} color="dimmed">
            Dedicated Computer Science student with a passion for technology, seeking a challenging internship to apply and enhance my skills in software development
        </Text>

        <Group className={classes.controls}>
          <Button
            size="l"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
          >
            Get started
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
        
      </Container>
    </div>
  );
}