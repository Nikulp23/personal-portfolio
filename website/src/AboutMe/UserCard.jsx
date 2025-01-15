import { Card, Avatar, Text, Group } from '@mantine/core';
import classes from './UserCardImage.module.css';
import pic from './profile.png';

const stats = [
  { value: '3.75', label: 'GPA' },
  { value: 'May 2026', label: 'Graduation' },
];

export function UserCardImage() {
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text ta="center" fz="lg" fw={500}>
        {stat.value}
      </Text>
      <Text ta="center" fz="sm" c="dimmed" lh={1}>
        {stat.label}
      </Text>
    </div>
  ));

  return (

    <Card withBorder padding="xl" radius="md" className={classes.card}>
      <Card.Section
        h={140}
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)',
        }}
      />
      <Avatar
        src={pic}
        size={130}
        radius={80}
        mx="auto"
        mt={-50}
        className={classes.avatar}
      />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        Nikul Patel
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        Full stack Developer
      </Text>
      <Group mt="md" justify="center" gap={30}>
        {items}
      </Group>
      <Text ta="center" fz="lg" fw={500} mt="sm">
      Rensselaer Polytechnic Institute
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        College
      </Text>
      <Text ta="center" fz="lg" fw={500} mt="sm">
        23nikulp@gmail.com
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        Email
      </Text>
    </Card>
  );
}