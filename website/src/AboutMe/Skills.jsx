import {React, useRef} from 'react';
import "../Experience/FeaturesCards.module.css";
import '@mantine/core/styles.css';
import "../App.css";

import { Canvas, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';

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

import "./Skills.css"

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

function SkillSphere({ position, logo }) {
  const sphereRef = useRef();
  const texture = new TextureLoader().load(logo);

  useFrame(() => {
      sphereRef.current.rotation.x += 0.00;
      sphereRef.current.rotation.y += 0.00;
  });

  return (
      <mesh position={position} ref={sphereRef}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial map={texture} />
      </mesh>
  );
}

function SkillsShowcase() {
  return (
      <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {skills.map((skill, index) => (
              <SkillSphere key={index} logo={skill.logo} position={skill.position} />
          ))}
      </Canvas>
  );
}

export default SkillsShowcase;