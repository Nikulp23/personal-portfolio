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

          <br></br>
          
        </h1>

        {/* Buttons on the home page */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }}>
            <Button
                component="a"
                href="https://github.com/mantinedev/mantine"
                size="l"
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
                rightSection=''
                style={{ marginRight: '10px' }}  // Adding margin to the right of the first button
            >
                Show Resume
            </Button>

            <Button
                component="a"
                href="https://github.com/mantinedev/mantine"
                size="l"
                variant="default"
                leftSection=''
            >
                Contact Me
            </Button>
        </div>     

      </Container>
    </div>
  );
}