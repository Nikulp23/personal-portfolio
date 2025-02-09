import { Anchor, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import classes from './FooterCentered.module.css';
import pdf from "./resume.pdf";

const links = [
  { link: pdf, label: 'View Resume' },
  // { link: '#', label: 'Contact Me' },
];

export function FooterCentered() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    
    <div className={classes.footer} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>

  {/* Centered content */}
  <div style={{ flex: '1', textAlign: 'center' }}>
    <a 
      href={pdf}
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ 
        textDecoration: 'none', 
        color: '#0073b1', /* LinkedIn blue or any color you like */
        fontWeight: 'bold', 
        fontSize: '16px', /* Adjust as needed */
        borderRadius: '5px',
        marginBottom: '10px'
      }}
    >
      View Resume
    </a>
    <div>© 2024 Nikul Patel</div>
  </div>

  {/* Right-aligned content */}
  <Group gap="xs" justify="flex-end" wrap="nowrap" style={{ display: 'flex' }}>
    <a href="https://www.linkedin.com/in/nikulpatel23/" target="_blank" rel="noopener noreferrer">
      <ActionIcon size="xl" variant="dark" radius="xl">
        <IconBrandLinkedin style={{ width: rem(25), height: rem(25) }} stroke={1.5} />
      </ActionIcon>
    </a>

    <a href="https://github.com/Nikulp23" target="_blank" rel="noopener noreferrer">
      <ActionIcon size="xl" variant="default" radius="xl">
        <IconBrandGithub style={{ width: rem(25), height: rem(25) }} stroke={1.5} />
      </ActionIcon>
    </a>
  </Group>

</div>

  );
}