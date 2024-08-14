import React from "react";
import { Text } from "@mantine/core";
import classes from "./ActionsGrid.module.css";

import {
  Card,
  SimpleGrid,
  UnstyledButton,
  Anchor,
  Group,
  useMantineTheme,
} from "@mantine/core";

const Skills = ({mockdata}) => {

    const items = mockdata.map((item) => (
        <UnstyledButton key={item.title} className={classes.item}>
            <img src={item.icon} alt={item.title} style={{ width: '4rem', height: '4rem', objectFit: 'cover' }} />
            <Text size="xs" mt={4}>
                {item.title}
            </Text>
        </UnstyledButton>
    ));

    return (
        <Card
            style={{width: 'fit-content'}}
            withBorder radius="md" className={classes.card}>
            {/* <>Programming Languages<//p> */}
            <SimpleGrid cols={7} mt="md">
                {items}
            </SimpleGrid>
        </Card>
    );
}
 
export default Skills;