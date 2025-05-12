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
  import coned from './logos/coned.png';
  import nyl from './logos/nyl.avif';

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 }
    }),
    hover: { scale: 1.03 }
  };

  const mockdata = [
    {
      title: 'Technology Engineer Intern',
      date: 'MAY 2025 - PRESENT',
      technologies: [ "AWS CLOUD "],
      description: [
        '• Set to contribute to the deployment and automation of scalable AWS infrastructure using services such as EC2, S3, RDS, and Lambda.',
        '• Will collaborate with DevOps and SRE teams to monitor systems, troubleshoot issues, and optimize cloud operations.',
        '• Aiming to contribute to infrastructure-as-code initiatives and cloud optimization efforts using tools like AWS CloudFormation and Terraform.'
      ],
      image: nyl,
    },
    {
      title: 'Software Engineering Intern',
      date: 'MAY 2024 - APRIL 2025',
      technologies: [ "C#" , "SQL", "ANGULAR"],
      description: [
        '• Developed a .NET console application in C# to automate outage report workflows, streamlining manual reporting for system operators, and reducted processing time by 90%.',
        '• Created a .NET service in C# with SQL queries to analyze 40K+ outage records and extract critical information.',
        '• Designed C# APIs for transformer analysis across 50+ substations, enabling load evaluations.',
      ],
      image: coned,
    },
    {
      title: 'Project Lead and Developer',
      date: 'AUG 2023 - Present',
      technologies: [ "REACT.JS" , "PYTHON"],
      description:[
        '• Leading a team in developing CartX, a cost-optimizing shopping app, providing full-stack leadership with React for frontend and Node.js for backend, achieving up to 30% reduction in user shopping time.',
        '• Architected and implemented RESTful Python for web scraping to extract data from 4+ major retail chains.',
      ],
          image: rcos,
    },
    {
      title: 'Undergrad Teaching Assistant',
      date: 'AUG 2023 - Present',
      technologies: [ "AWS "],
      description: [
        '• Managing weekly lab sessions and office hours focused on Data Structures and Algorithms, overseeing student progress through checkpoints, and providing personalized academic support for C++ assignments.',
        '• Efficiently assisting professors in scanning and grading exams for over 450 students, ensuring delivery of grading tasks within a single day.'
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
          className={classes.cardImage}
        />
      </div>
    );

    const features = mockdata.map((feature) => (
      <motion.div
        key={feature.title}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className={classes.cardWrapper}
      >
        
      {/* eslint-disable-next-line */}
      <Card shadow="md" radius="md" className="${classes.card} test" padding="xl">
      
        {standardizeImage(feature.image, feature.title)}

        <div style={{ textAlign: 'center' }}>
          <Text fz="lg" fw={600} className={classes.cardTitle} mt="md">
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
        
  
        <Title order={3} className={classes.title} ta="center" mt="sm">
          Career Highlights
        </Title>
  
        <Text c='dimmed' className={classes.description} ta="center" mt="md">
        From leading innovative projects to gaining hands-on industry experience, my journey in technology reflects a commitment to growth, excellence, and continuous learning.
        </Text>
  
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="xl" mt={30}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }