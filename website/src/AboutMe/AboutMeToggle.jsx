import React from 'react';
import { MantineProvider, Container, SimpleGrid, Grid, Text, Paper } from '@mantine/core';
import { UserCardImage } from './UserCard';
import AboutMe from './AboutMe';
import Skills from './Skills';
import { Skeleton, rem } from '@mantine/core';
import { FeaturesCard } from './Trophy/FeaturesCard';

import python from "./logos/programmingLanguages/py.png"
import c from "./logos/programmingLanguages/c-.png"
import javar from "./logos/programmingLanguages/javar.png"
import html from "./logos/programmingLanguages/html.png"
import csharp from "./logos/programmingLanguages/c-sharp.png"
import php from "./logos/programmingLanguages/php.png"

import js from "./logos/programmingLanguages/js.png"

import mysql from "./logos/database/mysql.png"
import mongodb from "./logos/database/mongodb.png"
import github from "./logos/database/github.png"
import git from "./logos/database/git.png"
import linux from "./logos/database/linux.png"
import postman from "./logos/database/postman.png"
import visual from "./logos/database/visual-studio.png"

import angular from "./logos/frameworks/angular.png"
import react from "./logos/frameworks/react.png"
import azure from "./logos/frameworks/azure.png"
import docker from "./logos/frameworks/docker.png"
import doc from "./logos/frameworks/do.svg"
import net from "./logos/frameworks/net.png"
import nodejs from "./logos/frameworks/nodejs.png"

const code = [
  { title: 'Python', icon: python, color: 'violet' },
  { title: 'C++', icon: c, color: 'indigo' },
  { title: 'Java', icon: javar, color: 'blue' },
  { title: 'JavaScript', icon: js, color: 'green' },
  { title: 'C#', icon: csharp, color: 'teal' },
  { title: 'PHP', icon: php, color: 'cyan' },
  { title: 'HTML', icon: html, color: 'pink' },
];

const frData = [
  { title: 'Angular', icon: angular, color: 'violet' },
  { title: 'React', icon: react, color: 'indigo' },
  { title: 'Node JS', icon: nodejs, color: 'blue' },
  { title: 'Net', icon: net, color: 'green' },
  { title: 'Azure', icon: azure, color: 'teal' },
  { title: 'Docker', icon: docker, color: 'cyan' },
  { title: 'Digital Ocean', icon: doc, color: 'pink' },
];


const dbData = [
  { title: 'MySQL', icon: mysql, color: 'violet' },
  { title: 'MongoDB', icon: mongodb, color: 'indigo' },
  { title: 'Github', icon: github, color: 'blue' },
  { title: 'Git', icon: git, color: 'green' },
  { title: 'Linux', icon: linux, color: 'teal' },
  { title: 'Postman', icon: postman, color: 'cyan' },
  { title: 'Visual Studio', icon: visual, color: 'pink' },
];

const PRIMARY_COL_HEIGHT = '100vh';
const SECONDARY_COL_HEIGHT = 'calc(100vh / 3 - var(--mantine-spacing-md) / 2)'; // Adjusted calculation

export function AboutSkillsToggle() {
  return (
    <MantineProvider defaultColorScheme="light">

      <div className='container_split'>
          



      </div>



      {/* <Container
        my="md"
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          padding: 0,
        }}
      >
        <SimpleGrid
          cols={{ base: 1, sm: 2 }}
          spacing="md"
          style={{
            flexGrow: 1,
            width: '100%',
            height: '100%',
          }}
        >
          <Paper
            padding="md"
            style={{
              height: PRIMARY_COL_HEIGHT,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'green'
            }}
          >
            <div className='About' id='about'>
              <UserCardImage/>
            </div>
          </Paper>

          <Grid
            gutter="md"
            style={{
              width: '100%',
              height: '100%',
              display: 'grid',
              gridTemplateRows: '1fr 1fr', 
              gridTemplateColumns: '1fr 1fr',
              gap: 'md',
              gridAutoFlow: 'row',
            }}
          >
            <Grid.Col span={6} style={{ gridRow: '1 / span 1' }}>
              <Paper
                padding="md"
                style={{
                  height: SECONDARY_COL_HEIGHT,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'pink',
                }}
              >
                <div>
                  <FeaturesCard />
                </div>
                
              </Paper>
            </Grid.Col>
            <Grid.Col span={6} style={{ gridRow: '1 / span 1' }}>
              <Paper
                padding="md"
                style={{
                  height: SECONDARY_COL_HEIGHT,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'orange',
                }}
              >
                <div>
                  <FeaturesCard />
                </div>

              </Paper>
            </Grid.Col>
            <Grid.Col span={12} style={{ gridRow: '2 / span 1', gridColumn: '1 / span 2' }}>
              <Paper
                padding="md"
                style={{
                  height: SECONDARY_COL_HEIGHT,
                  display: 'flex',
                  backgroundColor: 'yellow',
                  width: '90vh'
                }}
              >
                <div>
                  <Skills mockdata={code}/>
                  <Skills mockdata={dbData}/>
                  <Skills mockdata={frData}/>
                </div>

              </Paper>
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container> */}
    </MantineProvider>
  );
}
