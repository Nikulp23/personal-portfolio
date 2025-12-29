import { Card, Avatar, Text, Group } from '@mantine/core';
import classes from './UserCardImage.module.css';
import pic from './profile.png';

const stats = [
  { value: '3.77', label: 'GPA' },
  { value: 'Dec 2025', label: 'Graduation' },
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
        h={100}
        style={{
          backgroundImage:
            'url(https://t3.ftcdn.net/jpg/02/70/35/00/360_F_270350073_WO6yQAdptEnAhYKM5GuA9035wbRnVJSr.jpg)',
        }}
      />
      <Avatar
        src={pic}
        size={220}
        radius={120}
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

export default UserCardImage;