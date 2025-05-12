import { Avatar } from "@mantine/core";
import classes from "./Home.module.css";
import React from "react";
import profilePic from "./new.png";

const Card = () => {
    return ( 
        <Avatar
            src={profilePic}
            alt="Nikul Patel"
            size={400}
            radius={300}
            styles={{
            root: {
                // border: '3px solid #1e1e1e',
                transform: 'rotate(-1deg)'
            },
            }}
            className={classes.avatar}
        />
      
    );
}
 
export default Card;