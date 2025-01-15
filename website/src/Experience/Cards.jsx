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
      title: 'Software Engineering Intern',
      date: 'MAY - PRESENT',
      description: [
        '• Developed an application for the Outage Scheduling System using Angular to automate outage report analysis, achieving an 90% reduction in time and minimizing error rates for senior system operators.',
        '• Improved transformer analysis for 50+ substations by developing custom API routes in C# to retrieve historical peak loads and transformer ratings, performing contingency-based calculations, and evaluating overall system load.',
        '• Achieved an 80% boost in efficiency by automating file generation and streamlining document integration with .NET scripting, and leveraged Con Edison’s frontend UI library to enhance system functionality.'
      ],
      image: coned,
    },
    {
      title: 'Project Lead and Developer',
      date: 'AUG 2023 - Present',
      description:[
        '• Leading a team in developing CartX, a cost-optimizing shopping app, providing full-stack leadership with React for frontend and Node.js for backend, achieving up to 30% reduction in user shopping time.',
        '• Architected and implemented RESTful API routes using Express JS and Selenium with Python for web scraping to extract data from 4+ major retail chains.',
        '• Performed data normalization on over 10,000 items in JSON format, designed and administered CRUD operations with MongoDB and JavaScript, resulting in a 5x improvement in data retrieval speed.'
      ],
          image: rcos,
    },
    {
      title: 'Undergrad Teaching Assistant',
      date: 'AUG 2023 - Present',
      description: [
        '• Managing weekly lab sessions and office hours focused on Data Structures and Algorithms, overseeing student progress through checkpoints, and providing personalized academic support for C++ assignments.',
        '• Efficiently assisting professors in scanning and grading exams for over 450 students, ensuring delivery of grading tasks within a single day.',
        ,
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
        
  
        <Title order={1} className={classes.title} ta="center" mt="sm">
          Career Highlights
        </Title>
  
        <Text c='dimmed' className={classes.description} ta="center" mt="md">
        From leading innovative projects to gaining hands-on industry experience, my journey in technology reflects a commitment to growth, excellence, and continuous learning.
        </Text>
  
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={30}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }