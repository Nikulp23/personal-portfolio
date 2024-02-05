import { Anchor, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandInstagram } from '@tabler/icons-react';
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
    <div className={classes.footer}>
      <div className={classes.inner}>
        © 2024 Nikul Patel

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>

        </Group>
      </div>
    </div>
  );
}