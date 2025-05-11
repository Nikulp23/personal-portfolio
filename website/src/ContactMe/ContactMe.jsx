import { Text, Card, TextInput, Textarea, SimpleGrid, Group, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from './Navbar.module.css';
import './ContactMe.css';

export function ContactMe() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <Card shadow="sm" padding="lg" radius="md" className='contactForm'>
      <form 
        action="https://formspree.io/f/mbjngkdj"
        method="POST"
      >

        <h1 className={classes.title} style={{ textAlign: 'center', fontSize: '1.4rem' }}>
          <Text component="span" variant="gradient" gradient={{ from: 'black', to: 'black' }} inherit>
            LET'S CONNECT! <span className={classes.mobileTitleBreak}></span>
          </Text>
        </h1>

        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            {...form.getInputProps('email')}
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps('subject')}
        />

        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={4}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps('message')}
        />

        <Group justify="center" mt="xl">
          <Button 
            size="s"
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
            className={`${classes.control} ${classes.animatedButton} ${classes.buttonGroup}`}
            type="submit">
            SEND MESSAGE!
          </Button>
        </Group>
      </form>
    </Card>
  );
}