// import React from "react";
// import { Text } from "@mantine/core";
// import classes from "./Home.module.css";
// import { motion } from "framer-motion";

// import {
//   Card,
//   SimpleGrid,
//   UnstyledButton,
//   Anchor,
//   Group,
//   useMantineTheme,
// } from "@mantine/core";
// import {
//   IconCreditCard,
//   IconBuildingBank,
//   IconRepeat,
//   IconReceiptRefund,
//   IconReceipt,
//   IconReceiptTax,
//   IconReport,
//   IconCashBanknote,
//   IconCoin,
// } from "@tabler/icons-react";

// import Skills from "./Skills";



// import { Container, Grid, Skeleton, rem } from '@mantine/core';

// import python from "./logos/programmingLanguages/py.png"
// import c from "./logos/programmingLanguages/c-.png"
// import javar from "./logos/programmingLanguages/javar.png"
// import html from "./logos/programmingLanguages/html.png"
// import csharp from "./logos/programmingLanguages/c-sharp.png"
// import php from "./logos/programmingLanguages/php.png"


// import js from "./logos/programmingLanguages/js.png"

// import mysql from "./logos/database/mysql.png"
// import mongodb from "./logos/database/mongodb.png"
// import github from "./logos/database/github.png"
// import git from "./logos/database/git.png"
// import linux from "./logos/database/linux.png"
// import postman from "./logos/database/postman.png"
// import visual from "./logos/database/visual-studio.png"

// import angular from "./logos/frameworks/angular.png"
// import react from "./logos/frameworks/react.png"
// import azure from "./logos/frameworks/azure.png"
// import docker from "./logos/frameworks/docker.png"
// import doc from "./logos/frameworks/do.svg"
// import net from "./logos/frameworks/net.png"
// import nodejs from "./logos/frameworks/nodejs.png"

// const frData = [
//     { title: 'Angular', icon: angular, color: 'violet' },
//     { title: 'React', icon: react, color: 'indigo' },
//     { title: 'Node JS', icon: nodejs, color: 'blue' },
//     { title: 'Net', icon: net, color: 'green' },
//     { title: 'Azure', icon: azure, color: 'teal' },
//     { title: 'Docker', icon: docker, color: 'cyan' },
//     { title: 'Digital Ocean', icon: doc, color: 'pink' },
// ];


// const dbData = [
//     { title: 'MySQL', icon: mysql, color: 'violet' },
//     { title: 'MongoDB', icon: mongodb, color: 'indigo' },
//     { title: 'Github', icon: github, color: 'blue' },
//     { title: 'Git', icon: git, color: 'green' },
//     { title: 'Linux', icon: linux, color: 'teal' },
//     { title: 'Postman', icon: postman, color: 'cyan' },
//     { title: 'Visual Studio', icon: visual, color: 'pink' },
// ];


// const code = [
//     { title: 'Python', icon: python, color: 'violet' },
//     { title: 'C++', icon: c, color: 'indigo' },
//     { title: 'Java', icon: javar, color: 'blue' },
//     { title: 'JavaScript', icon: js, color: 'green' },
//     { title: 'C#', icon: csharp, color: 'teal' },
//     { title: 'PHP', icon: php, color: 'cyan' },
//     { title: 'HTML', icon: html, color: 'pink' },
// ];


// const PRIMARY_COL_HEIGHT = rem(300);
// const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

// const textVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };

// const AboutMe = () => {
//   return (

//     <Container my="md">
//       <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
//         <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
//         <Grid gutter="md">
//           <Grid.Col>
//             <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
//           </Grid.Col>
//           <Grid.Col span={6}>
//             <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
//           </Grid.Col>
//           <Grid.Col span={6}>
//             <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
//           </Grid.Col>
//         </Grid>
//       </SimpleGrid>
//     </Container>

//     // <motion.div initial="hidden" whileInView="visible" variants={textVariants}>
//     //   <h1 className={classes.title}>
//     //     <Text
//     //       component="span"
//     //       variant="gradient"
//     //       gradient={{ from: "blue", to: "cyan" }}
//     //       inherit
//     //     >
//     //       About Me!
//     //     </Text>
//     //   </h1>

//     //   {/* <Skills mockdata={code}/>

//     //   <Skills mockdata={dbData}/>

//     //   <Skills mockdata={frData}/> */}

//     //   {/* Awards: 1st Place Winner, NSBE-SHPE Hackathon - Spring 2024 */}

//     //   {/* <p>Rensselaer Polytechnic Institute - Bachelor of Science Troy, NY</p>
//     //   <p>
//     //     Dual Major in Computer Science and Information Technology and Web
//     //     Science
//     //   </p>

//     //   <p>
//     //     Programming Languages: Python, Java, C++, JavaScript, C, PHP, HTML,
//     //     Verilog
//     //   </p>
//     //   <p>
//     //     Technologies / Libraries: Angular, ASP.NET, React, NodeJS, Express.JS,
//     //     Selenium, Azure DevOps, Docker
//     //   </p>
//     //   <p>
//     //     Databases / Tools: SQL, MongoDB, Firebase, Github, Git, Linux, Postman,
//     //     Visual Studio, JSON
//     //   </p>
//     //   <p>Awards: 1st Place Winner, NSBE-SHPE Hackathon - Spring 2024</p>

//     //   <br></br> */}

//     //   {/* <p className={classes.description}>
//     //             <Text component="span" variant="gradient" gradient={{ from: 'black', to: 'black' }} inherit>
//     //             Hello, I'm Nikul Patel, a Computer Science and ITWS student at Rensselaer Polytechnic Institute with a fervent passion for full-stack development. My journey in computer science is driven by a relentless pursuit of knowledge and a desire to turn innovative ideas into tangible solutions.
//     //             </Text>
//     //         </p> */}

//     //   {/* <br></br> */}

//     //   {/* <p className={classes.description}>
//     //             <Text component="span" variant="gradient" gradient={{ from: 'black', to: 'black' }} inherit>
//     //             I am currently seeking summer internships or co-op opportunities where I can apply my skills in a dynamic and innovative environment. I am enthusiastic about contributing to a team that values creativity, efficiency, and a forward-thinking approach. I am eager to learn from seasoned professionals and engage in projects that push the boundaries of what's possible in tech.                        </Text>
//     //         </p> */}

//     //   {/* <br></br> */}

//     //   {/* <p className={classes.description}>
//     //             <Text component="span" variant="gradient" gradient={{ from: 'black', to: 'black' }} inherit>
//     //             Joining your team would be an exciting opportunity to grow and make meaningful contributions. Let's connect and explore the potential for collaboration!
//     //             </Text>
//     //         </p> */}
//     // </motion.div>
//   );
// };

// export default AboutMe;
