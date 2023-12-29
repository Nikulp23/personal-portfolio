import React from 'react';
import { SimpleGrid } from '@mantine/core';
import "./FeaturesCards.module.css";
import { Text } from '@mantine/core';
import classes from './Home.module.css';
import '@mantine/core/styles.css';
import "./App.css";

import cplusIcon from './logos/cplusplus-plain.svg';
import azure from './logos/azure.svg';
import bootstrap from './logos/bootstrap.svg';
import c from './logos/c.svg';
import github from './logos/github.svg';
import html from './logos/html.svg';
import java from './logos/java.svg';
import javascript from './logos/javascript.svg';
import mongodb from './logos/mongodb.svg';
import mysql from './logos/mysql.svg';
import nodejs from './logos/nodejs.svg';
import python from './logos/python.svg';
import react from './logos/react.svg';
import php from './logos/php.svg';
import ubuntu from './logos/ubuntu.svg';
import git from './logos/git.svg';
import fastapi from './logos/fastapi.svg';
import firebase from './logos/firebase.svg';
import express from './logos/express.svg';
import docker from './logos/docker.svg';

import { motion } from 'framer-motion';

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const skills = [
    { name: 'React.js', icon: react },
    { name: 'JavaScript', icon: javascript },
    { name: 'Python', icon: python },
    { name: 'C++', icon: cplusIcon },
    { name: 'HTML', icon: html },
    { name: 'Node.js', icon: nodejs },
    { name: 'MySQL', icon: mysql },
    { name: 'MongoDB', icon: mongodb },
    { name: 'Git', icon: git },
    { name: 'GitHub', icon: github },
    { name: 'Azure', icon: azure },
    { name: 'FastAPI', icon: fastapi },
    { name: 'Firebase', icon: firebase },
    { name: 'C', icon: c },
    { name: 'Express', icon: express },
    { name: 'Docker', icon: docker },
    { name: 'Java', icon: java },
    { name: 'CSS', icon: bootstrap },
    { name: 'PHP', icon: php },
    { name: 'Ubuntu', icon: ubuntu },
];

const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2.0 } }
};

const SkillCard = ({ name, icon }) => {
    return (
        <motion.div
        className="skill-card"
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
      
        <div className="skill-card">
            <img src={icon} alt={name} className="skill-icon" />
            <p className="skill-name">{name}</p>
        </div>

      </motion.div>
    );
  };

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <h1 className={classes.title}>
      {/* <motion.div initial="hidden" whileInView="visible" variants={textVariants}>
        <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            My Skills
        </Text>{' '}
        </motion.div> */}
        
    </h1>
      <SimpleGrid cols={5} spacing="lg">
        {skills.map(skill => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default SkillsSection;