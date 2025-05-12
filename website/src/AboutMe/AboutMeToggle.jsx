import React from 'react';
import { MantineProvider, Badge, Title , Text } from '@mantine/core';
import SimpleTimeline from './Timeline';

// Replace these imports with your actual logo image paths:
import RpiLogo from './rpi.png';
import ConEdLogo from './icon.webp';
import NyLifeLogo from './nyl.avif';
import GradLogo from './class-new.png';

import styles from './About.module.css';

export function AboutSkillsToggle() {

  const steps = [
    {
      side: 'left',
      logo: RpiLogo,
      date: 'AUG 2022',
      description: (
        <>
          Bachelor of Science in Computer Science & ITWS<br></br>
        </>
      ),
    },
    {
      side: 'right',
      logo: ConEdLogo,
      date: 'MAY 2024 - APR 2025',
      description: 'Software Engineering Intern at Con Edison',
    },
    {
      side: 'left',
      logo: NyLifeLogo,
      date: 'MAY 2025 - PRESENT',
      description: 'Technology Engineer Intern at New York Life',
    },
    {
      side: 'right',
      date: '🎓 DEC 2025',
      logo: GradLogo,
      description: (
        <>
          B.S. in Computer Science & ITWS<br />
          Current GPA: 3.76 / 4.0
        </>
      ),
    },
    {
      side: 'left',
      logo: RpiLogo,
      date: 'JAN 2026 - DEC 2026',
      description: 'Masters in Computer Science at RPI',
    }
  ];

  return (
    <MantineProvider>
      <section className={styles.About} style={{ padding: '60px 20px' }} id={styles.About}>
      
        <div style={{ textAlign: 'center', padding: '5px' }}>
          <Badge variant="filled" size="xl">
            MY JOURNEY
          </Badge>
          <Title order={3} style={{ marginTop: '14px' }}>
            Milestones in My Tech Journey
          </Title>

          <Text c='dimmed' style={{ marginTop: '3px' }} ta="center" mt="md">
            I learn, build, and grow — here’s how my journey has taken shape.
          </Text>

          <div>
            <SimpleTimeline items={steps} />
          </div>
        </div>

      </section>
    </MantineProvider>
  );
}

export default AboutSkillsToggle;