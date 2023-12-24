import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
  } from '@mantine/core';
  import classes from './FeaturesCards.module.css';
  import { motion } from 'framer-motion';

  import rcos from './rcos.png';
  import biomed_logo from './biomed_logo.png';
  import datastructures from './datastructures.png';

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 }
    }),
    hover: { scale: 1.05 } // Scale up effect on hover
  };

  const mockdata = [
    {
      title: 'Undergraduate Data Structures Teaching Assistant',
      date: 'AUG 2023 - Present',
      description: 'Provided comprehensive support to students learning complex data structures in C++, and delivered targeted guidance in employing code optimization and debugging tools for the development of efficient and robust programming solutions. Add couple more lineof info here',
      image: datastructures,
    },
    {
      title: 'Open Source Project Lead - CARTX',
      date: 'AUG 2023 - Present',
      description:
          'Led the technical vision in developing a responsive application with React.js. Pioneered the use of APIs and Web Scraping techniques to collect real-time pricing data from various online retailers. Add couple of lines of information here. One more and one more line.',
      image: rcos,
    },
    {
      title: 'Work Study Biomedical Engineering Department',
      date: 'AUG 2023 - Present',
      description:
        'Led the development of a web-based academic system for Biomedical Students, utilizing HTML and JavaScript for front-end design and implementing a secure, scalable MySQL database architecture to enable personalized academic planning and advisor access for a growing user base',
      image: biomed_logo,
    },
  ];
  
  export function FeaturesCards() {

    const standardizeImage = (src, alt) => (
      <div className={classes.imageWrapper}>
        <img 
          src={src} 
          alt={alt} 
          className={classes.cardImage} // Apply consistent styling with CSS
        />
      </div>
    );

    const features = mockdata.map((feature) => (
      <motion.div
        key={feature.title}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover" // Apply hover effect
        className={classes.cardWrapper} // Additional class for styling
      >

      <Card shadow="md" radius="md" className={classes.card} padding="xl">
      
        {standardizeImage(feature.image, feature.title)}

        <div style={{ textAlign: 'center' }}>
          <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
            {feature.title}
          </Text>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Badge variant="filled" size="sm">
            {feature.date}
          </Badge>
        </div>

        <Text fz="sm" c="dimmed" mt="sm" className={classes.cardDescription}>
        {feature.description}
      </Text>

      </Card>

      </motion.div>
    ));
  
    return (
      <Container size="lg" py="xl">
        <Group justify="center">
          <Badge variant="filled" size="xl">
            WORK EXPERIENCE
          </Badge>
        </Group>
        
  
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Career Highlights
        </Title>
  
        <Text c='dimmed' className={classes.description} ta="center" mt="md">
          From teaching complex concepts to leading innovative technical projects, my career path is a testament to a commitment to excellence and growth.
        </Text>
  
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }