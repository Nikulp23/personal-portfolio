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
        '- Managing weekly lab sessions and office hours focused on Data Structures, overseeing student progress through checkpoints, and providing personalized academic support for homework and lab assignments.',
        '- Efficiently assisting professors in scanning and grading exams using advanced grading software for over 350 students, ensuring timely completion of grading tasks within a single day of time.',
      ],
      image: datastructures,
    },
    {
      title: 'Open Source Project Lead - CARTX',
      date: 'AUG 2023 - Present',
      description:[
        '- Developing a React/Javascript-based initiative aimed at optimizing consumer shopping experiences in local areas.',
        '- Led the development of a backend system capable of making API calls and web scraping to compare prices from various local stores.',
        '- Collaborating with a team of developers and ensuring the successful implementation of key features and overall project execution.'
      ],
          image: rcos,
    },
    {
      title: 'Work Study Biomedical Engineering Department',
      date: 'AUG 2023 - Present',
      description: [
        '- Initiated the development of a web-based academic system for Biomedical students by successfully web-scraping course information from the college website and organizing it into MySQL table.',
        '- Responsible for a range of administrative tasks, including typing, data entry, and document scanning along with providing clerical support such as filing, shredding, and conducting campus errands.',
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