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
  import biomed_logo from './logos/biomed_logo.png';
  import datastructures from './logos/datastructures.png';

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
      description: [
        '- Managing weekly lab sessions and office hours focused on Data Structures and Algorithms, overseeing student progress through checkpoints, and providing personalized academic support for C++ assignments.',
        '- Efficiently assisting professors in scanning and grading exams for over 450 students, ensuring delivery of grading tasks within a single day.',
        '',
      ],
      image: datastructures,
    },
    {
      title: 'Back End Technical Lead - CARTX',
      date: 'AUG 2023 - Present',
      description:[
        '- Designed a backend system to make custom API calls, implemented web scraping routes using Python to retrieve data for over 1000 items in JSON format, and stored the information in a databases.',
        '- Configured a remote-accessible MySQL server, established communication with the database, resulting in a 50% reduction in data processing time, and responsible for CRUD operations.'
      ],
          image: rcos,
    },
    {
      title: 'Work Study Biomedical Engineering Department',
      date: 'AUG 2023 - Present',
      description: [
        '- Initiated the development of a web-based academic system for Biomedical Students by web-scraping course information for over 46 majors from the college website and organizing it into SQL tables.',
        '- Scheduled to design and implement RESTful APIs for efficient data retrieval and manipulation, ensuring seamless integration between the client-side interface, server-side servers and databases.',
      ],
      image: biomed_logo,
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