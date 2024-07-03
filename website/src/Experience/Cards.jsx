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
  import React from 'react';

  import rcos from './logos/rcos.png';
  import datastructures from './logos/datastructures.png';
  import coned from './logos/coned.webp';

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
      title: 'Computer Operations Intern @ Con Edison',
      date: 'MAY 2024 - Present',
      description: [
        '- Developing a robust Windows Executable application to automate outage report processing in the Outage Scheduling System (OSS), reducing manual labor by 80% and minimizing errors at the Energy Control Center (ECC).',
        '- Enhancing operational efficiency by integrating automated conflict detection, streamlining the scheduling process, and significantly improving system reliability.'
      ],
      image: coned,
    },
    {
      title: 'Co-founder and Project Lead @ RCOS',
      date: 'AUG 2023 - Present',
      description:[
        '- Leading and guiding a group of students in developing CartX, a project aimed at optimizing shopping costs, providing technical leadership and support, and managing flow between server-side and client-side teams.',
        '- Designed a backend system to make custom API calls, implemented web scraping routes from using Python to retrieve data from top retail chains in JSON format, and stored the information in the database, enabling data analysis.'
      ],
          image: rcos,
    },
    {
      title: 'Undergraduate Data Structures Teaching Assistant',
      date: 'AUG 2023 - Present',
      description: [
        '- Managing weekly lab sessions and office hours focused on Data Structures and Algorithms, overseeing student progress through checkpoints, and providing personalized academic support for C++ assignments.',
        '- Efficiently assisting professors in scanning and grading exams for over 450 students, ensuring delivery of grading tasks within a single day.',
        '',
      ],
      image: datastructures,
    }
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

      <Card shadow="md" radius="md" className="{classes.card} test" padding="xl">
      
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

        <Text fz="sm" mt="sm" className={classes.cardDescription}>
          {feature.description.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < feature.description.length - 1 && <br />} <br/>
            </React.Fragment>
          ))}
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