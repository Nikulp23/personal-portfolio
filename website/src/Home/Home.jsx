import { Container, Text, Button } from '@mantine/core';
import classes from './Home.module.css';
import { motion } from 'framer-motion';
import ReactTyped from 'react-typed';
import pdf from "./resume.pdf";


// Define animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.5, duration: 1.5 } }
};

export function Home() {
  return (
    <motion.div
      className={classes.wrapper}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >

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

        <h1 className={`${classes.title} typewriter`}>

          <ReactTyped
            strings={["Full Stack Developer", "Computer Science Student"]}
            typeSpeed={70}
            backSpeed={70}
            backDelay={1}
            loop
            smartBackspace
          />
        </h1>

        {/* Buttons on the home page */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }}>
            <Button
                component="a"
                href={pdf}
                target="_blank"  // Opens the link in a new tab
                size="l"
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
                style={{ marginRight: '10px' }}
                className={`${classes.control} ${classes.animatedButton}`} // Apply animatedButton class
            >
                Show Resume
            </Button>

            <Button
                component="a"
                href="https://github.com/mantinedev/mantine"
                size="l"
                variant="default"
                leftSection=''
                className={`${classes.control} ${classes.animatedButton}`} // Apply animatedButton class
            >
                Contact Me
            </Button>
        </div>     

      </Container>

    </motion.div>
  );
}