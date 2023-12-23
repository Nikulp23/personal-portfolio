import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme,
  } from '@mantine/core';
  import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
  import classes from './FeaturesCards.module.css';
  
  const mockdata = [
    {
      title: 'Data Structures TA',
      date: 'AUG 2023 - Present',
      description: 'Provided comprehensive support to students learning complex data structures in C++, and delivered targeted guidance in employing code optimization and debugging tools for the development of efficient and robust programming solutions.',
      icon: IconGauge,
    },
    {
      title: 'Work Study BME',
      date: 'AUG 2023 - Present',
      description:
        'Led the development of a web-based academic system for Biomedical Students, utilizing HTML and JavaScript for front-end design and implementing a secure, scalable MySQL database architecture to enable personalized academic planning and advisor access for a growing user base',
      icon: IconUser,
    },
    {
      title: 'Project Lead - CARTX',
      date: 'AUG 2023 - Present',
      description:
          'Led the technical vision in developing a responsive application with React.js. Pioneered the use of APIs and Web Scraping techniques to collect real-time pricing data from various online retailers.',
      icon: IconCookie,
    },
  ];
  
  export function FeaturesCards() {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      
        <feature.icon
          style={{ width: rem(50), height: rem(50) }}
          stroke={2}
          color={theme.colors.blue[6]}
        />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Badge variant="filled" size="sm">
          {feature.date}
          </Badge>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <Container size="lg" py="xl">
        <Group justify="center">
          <Badge variant="filled" size="xl">
            WORK EXPERIENCE
          </Badge>
        </Group>
  
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Integrate effortlessly with any technology stack
        </Title>
  
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
          hunger drives it to try biting a Steel-type Pokémon.
        </Text>
  
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }